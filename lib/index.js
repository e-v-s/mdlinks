const fs = require('fs')
const url = require('valid-url')

const mdlinks = (file, option) => {
  const obj = []
  let arrayLinks = []
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        arrayLinks = data.match(/\[(.*?)\]\((.*?)\)/g)
        if (option) {
          // urlExists((link.match(/(?<=\().+?(?=\))/g))[0], (err, res) => { return res })
          arrayLinks.map(link => {
            let lin = (link.match(/(?<=\().+?(?=\))/g))[0]

            obj.push({ 
              text: `${link.match(/(?<=\[).+?(?=\])/g)}`, 
              href: `${link.match(/(?<=\().+?(?=\))/g)}`,
              status: `${url.isUri(lin) ? 'URL OK' : 'URL NOT OK'}`
            })
          // if (validate) {
          //   urlExists(link.match(/(?<=\().+?(?=\))/g)[0], (err, res) => {
          //     obj[0].status:res
          //   })
          // }
        })} else {
            arrayLinks.forEach(link => {
              obj.push({ 
                text: `${link.match(/(?<=\[).+?(?=\])/g)}`, 
                href: `${link.match(/(?<=\().+?(?=\))/g)}`
              })
            })
          }
        resolve(obj)
      }})})}

// const validateLink = (obj) => {
//   console.log(obj)
// }

module.exports = mdlinks
//module.exports = validateLink
