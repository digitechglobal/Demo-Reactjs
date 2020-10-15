import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import GiaoDien from './GiaoDien_DN_DK';


const useStyles = makeStyles((theme) => ({

}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <GiaoDien />
    </div>
  )
}

export default App;
