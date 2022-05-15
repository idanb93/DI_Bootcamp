import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import ShopScreen from './components/ShopScreen';
import Nav from './components/Nav'
import ErrorBoundary from './ErrorBoundary';
import PostList from './PostList';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
            <Route path='/profile' element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
            <Route path='/shop' element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
          </Routes>
        </Router>
        <br />
        <PostList />
        <br />
        <Example1 />
        <br />
        <Example2 />
        <br />
        <Example3 />
        <br />
        <button onClick={fetchUrl}>I'm fetching something, check your console</button>
      </header>
    </div>
  );
}

async function fetchUrl() {

  const response = await fetch('https://webhook.site/bc7adec5-2bc9-4f9b-a066-a9c9dfa5a24a', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    })
  })
  .catch(err=>{
    console.log(err);
  })

  console.log(response);
}

export default App;
