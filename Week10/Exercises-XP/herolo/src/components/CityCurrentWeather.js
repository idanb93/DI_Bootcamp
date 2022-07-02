import { useEffect, useContext } from 'react';
import { weatherContext } from '../App';
import { Link } from 'react-router-dom';

function CityCurrentWeather(props) {

    const { cities, currentWeather, setCurrentWeather, favorites, setFavorites, dailyForecasts, setDailyForecasts } = useContext(weatherContext);
    const apiKey = 'eN0alDPtkUQYl5oluhX4ge7FsF5YYzJN';

    useEffect(() => {
        getCurrentWeatherForCity();
    }, [cities])

    const getCurrentWeatherForCity = () => {
        try {
            fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cities[0].Key}?apikey=${apiKey}`)
                .then(res => res.json())
                .then(data => {
                    setCurrentWeather(data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        catch (error) {
            console.log(error);
        }

    }

    const addCityToFavorites = () => {

        alert(`${cities[0].LocalizedName} was added to favorites`);

        let cityClone = { ...cities[0]}
        let cityAndCurrentWeather = { ...cityClone, currentWeather: currentWeather[0], dailyForecasts: dailyForecasts[0] }

        setFavorites(prevFavorites => {
            return [...prevFavorites, cityAndCurrentWeather];
            // return [...prevFavorites, cities[0], currentWeather[0]];
        })
    }

    if (cities.length > 0 && currentWeather.length > 0) {
        return (
            <div id='current-weather-container'>
                <div id='city-current-weather'>
                    <h4 style={{ color: 'black' }}>{cities[0].LocalizedName}</h4>
                    <h4 style={{ color: 'black' }}> {currentWeather[0].Temperature.Metric.Value}c </h4>
                </div>
                <div>
                    <Link className="navbar-brand text-white text-lg brand-text" to={`/`}>
                        <button type='button' id='add-to-favorites' onClick={addCityToFavorites}>Add to Favorites</button>
                    </Link>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }

}

export default CityCurrentWeather;