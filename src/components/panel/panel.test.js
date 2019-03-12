import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';
import Panel from './panel';

describe('Panel base component', () => {
  Enzyme.configure({ adapter: new Adapter() });

  const OPlayer = 'O',
    XPlayer = 'X';

  const clicked = jest.fn();

  beforeEach(() => {
      clicked.mockReset();
  });

  it('should defaults for O player', () => {
    const panel = shallow(<Panel />);

    expect(panel.find('.sprite-o-state').length).toEqual(1);
  });

  it('should have correct image class for X player', () => {
    const panel = shallow(<Panel player={XPlayer} />);

    expect(panel.find('.sprite-x-state').length).toEqual(1);
  });

  it('should have correct image class for O player', () => {
    const panel = shallow(<Panel player={OPlayer} />);

    expect(panel.find('.sprite-o-state').length).toEqual(1);
  });

  it('should handle reset button as expected', () => {
    const panel = shallow(<Panel player={OPlayer} onReset={clicked} />);

    panel.find('#reset-game').simulate('click');

    expect(clicked).toHaveBeenCalledTimes(1);
  });
});