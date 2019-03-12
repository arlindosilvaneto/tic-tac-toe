
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';
import Game from './index';
import Panel from '../../components/panel';

describe('Game container', () => {
  Enzyme.configure({ adapter: new Adapter() });

  beforeEach(() => {
    
  });

  it('should start a game for O player', () => {
    const game = shallow(<Game />);

    expect(game.find(Panel).props().player).toBe('O');
  });

  it('should change the player after a square click', () => {
    const game = shallow(<Game />);

    game.instance().onSquareClick(0);

    expect(game.find(Panel).props().player).toBe('X');
  });

  it('should reset the player after a reset click', () => {
    const game = shallow(<Game />);

    game.instance().onSquareClick(0);

    expect(game.find(Panel).props().player).toBe('X');

    game.instance().onGameReset();

    expect(game.find(Panel).props().player).toBe('O');
  });

  it('should reset the player after a rewind click', () => {
    const game = shallow(<Game />);

    game.instance().onSquareClick(0);

    expect(game.find(Panel).props().player).toBe('X');

    game.instance().onRewindMove();

    expect(game.find(Panel).props().player).toBe('O');
  });
});
