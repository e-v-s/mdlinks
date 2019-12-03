#!/usr/bin/env node
const args = process.argv.slice(2)
const mdlinks = require('./lib/index.js')

mdlinks(args[0], args[1])
  .then((obj) => {
    if (args[1] === '--validate') {
      args[1] = { validate: true }
      console.log(obj)
    } else {
      console.log(obj)
    }
  })
  .catch(err => console.log(err))
