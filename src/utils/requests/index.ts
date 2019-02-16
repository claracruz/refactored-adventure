import axios from 'axios';
import { WEATHER_API } from '../../constants/api';

export const fetchWeatherData = (cityId: string) => {
	return axios({
		method: 'GET',
		url: WEATHER_API + cityId
	});
};
