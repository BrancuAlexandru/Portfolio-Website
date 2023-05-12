import { projectMenuActionType as actionType} from '../actions/index';

const closeProjectMenu = () => {

};

const openProjectMenu = () => {

};

const projectMenuReducer = (state: string, action: actionType) => {
  switch(action.type) {
    case 'OPEN_PROJECT_MENU':
      openProjectMenu();
      return;
    case 'CLOSE_PROJECT_MENU':
      closeProjectMenu();
      return;
    default:
      return;
  }
};

export default projectMenuReducer;