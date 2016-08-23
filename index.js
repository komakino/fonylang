#!/usr/bin/env node

var fonylang = require("./fonylang");

var agument = process.argv.splice(2).join(' ');

console.log('Rövarspråket: %s',fonylang.toRobber(agument));
console.log('P-språket: %s',fonylang.toPlang(agument));
console.log('I-språket: %s',fonylang.toIlang(agument));
console.log('Fikonspråket: %s',fonylang.toFiglang(agument));
