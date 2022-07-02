import { useEffect, useContext } from 'react';
import { weatherContext } from '../App';

function ForecastForCity(props) {

    const { cities, dailyForecasts, setDailyForecasts } = useContext(weatherContext);
    const apiKey = 'eN0alDPtkUQYl5oluhX4ge7FsF5YYzJN';

    useEffect(() => {
        get5DaysForecastForCity();
    }, [cities])

    const get5DaysForecastForCity = () => {

        try {
            fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cities[0].Key}?apikey=${apiKey}`)
                .then(res => res.json())
                .then(data => {
                    setDailyForecasts(data.DailyForecasts);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        catch (error) {
            console.log(error);
        }
    }

    if (cities.length > 0) {
        return (
            <div id='forecast-container'>
                {dailyForecasts.map((day, i) => {
                    return (
                        <div className='day-container' key={i}>
                            <h3 style={{ color: 'black' }}> {day.Date.split('T')[0]}</h3>
                            <h3 style={{ color: 'black' }}> {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(day.Date.split('T')[0]).getDay()]}</h3>
                            <h4 style={{ color: 'black' }}> {Math.floor((parseInt(day.Temperature.Minimum.Value) - 32) / 1.8)}c - {Math.floor((parseInt(day.Temperature.Maximum.Value) - 32) / 1.8)}c </h4>

                            {day.Day.Icon < 10 ?
                                <img src={`https://developer.accuweather.com/sites/default/files/0${day.Day.Icon}-s.png`} /> :
                                <img src={`https://developer.accuweather.com/sites/default/files/${day.Day.Icon}-s.png`} />
                            }

                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <></>
        )
    }

}

export default ForecastForCity;