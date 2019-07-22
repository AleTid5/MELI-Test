import React from 'react';
import { shallow } from 'enzyme';
import Search from '../components/search';

describe('Test item list', () => {
    it('Item List component renders without crash', () => {
        shallow(<Search  />);
    });
});