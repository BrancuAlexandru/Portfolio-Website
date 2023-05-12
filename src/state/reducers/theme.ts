import { themeActionType as actionType} from '../actions/index';

const toggleTheme = (payload: string) => {
  if (payload === 'dark') {
    // toggle theme to light
  } else if (payload === 'light') {
    // toggle theme to dark
  }
}

const themeReducer = (state: string, action: actionType) => {
  switch(action.type) {
    case 'TOGGLE_THEME':
      toggleTheme(action.payload);
      return;
    default:
      return;
  }
}

export default themeReducer;