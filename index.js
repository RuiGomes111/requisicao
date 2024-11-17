
//configuração do express
const express= require('express') 
const app= express()
const db= require("./models/db")
const Post= require("./models/posts")

//configuração do handlebars
const handlebars= require('express-handlebars')
const {engine}= require('express-handlebars')

app.engine("handlebars", engine({
    
    defaultLayout: false,
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
    
}))

app.set("view engine", 'handlebars')
app.set("views", "./views/layout")


//configuração no body-parser
const bodyParser= require  ('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//rotas



app.get("/", (req,res)=>{
   
    Post.findAll().then((posts)=>{
        res.render('home', {posts: posts})
    })
})
app.post("/segunda", (req,res)=>{
    
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
        
    }).then(()=>{
        res.redirect("/")
    }).catch((err)=>{
        res.send("falha"+ err)
    })
    
})


//rota para o delet

app.get("/deletar/:id", (req,res)=>{
    Post.destroy({
        where: {
            'id': req.params.id
        }
    }).then(()=>{
        res.redirect("/")
    }).catch((err)=>{
        res.send("falha"+ err)
    })
})


app.get('/form', (req, res)=>{
    res.render('formulario')
})












app.listen(8081, function(){
    console.log("servidor rodando url:https://8081")
})