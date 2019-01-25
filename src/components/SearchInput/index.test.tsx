import React from 'react';
import { SearchInput } from './index';
import { ISearchComponentProps } from '../../interfaces/search';
import { shallow } from 'enzyme';

describe('<SearchInput />', () => {
	let props : ISearchComponentProps;

	beforeEach(() => {
		props = {
			onSearch: jest.fn()
		};
	});

	it('renders without crashing', () => {
		const wrapper = shallow(<SearchInput {...props} />);
		const instance = wrapper.instance() as SearchInput;
		const searchInput = <div className="search-input">
			<input
				value={instance.state.searchTerm}
				onKeyPress={instance.handleChange}
				onChange={instance.handleChange}
				placeholder="Search a city"
				type="text" />
			<button onClick={instance.handleButtonClick}>Search</button>
		</div>;
		expect(wrapper.contains(searchInput)).toEqual(true);
	});


	it('should update state with characters on keypress', () => {
		const wrapper = shallow(<SearchInput {...props} />);
		const instance = wrapper.instance() as SearchInput;
		const input = wrapper.find('input');
		const searchTerm = 'search term';
		input.simulate('keyPress', {currentTarget: {value: searchTerm}});
		expect(instance.state.searchTerm).toEqual(searchTerm);
	});


	it('should call onSearch prop when search button clicked', () => {
		const wrapper = shallow(<SearchInput {...props} />);
		const input = wrapper.find('input');
		const button = wrapper.find('button');
		const searchTerm = 'search term';
		input.simulate('keyPress', {currentTarget: {value: searchTerm}});
		button.simulate('click');
		expect(props.onSearch).toBeCalledWith(searchTerm);
	});

	it('should clear input field when search button clicked', () => {
		const wrapper = shallow(<SearchInput {...props} />);
		const instance = wrapper.instance() as SearchInput;
		const input = wrapper.find('input');
		const button = wrapper.find('button');
		const searchTerm = 'search term';
		input.simulate('keyPress', {currentTarget: {value: searchTerm}});
		button.simulate('click');
		expect(instance.state.searchTerm).toEqual('');
	});
});
