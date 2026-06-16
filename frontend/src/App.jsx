import './App.css';
import Grid from '@mui/material/Grid';
import Header from './Header';
import Board from './Board';

function App() {
  return (
    <Grid container direction="column" spacing={10}>
      
      <Grid item>
        <Header />
      </Grid>

      <Grid item>
        <Board />
      </Grid>

    </Grid>
  );
}

export default App;