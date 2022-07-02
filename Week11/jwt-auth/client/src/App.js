import {Route, Routes} from 'react-router-dom';
import LoginRegisterForm from './components/LoginRegisterForm';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import './App.css';
import {useState, createContext} from 'react';
// import {ToastContainer} from 'react-toastify';
import { Auth } from './auth/Auth'

export const AppContext = createContext(null);

function App() {

  const [accessToken, setAccessToken] = useState('');

  return (
    <AppContext.Provider value={{accessToken, setAccessToken}}>
    <div className="App">
      <Nav/>
        <Routes>
          <Route path='/login' element={ <LoginRegisterForm title='Login'/> } />
          <Route path='/register' element={ <LoginRegisterForm title='Register'/> } />
          <Route path='/home' element={ <Auth><Home/></Auth> } />
          <Route path='/' element={ <Auth> <Home/> </Auth> } />
          <Route path='/about' element={ <Auth> <About/> </Auth> }/>
        </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
