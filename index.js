const Enum = {
    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2,
    LIZARD: 3,
    SPOCK: 4,
};

const Winner = {
    NOBODY: 0,
    ONE: 1,
    TWO: 2,
};

function oneOrTwo(one, two) {
    const match = [
        (two === Enum.PAPER) + (two === Enum.SPOCK),
        (two === Enum.SCISSORS) + (two === Enum.LIZARD),
        (two === Enum.ROCK) + (two === Enum.SPOCK),
        (two === Enum.ROCK) + (two === Enum.SCISSORS),
        (two === Enum.PAPER) + (two === Enum.LIZARD),
    ];
    return match[one] + Winner.ONE - (one === two);
}

module.exports = {
    Enum: Enum,
    Winner: Winner,
    oneOrTwo: oneOrTwo,
};