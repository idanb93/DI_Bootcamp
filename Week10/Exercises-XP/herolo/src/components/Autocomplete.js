import { useState, useContext, useEffect } from 'react';
import { weatherContext } from '../App';

function Autocomplete(props) {

    const [loading, setLoading] = useState(true);
    const { cities, setCities, searchText, setSearchText } = useContext(weatherContext);
    const apiKey = 'eN0alDPtkUQYl5oluhX4ge7FsF5YYzJN';

    useEffect(()=>{

        try {
            fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${searchText}`)
                .then(res => res.json())
                .then(data => {
                    setCities(data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        catch (error) {
            console.log(error);
        }
    }, []);

    const handleAutoComplete = (e) => {

        setSearchText(e.target.value);

        try {
            fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${e.target.value}`)
                .then(res => res.json())
                .then(data => {
                    setCities(data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <h4 style={{ color: 'black' }}>Please enter a name of a city: </h4>

            <input type={'text'} name={'choose-city'} id={'choose-city'} list={'cities'} onChange={(e) => handleAutoComplete(e)} />

            <datalist id='cities'>

                {cities.map((city, i) => {
                    return (
                        <option key={i} value={city.LocalizedName}>{city.LocalizedName}</option>
                    )
                })}

            </datalist>

        </div>
    )
}

export default Autocomplete;