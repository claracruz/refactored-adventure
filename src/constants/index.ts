import { IAppComponentState } from "../interfaces";
import { WeatherType } from "./types";

export const APP_INITIAL_STATE : IAppComponentState = {
	error: '',
	loading: false,
	weather: [] as WeatherType[]
};

export const REQUEST_WEATHER_DATA = 'REQUEST_WEATHER_DATA';
export type REQUEST_WEATHER_DATA = typeof REQUEST_WEATHER_DATA;

export const RECEIVE_WEATHER_DATA = 'RECEIVE_WEATHER_DATA';
export type RECEIVE_WEATHER_DATA = typeof RECEIVE_WEATHER_DATA;


export const WEATHER_DATA_REQUEST_FAILED = 'WEATHER_DATA_REQUEST_FAILED';
export type WEATHER_DATA_REQUEST_FAILED = typeof WEATHER_DATA_REQUEST_FAILED;
