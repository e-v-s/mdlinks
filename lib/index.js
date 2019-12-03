const fs = require('fs')
const fetch = require('node-fetch')

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




          arrayLinks.forEach(link => {
            obj.push({
              text: `${link.match(/(?<=\[).+?(?=\])/g)}`, 
              href: `${link.match(/(?<=\().+?(?=\))/g)}`
            })
          })
          console.log(obj.map(i => fetch(i.href)))
          Promise.all(
            obj.map(i => {
              if (urlé vaida)
              return fetch(i.href)
            else
              return 400
            })
          ).then(res => res)





          arrayLinks.map(link => {
            const text = link.match(/(?<=\[).+?(?=\])/g)
            const href = link.match(/(?<=\().+?(?=\))/g) 
            obj.push({
              text: `${text}`,
              href: `${href}`
            })
          })
        } else {
          arrayLinks.forEach(link => {
            obj.push({
              text: `${link.match(/(?<=\[).+?(?=\])/g)}`, 
              href: `${link.match(/(?<=\().+?(?=\))/g)}`
            })
          })
        }
        resolve(obj)
      }
    })
  })
}

module.exports = mdlinks
