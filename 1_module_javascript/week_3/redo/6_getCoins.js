const getCoins = (amount, tokens) => {
   tokens = tokens.sort((a,b) => b-a)
   amountLeft = amount;
   const result = [];
   for (let i=0; i<tokens.length; i++) {
    while (amountLeft >= tokens[i]) {
        result.push(tokens[i]);
        amountLeft -= tokens[i];
    }
   }
   return result;
}

console.log(getCoins(27, [10, 5, 1])); // Affichera [10, 10, 5, 1, 1] 
