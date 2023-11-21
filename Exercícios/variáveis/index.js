let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const tempVarC = varC;
varC = varA;
varA = varB;
varB = tempVarC;

// ou [varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);