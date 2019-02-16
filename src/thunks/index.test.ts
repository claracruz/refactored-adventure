import { onRequestWeatherData } from './';
import { actionTypes } from "../constants";
import * as services  from '../utils/requests';

describe('onRequestWeatherData', () => {

	it('should handle weather data success response', async () => {
		const data = { test: true };
		Object.defineProperty(services, 'fetchWeatherData', {
			value: jest.fn(() => Promise.resolve({data}))
		});
		const dispatch = jest.fn();
		const city = 'york';

		await onRequestWeatherData(city)(dispatch);

		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(dispatch).toBeCalledWith({ type: actionTypes.REQUEST_WEATHER_DATA, city });
		expect(dispatch).toHaveBeenLastCalledWith({ type: actionTypes.RECEIVE_WEATHER_DATA, data });
	});

	it('should handle weather data error response', async () => {
		const error = { response: { data: 'an error occurred!' } };
		Object.defineProperty(services, 'fetchWeatherData', {
			value: jest.fn(() => Promise.reject({ ...error }))
		});
		const dispatch = jest.fn();
		const city = 'york';

		await onRequestWeatherData(city)(dispatch);

		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(dispatch).toBeCalledWith({ type: actionTypes.REQUEST_WEATHER_DATA, city });
		expect(dispatch).toHaveBeenLastCalledWith({
			type: actionTypes.WEATHER_DATA_REQUEST_FAILED, error: error.response.data
		});
	});
});
