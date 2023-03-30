import { useState, useCallback } from 'react'
import { Box, InputBase, Button, styled } from '@mui/material';
import Spinner from 'react-bootstrap/Spinner';
import { getWeatherData } from '../Services/WeatherApi'
import WeatherData from './WeatherData';

function Header() {

    const [city, setCity] = useState<string>('')
    const [data, setData] = useState<null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleClick = useCallback(async () => {
        if (city?.length > 3) {
            setLoading(true)
            const response = await getWeatherData(city)
            setLoading(false)
            setData(response)
        }
    }, [city])


    const handleChangeCity = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCity(e.target.value)
    }, [])


    const Container = styled(Box)({
        background: '#635799',
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        borderRadius: '0 20px 0  0'
    });

    const Input = styled(InputBase)({
        color: '#FFF',
        marginRight: 20,
        fontSize: 18,
    });

    const ButtonCall = styled(Button)({
        background: '#11111D'
    })


    return (
        <>
            <Container>
                <Input
                    placeholder="City"
                    value={city}
                    onChange={(e) => handleChangeCity(e)}
                    name="city"
                    autoFocus
                />
                {loading ?
                    <span>
                        <Spinner animation="border" />
                    </span>
                    :
                    <ButtonCall
                        variant="contained"
                        onClick={() => handleClick()}
                    >Get Weather
                    </ButtonCall>}
            </Container>
            {data && data !== 404 ? <WeatherData data={data} />
                :
                <p className="text-center mt-5">Please enter a valid city.</p>}
        </>
    )
}

export default Header