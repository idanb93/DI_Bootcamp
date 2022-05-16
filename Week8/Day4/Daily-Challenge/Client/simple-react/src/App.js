import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageFromServer: '',
      responseToTheDataSent: '',
    }
  }

  sendDataToServer = (event)=> {

    const userInput = document.getElementById('user-input');
    const userInputValue = userInput.value;

    fetch('http://localhost:5000/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userInputValue,
      })
    })
      .then(res => { return res.text(); })
      .then((data) => {
        this.setState({ responseToTheDataSent: data })
      })
      .catch(err => {
        console.log(err)
      })

  }

  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <header className="App-header">
            {this.state.messageFromServer}
            <form>
              <input id='user-input' type={'text'} />
              <button type='button' onClick={this.sendDataToServer}>Submit to Server</button>
            </form>
            <br />
            {this.state.responseToTheDataSent}
          </header>
        </div>
      </ErrorBoundary>
    );
  }


  async componentDidMount() {

    try {
      const response = await fetch('http://localhost:5000/api/hello');
      const data = await response.text();
      this.setState({ messageFromServer: data });

    } catch (err) {
      console.log(err);
    }
  }


}

export default App;
