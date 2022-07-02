
import Autocomplete from './Autocomplete';
import CityCurrentWeather from './CityCurrentWeather';
import ForecastForCity from './ForecastForCity';

const Weather = (props) => {

    return (
        <>
            <Autocomplete />

            <section id='main-section'>

                <CityCurrentWeather />

                < ForecastForCity />

            </section>

        </>
    )
}

export default Weather;