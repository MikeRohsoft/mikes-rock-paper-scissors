const { Enum, Winner, oneOrTwo } = require('./index');

describe('Rock Paper Scissors', () => {
    it('Player 1: Rock && Player 2: Rock', () => {
        expect(oneOrTwo(Enum.ROCK, Enum.ROCK)).toBe(Winner.NOBODY);
    });

    it('Player 1: Rock && Player 2: Paper', () => {
        expect(oneOrTwo(Enum.ROCK, Enum.PAPER)).toBe(Winner.TWO);
    });

    it('Player 1: Rock && Player 2: Scissors', () => {
        expect(oneOrTwo(Enum.ROCK, Enum.SCISSORS)).toBe(Winner.ONE);
    });

    it('Player 1: Paper && Player 2: Rock', () => {
        expect(oneOrTwo(Enum.PAPER, Enum.ROCK)).toBe(Winner.ONE);
    });

    it('Player 1: Scissors && Player 2: Paper', () => {
        expect(oneOrTwo(Enum.SCISSORS, Enum.PAPER)).toBe(Winner.ONE);
    });

    it('Player 1: Lizard && Player 2: Scissors', () => {
        expect(oneOrTwo(Enum.LIZARD, Enum.SCISSORS)).toBe(Winner.TWO);
    });

    it('Player 1: Lizard && Player 2: Rock', () => {
        expect(oneOrTwo(Enum.LIZARD, Enum.ROCK)).toBe(Winner.TWO);
    });

    it('Player 1: Lizard && Player 2: Spock', () => {
        expect(oneOrTwo(Enum.LIZARD, Enum.SPOCK)).toBe(Winner.ONE);
    });

    it('Player 1: Spock && Player 2: Scissors', () => {
        expect(oneOrTwo(Enum.SPOCK, Enum.SCISSORS)).toBe(Winner.ONE);
    });

    it('Player 1: Spock && Player 2: Paper', () => {
        expect(oneOrTwo(Enum.SPOCK, Enum.PAPER)).toBe(Winner.TWO);
    });

    it('Player 1: Spock && Player 2: Spock', () => {
        expect(oneOrTwo(Enum.SPOCK, Enum.SPOCK)).toBe(Winner.NOBODY);
    });
});
