
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';
import Board from './index';
import Square from '../square';

describe('Board component', () => {
  Enzyme.configure({ adapter: new Adapter() });

  const emptyState = '---------',
    runningState = 'O--XO----';

  it('should not render any image on empty state', () => {
    const board = shallow(<Board state={emptyState} />);
    const squares = board.find(Square);

    expect(squares.length).toEqual(9);
    squares.forEach(square => {
      expect(square.props().state === '-').toBe(true);
    });
  });

  it('should render correct images for running state', () => {
    const board = shallow(<Board state={runningState} />),
      squares = board.find(Square);
    
    expect(squares.length).toEqual(9);
    
    squares.forEach((square, index) => {
      switch(index) {
        case 0:
        case 4:
          expect(square.props().state === 'O').toBe(true);
          break;
        case 3:
          expect(square.props().state === 'X').toBe(true);
      }
    });
  });

  it('should defaults to empty state for an invalid state', () => {
    const board = shallow(<Board state='OX' />);
    const squares = board.find(Square);

    expect(squares.length).toEqual(9);

    squares.forEach(square => {
      expect(square.props().state === '-').toBe(true);
    });
  });
});