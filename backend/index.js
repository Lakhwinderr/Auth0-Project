import express from 'express'
import fs from 'fs'
import cors from 'cors'

const app = express();
app.use(cors());

app.get('/data',  (req,res) => {
     fs.readFile('../src/data.json', 'utf-8', (err, data) =>{
        if(err){
            return res.sendStatus(500).send("Error reading the file")
        }else{
            res.json(JSON.parse(data))
        }
    })
})

app.use(express.json())

app.post('/update', (req, res) => {
    const data = req.body.data;
    fs.writeFile("../src/data.json", JSON.stringify(data), (err) => {
        if(err){
            return res.status(500).send("Error writing file")
        }else{
            res.send("File written successfully")
        }
    })    
})
app.listen(3000, () => {
    console.log("server is running")
})