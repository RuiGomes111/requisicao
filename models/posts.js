const express= require('express')
const app= express()
const db= require('./db')

const Post=db.sequelize.define("postagens",{
    tittle:{
        type: db.Sequelize.STRING
    }, 
    conteudo:{
        type: db.Sequelize.TEXT
    }
})


app.post("/enviar",(req,res)=>{
    
})









module.exports= Post