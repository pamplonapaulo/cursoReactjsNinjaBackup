'use strict'

const fs = require('fs')
const path = require('path')

const readFile = (filePath, charset) => new Promise((resolve, reject) => {
  fs.readFile(filePath, charset, (err, result) => {
    if (err) return reject(err)
    resolve(result)  
  })
})

const read = async () => {
  try {
    const result = await readFile(path.join(__dirname, '..', 'package.json'), 'utf8')
    const dependencies = JSON.parse(result).dependencies
    console.log(dependencies)
  } catch (error) {
    console.log('ERROR:', error)
  }
}

read()
