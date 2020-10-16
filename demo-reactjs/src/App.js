import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import GiaoDien from './GiaoDien_DN_DK';
import Menu from './UI_Menu';


const useStyles = makeStyles((theme) => ({

}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <Menu />
    </div>
  )
}

export default App;
