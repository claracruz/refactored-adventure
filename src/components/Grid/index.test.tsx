import React from 'react';
import { Grid } from './index';
import { IGridComponentProps } from '../../interfaces/grid';
import { shallow } from 'enzyme';
import { WeatherType } from '../../constants/types';

describe('<Grid />', () => {
	let props : IGridComponentProps;

	beforeEach(() => {
		props = {
			className: 'grid-class-name',
			items: [] as WeatherType[]
		};
	});

	it('renders without crashing', () => {
		const wrapper = shallow(<Grid {...props} />);
		const table = <table className={`${props.className} grid`}>
			<thead>
			<tr>
				<th>City</th>
				<th>12am</th>
				<th>6am</th>
				<th>12pm</th>
				<th>6pm</th>
			</tr>
			</thead>
			<tbody/>
		</table>;
		expect(wrapper.contains(table)).toEqual(true);
	});


	it('renders expected items', () => {
		props.items = [
			{ city: 'city 1', twelveAM: '12C', sixAM: '14C', twelvePM: '89C', sixPM: '44C'},
			{ city: 'city 2', twelveAM: '126C', sixAM: '148C', twelvePM: '899C', sixPM: '4C'}
		];
		const wrapper = shallow(<Grid {...props} />);
		const table = <table className={`${props.className} grid`}>
			<thead>
			<tr>
				<th>City</th>
				<th>12am</th>
				<th>6am</th>
				<th>12pm</th>
				<th>6pm</th>
			</tr>
			</thead>
			<tbody>
				<tr>
					<td>{props.items[0].city}</td>
					<td>{props.items[0].twelveAM}</td>
					<td>{props.items[0].sixAM}</td>
					<td>{props.items[0].twelvePM}</td>
					<td>{props.items[0].sixPM}</td>
				</tr>
				<tr>
					<td>{props.items[1].city}</td>
					<td>{props.items[1].twelveAM}</td>
					<td>{props.items[1].sixAM}</td>
					<td>{props.items[1].twelvePM}</td>
					<td>{props.items[1].sixPM}</td>
				</tr>
			</tbody>
		</table>;
		expect(wrapper.contains(table)).toEqual(true);
	});



});
