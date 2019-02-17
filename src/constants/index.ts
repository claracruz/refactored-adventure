import { IAppComponentState } from '../interfaces/app';
import { IWeather } from '../interfaces/weather';

export const actionTypes = {
	REQUEST_WEATHER_DATA: 'REQUEST_WEATHER_DATA',
	RECEIVE_WEATHER_DATA: 'RECEIVE_WEATHER_DATA',
	WEATHER_DATA_REQUEST_FAILED: 'WEATHER_DATA_REQUEST_FAILED'
};

export const APP_INITIAL_STATE : IAppComponentState = {
	error: '',
	loading: false,
	weather: [] as IWeather[]
};

