import {
	REQUEST_WEATHER_DATA,
	RECEIVE_WEATHER_DATA,
	WEATHER_DATA_REQUEST_FAILED
} from '../constants';
import { APP_INITIAL_STATE } from '../constants';
import { IAppComponentState } from '../interfaces';
import { IWeather } from '../interfaces/weather';

const inDegrees = (value: number) => {
	return `${Math.floor(value)}\xB0C`;
};

const parseWeatherData = (data: any) => {
	const list = data.list;
	const { city } = data;
	const weather : IWeather = {
		city: `${city.name}, ${city.country}`
	};

	list.some((item: any) => {
		const hour = new Date(item.dt * 1000).getHours();
		if (hour === 0) {
			weather.twelveAM = inDegrees(item.main.temp);
		}
		if (hour === 6) {
			weather.sixAM = inDegrees(item.main.temp);
		}
		if (hour === 12) {
			weather.twelvePM = inDegrees(item.main.temp);
		}
		if (hour === 18) {
			weather.sixPM = inDegrees(item.main.temp);
		}
		return weather.twelveAM && weather.sixAM && weather.twelvePM && weather.sixPM;
	}, []);

	return weather;
};

const getUpdatedWeatherState = (currentWeatherState: IWeather[], newWeatherItem: IWeather) => {
	const weatherState = currentWeatherState.slice();
	let itemIndex = weatherState.length;
	let deleteCount = 0;
	const newItemIndex = currentWeatherState.findIndex((item: IWeather) => {
		return item.city === newWeatherItem.city;
	});
	if (newItemIndex > -1) {
		itemIndex = newItemIndex;
		deleteCount = 1;
	}

	weatherState.splice(itemIndex, deleteCount, newWeatherItem);
	return weatherState;
};

export const appReducer = (state = APP_INITIAL_STATE, action: any) : IAppComponentState => {
	switch (action.type) {
		case REQUEST_WEATHER_DATA:
			return {
				...state,
				error: '',
				loading: true
			};
		case RECEIVE_WEATHER_DATA:
			return {
				...state,
				error: '',
				loading: false,
				weather: getUpdatedWeatherState(state.weather, parseWeatherData(action.data))
			};
		case WEATHER_DATA_REQUEST_FAILED:
			return {
				...state,
				error: action.data.message,
				loading: false
			};
		default:
			return state;
	}
};
