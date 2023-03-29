import { Input } from '@mui/material';
import React, { useState } from 'react'
import { getWeatherData } from '../Services/WeatherApi'
import WeatherData from './WeatherData';

function Header() {

    const [city, setCity]: any = useState()
    const [data, setData] = useState();

    async function handleClick() {
        if (city?.length > 0) {
            const response: any = await getWeatherData(city)
            setData(response)
            setCity('')
        }
    }

    function handleChangeCity(e: any) {
        setCity(e.target.value)
    }

    return (
        <>
            <Input type="text" placeholder="Enter City" value={city} onChange={(e) => handleChangeCity(e)} />
            <button type='button' onClick={handleClick}>Search</button>
            {data && <WeatherData data={data} />}
        </>
    )
}

export default Header