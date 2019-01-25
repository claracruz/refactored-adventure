import axios from 'axios';
import {
	REQUEST_WEATHER_DATA,
	RECEIVE_WEATHER_DATA,
	WEATHER_DATA_REQUEST_FAILED
} from '../constants';
import { WeatherType } from '../constants/types';
import {
	WEATHER_API
} from '../constants/api';

export interface IRequestWeatherData {
	type: REQUEST_WEATHER_DATA;
	data: string;
}

export interface IReceiveWeatherData {
	type: RECEIVE_WEATHER_DATA;
	data: WeatherType;
}

export interface IWeatherDataRequestFailed {
	type: WEATHER_DATA_REQUEST_FAILED;
	data: any;
}

const requestWeatherData = (data: string) : IRequestWeatherData => {
	return {
		type: REQUEST_WEATHER_DATA,
		data
	}
};

const receiveWeatherData = (text: string, data: object) : IReceiveWeatherData => {
	return {
		type: RECEIVE_WEATHER_DATA,
		data
	}
};

const weatherDataRequestFailed = (data: any) : IWeatherDataRequestFailed => {
	return {
		type: WEATHER_DATA_REQUEST_FAILED,
		data: data.response.data
	}
};

export const fetchWeatherData = (cityId: string, text: string) => {
	return (dispatch: any) => {
		dispatch(requestWeatherData(text));
		return axios({
			method: 'GET',
			url: WEATHER_API + cityId
		}).then((res: any) =>
			dispatch(receiveWeatherData(text, res.data))
		).catch(function (res: any) {
			dispatch(weatherDataRequestFailed(res))
		});
	}
};
