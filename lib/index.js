const fs = require('fs')

const mdlinks = (file) => {
  const obj = []
  let arrayLinks = []
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        arrayLinks = data.match(/\[(.*?)\]\((.*?)\)/g)
        arrayLinks.forEach(link => {
          obj.push({ text: `${link.match(/(?<=\[).+?(?=\])/g)}`, href: `${link.match(/(?<=\().+?(?=\))/g)}` })
        })
        resolve(obj)
      }
    })
  })
}

module.exports = mdlinks
