import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';
import App from './App';

describe('Application Home', () => {
  Enzyme.configure({ adapter: new Adapter() });

  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).not.toBe(null);
  });
});
