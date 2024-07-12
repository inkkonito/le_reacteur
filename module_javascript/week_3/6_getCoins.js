// getCoins

const getCoins = (amount, tokens) => {
    let tokensToGive = [];
    for (let i = 0; i < tokens.length; i++) {
        while (amount >= tokens[i]) {
            amount -= tokens[i];
            tokensToGive.push(tokens[i]);
        }
    }
    return tokensToGive;
}

console.log(getCoins(21, [10, 5, 2, 1]))