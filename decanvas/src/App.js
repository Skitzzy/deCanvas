import Grid from './components/Grid'
import './App.css';

function App() {

  const blah = {'data': [{'id': 1}, {'id': 2}, {'id': 3}]}

  return (
    <div className="App">
      <Grid arr={blah}/>
    </div>
  );
}

export default App;
