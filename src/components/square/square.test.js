
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';
import Square from './square';

describe('Square base component', () => {
  Enzyme.configure({ adapter: new Adapter() });

  const emptyState = '-',
    OState = 'O',
    XState = 'X';

  const clicked = jest.fn();

  beforeEach(() => {
    clicked.mockClear();
  });

  it('should handle click on empty state', () => {
    const square = shallow(<Square state={emptyState} onClick={clicked} />);
    
    square.simulate('click');
    
    expect(clicked).toHaveBeenCalledTimes(1);
  });

  it('should not handle click on O state', () => {
    const square = shallow(<Square state={OState} onClick={clicked} />);
    
    square.simulate('click');
    
    expect(clicked).toHaveBeenCalledTimes(0);
  });

  it('should not handle click on X state', () => {
    const square = shallow(<Square state={XState} onClick={clicked} />);
    
    square.simulate('click');
    
    expect(clicked).toHaveBeenCalledTimes(0);
  });

  it('should have correct image class for X state', () => {
    const square = shallow(<Square state={XState} />);

    expect(square.find('.sprite-x-state').length).toEqual(1);
  });

  it('should have correct image class for O state', () => {
    const square = shallow(<Square state={OState} />);
    
    expect(square.find('.sprite-o-state').length).toEqual(1);
  });
});
