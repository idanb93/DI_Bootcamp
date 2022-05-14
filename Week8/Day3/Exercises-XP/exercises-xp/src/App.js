import './App.css';
import React from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';
import Color from './Color';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      show: true,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          Simulation 1:
          <ErrorBoundary>
            <BuggyCounter />
            <BuggyCounter />
          </ErrorBoundary>

          Simulation 2:
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>

          Simulation 3:
          <BuggyCounter />

          <Color />

          {this.state.show ? <Child /> : null}

          <button onClick={()=>{this.setState({show: !this.state.show})}}>
            Delete Header
          </button>

        </header>
      </div>
    );
  }
}

class Child extends React.Component {

  componentWillUnmount() {
    alert('The componenat name header is about to be unmounted');
  }

  render() {

    return (
      <>
        <header>
          <h1>Hello World!</h1>
        </header>
      </>
    )
  }
}

export default App;
