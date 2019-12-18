const fs = require('fs')
const fetch = require('node-fetch')
const validUrl = require('valid-url')

const mdlinks = (file, option) => {
  let obj = []
  let arrayLinks = []
  option = { validate: true}

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
          Promise.all(
            obj.map(i => {
              if (validUrl.isUri(i.href)) {
                return fetch(i.href, { method: 'GET' })
              } else {
                return { status: '400' }
              }
            })
          ).then(res => {
            res.forEach((res, i) => {
              obj[i].status = res.status
            })
            resolve(obj)
          })
        } else {
          arrayLinks.forEach(link => {
            obj.push({
              text: `${link.match(/(?<=\[).+?(?=\])/g)}`,
              href: `${link.match(/(?<=\().+?(?=\))/g)}`
            })
          })
          resolve(obj)
          
        }
      }
    })
  })
}

module.exports = mdlinks