import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Menu from './UI_Menu';
import Cookies from 'js-cookie';

// Cookies.set('accessToken', null, { expires: 86400 })

function App() {
  return (
    <div>
      <Menu />
    </div>
  )
}

export default App;
