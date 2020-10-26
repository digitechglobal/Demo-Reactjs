import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Menu from './Components/Menu/UI_Menu';
import Cookies from 'js-cookie';

let checkCookies = Cookies.get('accessToken');
if (checkCookies == null) {
  Cookies.set('accessToken', null, { expires: 86400 })
}

function App() {

  return (
    <Menu />
  )
}

export default App;
