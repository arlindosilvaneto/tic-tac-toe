
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';

describe('Board container', () => {
  Enzyme.configure({ adapter: new Adapter() });

});
