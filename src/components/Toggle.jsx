import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import sun from '../img/moon.png';
import moon from '../img/isun.png';


const Toggle = ({ theme, toggleTheme }) => {
  
  const isLight = theme === 'light';
  return (
    <button onClick={toggleTheme} >
      <img src={sun} alt=""/>
      <img src={moon} alt=""/>
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;