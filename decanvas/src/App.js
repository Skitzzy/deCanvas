import Grid from './components/Grid'
import Modal from './components/Modal'
import './App.css';

function App() {

  const blah = {'data': [{'key': 1}, {'key': 2}, {'key': 3}]}

  return (
    <div className="App">
      <Grid arr={blah}/>
      <Modal modalActive={true}/>
    </div>
  );
}

export default App;
