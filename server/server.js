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
  res.json({"text": string_data})
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})