import './App.css';
import Title from './components/Title';
import Robots from './components/Robots';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Title />
        </div>
        <div id='main-section'>
          <Robots />
        </div>
      </header>
    </div>
  );
}

export default App;
