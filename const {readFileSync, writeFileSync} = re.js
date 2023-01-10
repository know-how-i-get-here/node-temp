const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/primerio.txt', 'utf-8')
const second = readFileSync('./content/subfolder/segundo.txt', 'utf-8', {flag: 'r'})
console.log(first,second)

writeFileSync('./content/subfolder/ehhcriei.txt',
`Olha la o primeiro resultado: ${first}`)

writeFileSync('./content/outrocrei.txt',
`Olha la o segundo resultado: ${second}`,{flag:'a'})