import './App.css';
import react from 'react';
import Counter from './components/Counter';

class App extends react.Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Counter/>
        </header>
      </div>
    );
  }
  
}

export default App;
