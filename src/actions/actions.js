import {
  CHANGE_NR,
  CHANGE_BEZEICHNUNG,
  CHANGE_DAUER,
  CHANGE_VORGÄNGER,
  CHANGE_NACHFOLGER,
  ADD_NODE,
  DELETE_NODE,
  DOWNLOAD_JSON,
  DOWNLOAD_CSV,
  UPLOAD_JSON,
  UPLOAD_CSV
} from './actionTypes';

export const addNode = () => ({
  type: ADD_NODE
});

export const deleteNode = () => ({
  type: DELETE_NODE
});

export const changeNr = (value, idx) => ({
  type: CHANGE_NR,
  payload: { value, idx }
});

export const changeBezeichnung = (value, idx) => ({
  type: CHANGE_BEZEICHNUNG,
  payload: { value, idx }
});

export const changeDauer = (value, idx) => ({
  type: CHANGE_DAUER,
  payload: { value, idx }
});

export const changeVorgänger = (array, idx) => ({
  type: CHANGE_VORGÄNGER,
  payload: { array, idx }
});

export const changeNachfolger = (array, idx) => ({
  type: CHANGE_NACHFOLGER,
  payload: { array, idx }
});

export const downloadJSON = () => ({
  type: DOWNLOAD_JSON
});

export const downloadCSV = () => ({
  type: DOWNLOAD_CSV
});

export const uploadJSON = file => ({
  type: UPLOAD_JSON,
  payload: { file }
});
export const uploadCSV = file => ({
  type: UPLOAD_CSV,
  payload: { file }
});
