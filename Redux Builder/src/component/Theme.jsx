import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_THEME } from '../redux/actionType';

const Theme = () => {
  const theme = useSelector((store) => store.ThemeReducer);
  const dispatch = useDispatch();

  const toggleThemeDark = () => {
    const newTheme = theme === 'light' ? 'dark' : 'dark';
    dispatch({ type: SET_THEME, payload: newTheme });
  };

  const toggleThemeLight = () => {
    const newTheme = theme === 'light' ? 'light' : 'light';
    dispatch({ type: SET_THEME, payload: newTheme });
  };

  return (
    <div className={`theme-container ${theme}`}>
      <div className="buttons">
        <button className="toggle-button dark-button" onClick={toggleThemeDark}>
          Switch to Dark
        </button>
        <button className="toggle-button light-button" onClick={toggleThemeLight}>
        Switch to Light
        </button>
      </div>
    </div>
  );
};

export default Theme;
