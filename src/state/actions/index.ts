import ActionTypes from "../action-types"

export type projectMenuActionType = {
  type: string
}

export type themeActionType = {
  type: string,
  payload: string
}

export const openProjectMenu = () => {
  return {
    type: ActionTypes.OPEN_PROJECT_MENU
  }
};

export const closeProjectMenu = () => {
  return {
    type: ActionTypes.CLOSE_PROJECT_MENU
  }
};

export const toggleTheme = (theme: string) => {
  return {
    type: ActionTypes.TOGGLE_THEME,
    payload: theme
  }
}