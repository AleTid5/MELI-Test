import React from 'react';
import { shallow } from 'enzyme';
import Item from '../components/item';

describe('Test item', () => {
    it('Item component renders without crash', () => {
        const id = 'MLA684008289';
        const categories = ["Parent", "Child", "Grandchild"];
        const props = {
            location: {
                state: {
                    categories: categories
                }
            },
            match: {
                params: {
                    id: id
                }
            }
        };
        shallow(<Item props={props} />);
    });
});