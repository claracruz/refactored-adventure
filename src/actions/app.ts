import axios from 'axios';
import {
	actionTypes
} from '../constants';
import {
	IActionRequestWeatherData,
	IActionReceiveWeatherData,
	IActionFetchWeatherDataError
} from '../interfaces/weather';
import {
	WEATHER_API
} from '../constants/api';

const requestWeatherData = (text: string) : IActionRequestWeatherData => {
	return {
		type: actionTypes.REQUEST_WEATHER_DATA,
		text
	}
};

const receiveWeatherData = (text: string, data: any) : IActionReceiveWeatherData => {
	return {
		type: actionTypes.RECEIVE_WEATHER_DATA,
		data
	}
};

const weatherDataRequestFailed = (data: any) : IActionFetchWeatherDataError => {
	return {
		type: actionTypes.WEATHER_DATA_REQUEST_FAILED,
		error: data.response.data
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
