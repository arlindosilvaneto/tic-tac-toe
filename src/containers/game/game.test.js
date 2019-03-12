
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';
import Game from './index';
import Board from '../../components/board';
import Panel from '../../components/panel';
import Square from '../../components/square';

describe('Game container', () => {
  Enzyme.configure({ adapter: new Adapter() });

  const game, 
    panel,
    board, 
    squares;

  beforeEach(() => {
    game = shallow(<Game />);

    panel = game.find(Panel);
    board = game.find(Board);
    squares = board.find(Square);
  });

  it('should start a game for O player', () => {
    expect(panel.find('.sprite-o-state').length).toEqual(1);
  });

  it('should change the player after a square click', () => {
    squares.simulate('click');
    
    expect(panel.find('.sprite-x-state').length).toEqual(1);
  });
});
