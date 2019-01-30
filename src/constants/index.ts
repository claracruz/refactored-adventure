import { IAppComponentState } from "../interfaces/app";
import { WeatherType } from "./types";

// Could use enum instead as shown below
export enum actionTypes {
	REQUEST_WEATHER_DATA,
	RECEIVE_WEATHER_DATA,
	WEATHER_DATA_REQUEST_FAILED
}

export const APP_INITIAL_STATE : IAppComponentState = {
	error: '',
	loading: false,
	weather: [] as WeatherType[]
};

