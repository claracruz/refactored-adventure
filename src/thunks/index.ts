import {
	requestWeatherData,
	receiveWeatherData,
	weatherDataRequestFailed
} from '../actions';
import { fetchWeatherData } from '../utils/requests';

export const onRequestWeatherData = (cityId: string) => {
	return (dispatch: any) => {
		dispatch(requestWeatherData(cityId));
		return fetchWeatherData(cityId).then((res: any) =>
			dispatch(receiveWeatherData(res.data))
		).catch(function (res: any) {
			dispatch(weatherDataRequestFailed(res))
		});
	}
};
