import {
	actionTypes
} from '../constants';
import {
	IActionRequestWeatherData,
	IActionReceiveWeatherData,
	IActionFetchWeatherDataError
} from '../interfaces/weather';

export const requestWeatherData = (city: string) : IActionRequestWeatherData => ({
	type: actionTypes.REQUEST_WEATHER_DATA,
	city
});

export const receiveWeatherData = (data: any) : IActionReceiveWeatherData => ({
	type: actionTypes.RECEIVE_WEATHER_DATA,
	data
});

export const weatherDataRequestFailed = (data: any) : IActionFetchWeatherDataError => {
	return ({
		type: actionTypes.WEATHER_DATA_REQUEST_FAILED,
		error: (data) ? data.response.data : 'An error occurred! Unable to retrieve weather data'
	});
};
