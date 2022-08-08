//aqui implemento las rutas del backend
const express=require('express')
const app= express()
const cors=require('cors')
const {allDataMsg}= require('./ReqPG/sqlCommands')
app.use(express.json())
app.use(cors())

app.get('/hi',async(req,res)=>{
   const values= await  allDataMsg()
    res.json(values)
})

app.listen(3001)
console.log('server 3001')