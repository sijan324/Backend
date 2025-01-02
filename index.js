require('dotenv').config()
const express= require('express');
const app=express();
const port=8080;
app.get('/',(req,res)=>{
    res.send('hello world!');
})
app.get('/twitter',(req,res)=>{
    res.send('<h1>No problem</h1>')
})
app.get('/Youtube',(req,res)=>{
    res.send('<h2>No problem</h2>')
})
app.listen(process.env.PORT,()=>{
    console.log(`${port}`)
})