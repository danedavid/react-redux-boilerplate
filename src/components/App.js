import React from 'react';
import ReactLogo from '../assets/react-logo.png';
import ReduxLogo from '../assets/redux-logo.png';
import './App.scss';

const App = () => (
  <div className='app-container'>
    <div className='banner'>
      <img src={ReactLogo}/>
      <img src={ReduxLogo}/>
    </div>
    <div className='content'>
      React & Redux Boilerplate
    </div>
  </div>
);

export default App;
