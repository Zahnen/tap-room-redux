import masterKegListReducer from './keg-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import editingReducer from './editing-reducer';
import selectedKegReducer from './selected-keg-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  masterKegList: masterKegListReducer,
  formVisibleOnPage: formVisibleReducer,
  editing: editingReducer,
  selectedKeg: selectedKegReducer
});

export default rootReducer;