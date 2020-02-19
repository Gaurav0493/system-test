import React from 'react';
import logo from './logo.svg';
import './App.css';
import EnhancedTable from './components/Table/TableList';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import CustomAppBar from './components/AppBar'

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div className="App">
    <CustomAppBar/>
    <EnhancedTable/>
    </div>
  );
}

export default App;
