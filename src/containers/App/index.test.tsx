import React from 'react';
import { App } from './index';
import {IAppComponentProps} from '../../interfaces';
import { IGridComponentProps } from '../../interfaces/grid';
import { ISearchComponentProps } from '../../interfaces/search';
import { shallow } from 'enzyme';
import { SearchInput } from '../../components/SearchInput';
import { Grid } from '../../components/Grid';
import { Loading } from '../../components/Loading';

describe('<App />', () => {
	let props : IAppComponentProps;

	beforeEach(() => {
		props = {
			loading: false,
			weather: [],
			onSearch: jest.fn()
		};
	});

	it('renders without crashing', () => {
		const wrapper = shallow(<App {...props} />);
		const instance = wrapper.instance() as App;
		const header = <header className="App-header">
			<h1>24 hour weather forecast</h1>
		</header>;

		const section = <section>
			<SearchInput onSearch={instance.onSearch} />
			<Grid
				className="weather-grid"
				items={props.weather} />
		</section>;
		expect(wrapper.contains(header)).toEqual(true);
		expect(wrapper.contains(section)).toEqual(true);
	});

	it('renders without crashing in loading mode', () => {
		props.loading = true;
		const wrapper = shallow(<App {...props} />);
		const loading = <Loading />;
		expect(wrapper.contains(loading)).toEqual(true);
	});

	it('should fetch weather data', () => {
		const wrapper = shallow(<App {...props} />);
		const search = wrapper.find('SearchInput');
		const searchTerm = 'test-call';
		const searchProps = search.props() as ISearchComponentProps;
		searchProps.onSearch(searchTerm);
		expect(props.onSearch).toBeCalledWith(searchTerm);
	});

	it('should render weather data', () => {
		props.weather = [
			{ city: 'city 1', twelveAM: '12C', sixAM: '14C', twelvePM: '89C', sixPM: '44C'},
			{ city: 'city 2', twelveAM: '126C', sixAM: '148C', twelvePM: '899C', sixPM: '4C'},
			{ city: 'city 3', twelveAM: '124C', sixAM: '154C', twelvePM: '819C', sixPM: '54C'}
		];
		const wrapper = shallow(<App {...props} />);
		const grid = wrapper.find('Grid');
		const gridProps = grid.props() as IGridComponentProps;
		expect(gridProps.items).toEqual(props.weather);
	});
});
