import React from 'react';
import ReactLogo from '../assets/react-logo.png';
import ReduxLogo from '../assets/redux-logo.png';
import './App.scss';

const App = () => (
  <div className='sample'>
    <img src={ReactLogo}/>
    <img src={ReduxLogo}/>
    Welcome to React!
  </div>
);

export default App;
