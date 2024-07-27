import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className='App'>
    <div className='container'>
    <Weather />
    <footer className='footer'>
      This project was coded by <a href='https://www.linkedin.com/in/natalia-thome/' target='_blank' rel='noreferrer'>Natália Thomé</a> and is {""}
      <a href='https://github.com/thomenat/my-clima-react' target='_blank' rel='noreferrer'>
      open-sourced on GitHub
      </a>
    </footer>

    </div>
    </div>
  );
}

