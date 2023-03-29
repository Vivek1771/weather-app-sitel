import React from 'react'
import { Typography, Card, CardContent } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WeatherData = React.memo(({ data }: any) => {

    const city = data?.city, today = data?.list[0]

    return (
        <div style={{ "backgroundColor": "#635799", "color": "white", "height": "71vh", "borderRadius": "0 0 20px 0" }}>
            <>
                <Card sx={{ width: "max-width", textAlign: "center", backgroundColor: "#635799", color: "white" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                            {city.country}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {city.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }}>
                            {Math.round(today.main.temp)}°
                        </Typography>
                        <Typography variant="body2">
                            {today.weather[0].main} ({today.weather[0].description})
                            <br />
                            Max: {Math.ceil(today.main.temp_max)}°, Min:{' '} {Math.floor(today.main.temp_min)}°
                        </Typography>
                    </CardContent>
                </Card>
                <Container>
                    <Row>
                        {data.list.map((item: any, i: any) => (
                            <Col key={i} className="inline-block text-center mt-5 ">
                                <p>
                                    {i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}
                                </p>
                                <img
                                    alt="weatherImage"
                                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                />
                                <p>
                                    {Math.round(item.main.temp)}°
                                </p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        </div>
    )
})

export default WeatherData
