import { IWeather} from './weather';

export interface IGridComponentProps {
	className: string;
	items: Array<IWeather>;
}
