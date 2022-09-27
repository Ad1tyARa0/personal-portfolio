// Types.
export const SET_THEME = 'SET_THEME';

// Actions
export type ThemeReducerActionType = {
  type: typeof SET_THEME;
};

// Interface.
export interface ThemeReducerStateInterface {
  theme: string;
}

// Initial state
export const THEME_REDUCER_INITIAL_STATE: ThemeReducerStateInterface = {
  theme: 'light',
};

export const ThemeReducer = (
  state: ThemeReducerStateInterface,
  action: ThemeReducerActionType
): ThemeReducerStateInterface => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };

    default:
      return { ...state };
  }
};
