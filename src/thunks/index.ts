import {
	requestWeatherData,
	receiveWeatherData,
	weatherDataRequestFailed
} from '../actions';
import { fetchWeatherData } from '../utils/requests';
import {Action, Dispatch} from 'redux';

export const onRequestWeatherData = (cityId: string) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch(requestWeatherData(cityId));
		return fetchWeatherData(cityId).then((res: any) =>
			dispatch(receiveWeatherData(res.data))
		).catch(function (res: any) {
			dispatch(weatherDataRequestFailed(res))
		});
	}
};
