import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './top-fixed.scss';
import SearchInput from '../search-input/index';
import FileInput from '../file-input/index';

import { updateQuery } from '../../actions';

// https://github.com/electron/electron/issues/9920
const { ipcRenderer } = window.require('electron');

const mapStateToProps = (state, ownProps) => ({
  bookList: state.bookList,
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  updateQuery: query => dispatch(updateQuery(query)),
});

function handleFileChange(path) {
  ipcRenderer.send('scan:task:new', path);
}

function handleClose(e) {
  e.preventDefault();
}

function ConnectedTopFixed(props) {
  // 上传文件
  const fileInput = () => (
    <FileInput id="file-input" onFileChangeCb={handleFileChange} />
  );

  return (
    <div className={styles.wrap}>
      <button className={styles.close} onClick={handleClose} />
      {props.type === 'add' ? fileInput() : <SearchInput onSearchChangeCb={props.updateQuery} />}
    </div>
  );
}

ConnectedTopFixed.propTypes = {
  type: PropTypes.string,
  updateQuery: PropTypes.func.isRequired,
};
ConnectedTopFixed.defaultProps = {
  // 表示要展示 搜索(search) / 增加文件(add)
  type: 'add',
};

const TopFixed = connect(mapStateToProps, mapDispatchToProps)(ConnectedTopFixed);

export default TopFixed;
