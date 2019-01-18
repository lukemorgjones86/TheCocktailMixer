import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import { shallow } from 'enzyme';

import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';

const NavigationRoutes = [
    { displayName: 'Browse Cocktails', path: 'browse_cocktails'},
    { displayName: 'Browse Ingredients', path: 'browse_ingredients'},
    { displayName: 'Random Cocktail', path: 'random_cocktails'},
]

describe('<Navigation />', () => {
    it('renders a list ', () => {
        const wrapper = shallow(<Navigation routes={ NavigationRoutes } open={ true } />);
        expect(wrapper.contains(<Drawer />));
        expect(wrapper.find(<Drawer />).contains(<MenuItem />));
        expect(wrapper.find(<MenuItem />)).toHaveLength(NavigationRoutes.length);
      });
})

