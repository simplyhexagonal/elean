const elean = require('@simplyhexagonal/elean');

// ----------------------------------------------------------------------------

console.log('> FALSE:');

let ENV_VAR; // undefined
console.log(elean(ENV_VAR));

ENV_VAR = '';
console.log(elean(ENV_VAR));

ENV_VAR = 'undefined';
console.log(elean(ENV_VAR));

ENV_VAR = null;
console.log(elean(ENV_VAR));

ENV_VAR = 'null';
console.log(elean(ENV_VAR));

ENV_VAR = 'NULL';
console.log(elean(ENV_VAR));

ENV_VAR = 0;
console.log(elean(ENV_VAR));

ENV_VAR = '0';
console.log(elean(ENV_VAR));

ENV_VAR = false;
console.log(elean(ENV_VAR));

ENV_VAR = 'false';
console.log(elean(ENV_VAR));

ENV_VAR = 'FALSE';
console.log(elean(ENV_VAR));

// -----------------------------------------------------------------------------

console.log('> TRUE:');

ENV_VAR = 'xyz';
console.log(elean(ENV_VAR));

ENV_VAR = 1;
console.log(elean(ENV_VAR));

ENV_VAR = '1';
console.log(elean(ENV_VAR));

ENV_VAR = true;
console.log(elean(ENV_VAR));

ENV_VAR = 'true';
console.log(elean(ENV_VAR));

ENV_VAR = 'TRUE';
console.log(elean(ENV_VAR));
