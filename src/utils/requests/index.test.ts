import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as services from './';
import { WEATHER_API } from '../../constants/api';

describe('Services', () => {

	describe('fetchWeatherData', () => {
		it('returns expected response data', done => {
			const mock = new MockAdapter(axios);
			const city = 'york';
			const data = {
				response: { data: [1,2,3,4,5,6,7]}
			};
			mock.onGet(WEATHER_API + city).reply(200, data);

			services.fetchWeatherData(city).then(response => {
				expect(response.data).toEqual(data);
				done();
			});
		});
	});
});

