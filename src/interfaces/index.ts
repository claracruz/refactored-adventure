import { IWeather } from './weather';
import {ISearchComponentProps} from "./search";

export interface IAppComponentState {
	error: string;
	loading: boolean;
	weather: Array<IWeather> | [];
}

export interface IAppState {
	app: IAppComponentState
}

export interface IAppComponentProps extends IAppComponentState, ISearchComponentProps {}
