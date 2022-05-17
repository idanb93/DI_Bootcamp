import './App.css';
// import GameTitle from './components/GameTitle';
import Cards from './components/Cards';
import ErrorBoundary from './ErrorBoundary';
import react from "react";

class App extends react.Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <ErrorBoundary>
          <Cards />
        </ErrorBoundary>
        <br/>
      </div>
    );
  }
}

export default App;
