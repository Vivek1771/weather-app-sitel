import axios from 'axios'
const API_KEY = '6bcb919083eb826910ee770f2a9523e3';
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast'

export const getWeatherData = async (city: string) => {
    try {
        const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&cnt=5&units=metric`)
        return response.data
    } catch (error: any) {
        return error.response.status
    }
}