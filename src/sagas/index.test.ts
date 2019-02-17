import {
	getWeatherData,
	onRequestWeatherData
}   from './';
import {
	requestWeatherData,
	receiveWeatherData,
	weatherDataRequestFailed
} from '../actions';
import { put, call, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../constants';
import * as services from '../utils/requests';


describe('On request project list', () => {
	const testSuccessResponse = {
		data: { success: true }
	};
	Object.defineProperty(services, 'fetchWeatherData', {
		value: jest.fn(() => Promise.resolve({ ...testSuccessResponse }))
	});
	const city = 'test';

	it('gets the execution context', () => {
		const generator = onRequestWeatherData();
		const result = generator.next().value;
		expect(result).toEqual(takeLatest(actionTypes.REQUEST_WEATHER_DATA, getWeatherData));
	});

	describe('Fetch data successfully', () => {
		const generator = getWeatherData(requestWeatherData(city));
		let result : any = null;

		it('calls the API', () => {
			result = generator.next(city).value;
			expect(JSON.stringify(result)).toEqual(JSON.stringify(call(() => services.fetchWeatherData(city))));
		});

		it('raises success action', async () => {
			const res = await result.payload.fn();
			expect(JSON.stringify(generator.next(res).value)).toEqual(JSON.stringify(put(receiveWeatherData({
				...testSuccessResponse.data
			}))));
		});

		it('performs no further work', () => {
			const result = generator.next().done;
			expect(result).toBe(true);
		});
	});

	describe('Throws error on failure', () => {
		const generator = getWeatherData(requestWeatherData(city));
		let result : any = null;

		it('calls the API', () => {
			result = generator.next(city).value;
			expect(JSON.stringify(result)).toEqual(JSON.stringify(call(() => services.fetchWeatherData(city))));
		});

		it('raises error action', () => {
			let result;
			const error = { response: { data: 'An error occurred!' } };
			if (generator.throw) {
				result = generator.throw({...error}).value;
			}
			expect(result).toEqual(put(weatherDataRequestFailed({... error})));
		});

		it('performs no further work', () => {
			const result = generator.next().done;
			expect(result).toBe(true);
		});
	});

});

