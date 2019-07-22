import React from 'react';
import { shallow } from 'enzyme';
import ItemList from '../components/item-list';

describe('Test item list', () => {
    it('Item List component renders without crash', () => {
        shallow(<ItemList  />);
    });
});