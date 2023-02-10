let varA = 'A';
let varB = 'B';
let varC = 'C';
let varA1 = varA;

varA = varB
varB = varC
varC = varA1
console.log(`DEPOIS:\n${varA}, ${varB}, ${varC}.`)
/** TAMBEM PODE SER:
 * [varA, varB, varC] = [varB, varC, varA];
 * console.log(varA, varB, varC);  
 */