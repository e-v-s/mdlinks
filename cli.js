#!/usr/bin/env node
const args = process.argv.slice(2)
const mdlinks = require('./lib/index.js')
//const validateLinks	= require('./lib/index.js')

mdlinks(args[0], args[1])
  .then(obj => console.log(obj))
  .catch(err => console.log(err))
