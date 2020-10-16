import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import GiaoDien from './GiaoDien_DN_DK';
import Menu from './UI_Menu';
import Card from './UI_Card';


const useStyles = makeStyles((theme) => ({

}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <Menu />
      {/* <Card /> */}
    </div>
  )
}

export default App;
