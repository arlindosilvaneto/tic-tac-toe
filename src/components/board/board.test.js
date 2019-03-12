
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';

describe('Board component', () => {
  Enzyme.configure({ adapter: new Adapter() });

});