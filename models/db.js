const Sequelize =require ("sequelize")
const sequelize=  new Sequelize('rui','root','drcarter',{
    host: 'localhost',
    dialect: 'mysql'
} )

sequelize.authenticate().then(()=>{
    console.log("acesso a base de dados")
}).catch((err)=>{
    console.log("falha" +err)
})


module.exports= {
    sequelize: sequelize,
    Sequelize: Sequelize
}