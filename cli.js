#!/usr/bin/env node
const args = process.argv.slice(2);
const mdlinks = require('./lib/index.js');
const path = require('path');

mdlinks(args[0]).then(obj => console.log(obj)).catch(console.error)
	