
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';
import Board from './board';

describe('Board component', () => {
  Enzyme.configure({ adapter: new Adapter() });

  const emptyState = '---------',
    runningState = 'O--XO----';

  it('should not render any image on empty state', () => {
    const board = shallow(<Board state={emptyState} />);

    expect(board.find('.sprite-o-state').length).toEqual(0);
    expect(board.find('.sprite-x-state').length).toEqual(0);
  });

  it('should render correct images for running state', () => {
    const board = shallow(<Board state={runningState} />);

    expect(board.find('.sprite-o-state').length).toEqual(2);
    expect(board.find('.sprite-x-state').length).toEqual(1);
  });

  it('should defaults to empty state for an invalid state', () => {
    const board = shallow(<Board state={'OX'} />);

    expect(board.find('.sprite-o-state').length).toEqual(0);
    expect(board.find('.sprite-x-state').length).toEqual(0);
  });
});