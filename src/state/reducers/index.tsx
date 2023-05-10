import { combineReducers } from 'redux';
import projectMenuReducer from './projectMenu';
import themeReducer from './theme';

const allReducers = combineReducers({
  projectMenu: projectMenuReducer,
  theme: themeReducer
});

export default allReducers;