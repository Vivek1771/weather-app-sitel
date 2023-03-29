import React from 'react'
import { Typography, Card, CardContent } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function WeatherData({ data }: any) {
    data && console.log("data", data.list[0])

    const city = data.city
    const today: any = data.list[0]

    return (
        <div style={{ "backgroundColor": "aqua" }}>
            <Card sx={{ maxWidth: 270, textAlign: "center", backgroundColor: "aqua" }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {city.country}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {city.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Temp: {Math.round(today.main.temp)}
                    </Typography>
                    <Typography variant="body2">
                        {today.weather[0].main} ({today.weather[0].description})
                        <br />
                        Max: {Math.ceil(today.main.temp_max)}, Min:{' '} {Math.floor(today.main.temp_min)}
                    </Typography>
                </CardContent>
            </Card>
            <Container>
                <Row>
                    {data.list.map((item: any, i: any) => (
                        <Col key={i} className="inline-block text-center">
                            <p className="text-sm">
                                {i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}
                            </p>
                            <img
                                alt="weatherImage"
                                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                            />
                            <p className="text-sm font-bold">
                                {Math.round(item.main.temp)}
                            </p>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>

    )
}

export default WeatherData