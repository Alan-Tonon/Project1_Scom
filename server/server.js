const express =  require('express')
const path = require('path');
const app = express()
const port = 5000
const fs = require('fs')

fs.readFile('loren_epsun.txt', 'utf8',(err, data)=>
{
    if(err){
        console.log(err)
        return;
    }
    string_data = data
})

let demacia = `Demacia é um reino altivo e legítimo com 
uma prestigiosa história militar. 
Fundada após as Guerras Rúnicas para ser um local livre de qualquer magia, 
alguns sugerem que a era dourada de Demacia já passou, a menos que a cidade se 
mostre capaz de se adaptar ao novo mundo. Autossuficiente e agrária, sua sociedade 
é inerentemente defensiva e insular, valorizando a justiça, a honra e o dever acima 
de tudo.`;

app.use(express.static('public'));

app.get('/Dystopia', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Dystopia.mp3"));
})

app.get('/Enemy', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Enemy.mp3"));
})

app.get('/Playground', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Playground.mp3"));
})

app.get('/api', (req, res) => {
  res.json({
    "text": string_data,
    "demacia":  demacia
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})