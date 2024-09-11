import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app =express()
app.use(express.json())
app.use(cors())
const db = mysql.createConnection(
   {
    host:"localhost",
    user:"root",
    password:"root",
    database:"test"
   } 
)
app.get('/books',(req,res)=>{
    const q = 'SELECT * FROM books'
    db.query(q,(err,data)=>{
        if (err){
            res.json(err)
        }else{
            res.json(data)
        }
    })
})

app.post('/books',(req,res)=>{
    const q = 'INSERT INTO books (`title`,`desc`,`cover_pic`,`price`)VALUES(?)'
   const  {title,desc,cover_pic,price}=req.body
   const values = [
    title,
    desc,
    cover_pic,
    price
   ]
    db.query(q,[values],(err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json('book has been created ')
        }
    })
})

app.listen(5000,()=>{
    console.log("backend is connected");
})
