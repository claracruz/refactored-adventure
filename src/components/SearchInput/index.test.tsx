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
			<label>
				<input
					value={instance.state.searchTerm}
					onKeyDown={instance.handleKeyDown}
					onChange={instance.handleChange}
					placeholder="Search a city"
					type="text" />
			</label>
			<button onClick={instance.onSubmit}>Search</button>
		</div>;
		expect(wrapper.contains(searchInput)).toEqual(true);
	});


	it('should call onSearch prop when search button clicked', () => {
		const wrapper = shallow(<SearchInput {...props} />);
		const input = wrapper.find('input');
		const button = wrapper.find('button');
		const searchTerm = 'search term';
		input.simulate('change', {currentTarget: {value: searchTerm}});
		button.simulate('click');
		expect(props.onSearch).toBeCalledWith(searchTerm);
	});

	it('should clear input field when search button clicked', () => {
		const wrapper = shallow(<SearchInput {...props} />);
		const instance = wrapper.instance() as SearchInput;
		const input = wrapper.find('input');
		const button = wrapper.find('button');
		const searchTerm = 'search term';
		input.simulate('change', {currentTarget: {value: searchTerm}});
		button.simulate('click');
		expect(instance.state.searchTerm).toEqual('');
	});
});
