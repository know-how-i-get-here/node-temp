const {readFile, writeFile} = require('fs')

readFile('./content/primerio.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log("Nao existe esse ficheiro")
    }else{
        const primeiro = result
        console.log(primeiro)
    }
})
readFile('./content/subfolder/segundo.txt', 'utf-8', (err,result)=>{
    if(err){
        console.log("Nao existe esse ficheiro")
    }else{
        const segundo = result
        console.log(segundo)
    }
})

writeFile('./content/subfolder/ehhh.txt', "Hello acabo de criar outro ficheiro", (err,result)=>{
    if(err){
        console.log("Nao foi possivel escrever no fichero")
    }else{
        const r = result
        console.log(r)
    }
})
const fs = require('fs');
const { dirname } = require('path');
const path = require('path');
fs.readFile(path.join(__dirname, 'content', 'primerio.txt'), 'utf-8', (err,data)=>{
    if(err){
        console.log("Nao existe esse ficheiro")
    }else{
        const r = data
        console.log(r)
    }
})
fs.writeFile(path.join(__dirname, 'content', 'subfolder', 'segundo.txt'), "Hello estou no segundo file", (err)=>{
    if(err){
        console.log("Nada foi escrito!")
    }
    console.log("Escrita Completa")
    fs.appendFile(path.join(__dirname, 'content', 'subfolder', 'segundo.txt'), '\n \n Yh Backender anima fogo', (err)=>{
        if(err){
            console.log("Ocorreu um erro")
        }else{
            console.log("Append completely done!")
        }
        fs.rename(path.join(__dirname, 'content', 'subfolder', 'segundo.txt'), path.join(__dirname, 'content', 'subfolder', 'newsegundo.txt'),(err)=>{
            if(err){
                console.log("Nao foi possivel renomear o ficheiro de text")
            }else{
                console.log("rename Complete")
            }
        })
    })
})
console.log("Hello")