#!/usr/bin/env node
const args = process.argv.slice(2)
const mdlinks = require('./lib/index.js')

mdlinks(args[0], args[1])
 .then((obj) => {
   if (args[1] === '--validate') {
   	obj.forEach(i => {
   		console.log('text:', i.text, 'href:', i.href, 'status:', (i.status).toString())
   	})
   } else if (args[1]) {
   	console.log("Command not found. Did you mean '--validate'?")
   } else {
   	obj.forEach(i => {
   		console.log('text:', i.text, 'href:', i.href)
   	})
   }
 })
 .catch(err => console.log(err))

