'use strict'

const fs = require('fs')
const path = require('path')

const readFile = (filePath, charset) => new Promise((resolve, reject) => {
  fs.readFile(filePath, charset, (err, result) => {
    if (err) return reject(err)
    resolve(result)
  })
})

readFile(path.join(__dirname, '..', 'package.json'), 'utf8')
  .then((result) => JSON.parse(result).dependencies)
  .then((dependencies) => console.log(dependencies))
  .catch((error) => console.log('ERROR:', error))

/* OBS: readFile

  - needs absolute path, relative path won't work. So we are using 'path.join(__dirname etc.'

*/
