import './App.css';
import FormComponent from './components/FormComponent';
import EnteredInformation from './components/EnteredInformation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='title'>
          <h1>Sample Form</h1>
        </div>
        <div id='form-to-fill'>
          <FormComponent />
        </div>
        <div id='entered-information'>
          <EnteredInformation/>
        </div>
      </header>
    </div>
  );
}

export default App;
