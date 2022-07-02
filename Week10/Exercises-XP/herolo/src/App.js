import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react'
import Weather from './components/Weather';
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';

export const weatherContext = createContext();

function App() {

  const [cities, setCities] = useState([]);
  const [currentWeather, setCurrentWeather] = useState('');
  const [dailyForecasts, setDailyForecasts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchText, setSearchText] = useState('Tel Aviv');

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <weatherContext.Provider value={
            {
              cities, setCities,
              currentWeather, setCurrentWeather,
              dailyForecasts, setDailyForecasts,
              favorites, setFavorites,
              searchText, setSearchText,
            }}>
            <Routes>
              <Route path='/' element={<Weather />} />
              <Route path='/favorites' element={<Favorites />} />
            </Routes>
          </weatherContext.Provider>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
