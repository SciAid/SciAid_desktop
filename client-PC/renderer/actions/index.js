/*
 * action types
 */

export const BOOK_SCANNED = 'BOOK_SCANNED';
export const ADD_BOOK_TO_REPO = 'ADD_BOOK_TO_REPO';
// Select for AddBooks
export const SELECT_ALL = 'SELECT_ALL';
export const SELECT_NONE = 'SELECT_NONE';
export const TOGGLE_SELECT = 'TOGGLE_SELECT';
export const TOGGLE_STAR = 'TOGGLE_STAR';

/*
 * action creators
 */

export function addFileInfo(fileInfo) {
  return { type: BOOK_SCANNED, ...fileInfo };
}

export function addBookToRepo(md5, srcFullPath, bookMeta) {
  return {
    type: ADD_BOOK_TO_REPO,
    md5,
    srcFullPath,
    bookMeta,
  };
}

export function selectAll() {
  return { type: SELECT_ALL };
}

export function selectNone() {
  return { type: SELECT_NONE };
}

export function toggleStar(idx) {
  return { type: TOGGLE_STAR, idx };
}

export function toggleSelect(idx) {
  return { type: TOGGLE_SELECT, idx };
}
