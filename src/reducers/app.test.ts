import { IActionFetchWeatherData } from '../interfaces/weather';
import { appReducer } from './app';
import {
	actionTypes,
	APP_INITIAL_STATE
} from '../constants';


describe('app reducer', () => {
	it('should return the initial state', () => {
		expect(appReducer(undefined, {} as IActionFetchWeatherData)).toEqual(APP_INITIAL_STATE);
	});

	it('should handle REQUEST_WEATHER_DATA', () => {
		const startAction : IActionFetchWeatherData = {
			type: actionTypes.REQUEST_WEATHER_DATA,
			text: '',
			data: {},
			error: null
		};
		expect(appReducer(APP_INITIAL_STATE, startAction)).toEqual({
			error: '',
			loading: true,
			weather: []
		});
	});

	it('should handle RECEIVE_WEATHER_DATA', () => {
		const startAction: IActionFetchWeatherData = {
			type: actionTypes.RECEIVE_WEATHER_DATA,
			text: '',
			error: null,
			data: {
				city: { name: 'leeds', country: 'GB' },
				list: [
					{ dt: 1548417600, main: { temp: 10.37 }},
					{ dt: 1548428400, main: { temp: 9.78 }},
					{ dt: 1548439200, main: { temp: 130.37 }},
					{ dt: 1548460800, main: { temp: 20.37 }},
					{ dt: 1548482400, main: { temp: 90.37 }}
				]
			}
		};

		expect(appReducer(APP_INITIAL_STATE, startAction)).toEqual({
			error: '',
			loading: false,
			weather: [ {city: 'leeds, GB', sixAM: '90°C', sixPM: '130°C', twelveAM: '20°C', twelvePM: '10°C'}]

		});
	});

	it('should handle RECEIVE_WEATHER_DATA when existing weather item', () => {
		const city = { name: 'leeds', country: 'GB' };
		const  startList = [
			{ dt: 1548417600, main: { temp: 10.37 }},
			{ dt: 1548428400, main: { temp: 9.78 }},
			{ dt: 1548439200, main: { temp: 130.37 }},
			{ dt: 1548460800, main: { temp: 20.37 }},
			{ dt: 1548482400, main: { temp: 90.37 }}
		];
		const startAction : IActionFetchWeatherData = {
			type: actionTypes.RECEIVE_WEATHER_DATA,
			text: '',
			error: null,
			data: {
				city,
				list: [
					{ dt: 1548417600, main: { temp: 108.37 }},
					{ dt: 1548428400, main: { temp: 98.78 }},
					{ dt: 1548439200, main: { temp: 1380.37 }},
					{ dt: 1548460800, main: { temp: 208.37 }},
					{ dt: 1548482400, main: { temp: 908.37 }}
				]
			}
		};
		appReducer(undefined, {
			type: actionTypes.RECEIVE_WEATHER_DATA,
			text: '',
			error: null,
			data: {
				city,
				list: startList
			}
		});
		expect(appReducer(APP_INITIAL_STATE, startAction)).toEqual({
			error: '',
			loading: false,
			weather: [ {city: 'leeds, GB', sixAM: '908°C', sixPM: '1380°C', twelveAM: '208°C', twelvePM: '108°C'}]

		});
	});

});
