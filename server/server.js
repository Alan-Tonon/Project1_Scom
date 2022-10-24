const express =  require('express')
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


app.get('/api', (req, res) => {
  res.json({"text": string_data})
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})