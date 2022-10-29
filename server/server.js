const express =  require('express')
const path = require('path');
const app = express()
const port = 5000
const fs = require('fs')
let string_data;

fs.readFile('loren_epsun.txt', 'utf8',(err, data)=>
{
    if(err){
        console.log(err)
        return;
    }
    string_data = data
})

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/teste', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "audioFile.mp3"));
  /*
  fs.readFile("audio.mp3", function(err, result) {
    res.send(result.toString("base64"));
  });*/
  //res.json({"text": string_data})
})

app.get('/api', (req, res) => {
  res.json({"text": string_data})
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})