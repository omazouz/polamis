import logo from './logo.svg';
import './App.css';
import {Button, Checkbox} from '@material-ui/core';

function App() {
  return (
    <>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <Checkbox
  value="checkedA"
  inputProps={{ 'aria-label': 'Checkbox A' }}
/>
    </>
  );
}

export default App;
