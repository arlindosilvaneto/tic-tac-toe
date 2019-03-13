import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow, render} from 'enzyme';
import Overlay from './index';

describe('Result overlay base component', () => {
    Enzyme.configure({ adapter: new Adapter() });

    it('should have correct image for X win', () => {
        const overlay = shallow(<Overlay winner='X' />);

        expect(overlay.find('.sprite-x-state').length).toEqual(1);
    });

    it('should have correct image for O win', () => {
        const overlay = shallow(<Overlay winner='X' />);

        expect(overlay.find('.sprite-x-state').length).toEqual(1);
    });

    it('should have correct message for drawn game', () => {
        const overlay = shallow(<Overlay winner='OX' />);

        expect(overlay.text()).toBe('Draw!New Game');
    });
});