import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from '../components/base/breadcrumbs';
import ImageGallery from '../components/base/image-gallery';
import Loader from '../components/base/loader';
import NoData from '../components/base/no-data';

describe('Test Breadcrumb', () => {
    it('Breadcrumb renders without crash', () => {
        const categories = ['Parent', 'Child', 'Grandchild'];
        shallow(<Breadcrumb categories={categories} />);
    });
});

describe('Test ImageGallery', () => {
    it('ImageGallery renders without crash', () => {
        const pictures = ['https://picToSrc.com', 'https://picToSrc2.com', 'https://picToSrc3.com'];
        shallow(<ImageGallery pictures={pictures} />);
    });
});

describe('Test Loader', () => {
    it('Loader renders without crash', () => {
        shallow(<Loader />);
    });
});

describe('Test NoData', () => {
    it('NoData renders without crash', () => {
        shallow(<NoData />);
    });
});