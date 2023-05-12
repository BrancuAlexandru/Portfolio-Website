import { Dispatch } from "redux";
import ActionTypes from "../action-types";
import { themeActionType, projectMenuActionType } from "../actions/index";

export const openProjectMenu = () => {
  return (dispatch: Dispatch<projectMenuActionType>) => {
    dispatch({
      type: ActionTypes.OPEN_PROJECT_MENU
    })
  }
}

export const closeProjectMenu = () => {
  return (dispatch: Dispatch<projectMenuActionType>) => {
    dispatch({
      type: ActionTypes.CLOSE_PROJECT_MENU
    })
  }
}

export const toggleTheme = (theme:string) => {
  return (dispatch: Dispatch<themeActionType>) => {
    dispatch({
      type: ActionTypes.TOGGLE_THEME,
      payload: theme
    })
  }
}