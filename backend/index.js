import express from 'express'
import mysql from 'mysql'

const app =express()
app.use(express.json())

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
    const q = 'INSERT INTO books (`title`,`desc`,`cover_pic`)VALUES(?)'
   const  {title,desc,cover_pic}=req.body
   const values = [
    title,
    desc,
    cover_pic
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
