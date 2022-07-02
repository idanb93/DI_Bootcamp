import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { weatherContext } from '../App';
import { useNavigate } from "react-router-dom";


const Favorites = () => {

    const { currentWeather, setCurrentWeather, favorites, searchText, setSearchText } = useContext(weatherContext);
    const navigate = useNavigate();

    const handleChooseFavorite = (cityName) => {
        setSearchText(cityName);
        navigate("/", { replace: true });
    }

    return (
        <>
            <h2 style={{ color: 'black' }}>Favorites</h2>
            <section id='favorites'>
                {favorites.map((favoriteCity, i) => {
                    return (
                        <div className={'favorite-city'} key={i} onClick={(e)=>handleChooseFavorite(favoriteCity.LocalizedName)}>
                            <p style={{ color: 'black' }}>{favoriteCity.AdministrativeArea.ID}</p>
                            <p style={{ color: 'black' }}>{favoriteCity.LocalizedName}</p>
                            <p style={{ color: 'black' }}>{favoriteCity.currentWeather.Temperature.Metric.Value}c</p>
                            {favoriteCity.dailyForecasts.Day.Icon < 10 ?
                                <img src={`https://developer.accuweather.com/sites/default/files/0${favoriteCity.dailyForecasts.Day.Icon}-s.png`} /> :
                                <img src={`https://developer.accuweather.com/sites/default/files/${favoriteCity.dailyForecasts.Day.Icon}-s.png`} />
                            }
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default Favorites