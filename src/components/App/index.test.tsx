import React from 'react';
import { App } from './';
import {IAppComponentProps} from '../../interfaces/app';
import { IGridComponentProps } from '../../interfaces/grid';
import { ISearchComponentProps } from '../../interfaces/search';
import { shallow } from 'enzyme';
import { SearchInput } from '../SearchInput';
import { Grid } from '../Grid';
import { Loading } from '../Loading';

describe('<App />', () => {
	let props : IAppComponentProps;

	beforeEach(() => {
		props = {
			error: '',
			loading: false,
			weather: [],
			onSearch: jest.fn()
		};
	});

	it('renders without crashing', () => {
		const wrapper = shallow(<App {...props} />);
		expect(wrapper).toMatchSnapshot();
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
