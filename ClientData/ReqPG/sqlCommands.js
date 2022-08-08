const {Pool}=require('pg')

const connectInfo={
    user:'postgres',
    host:'localhost',
    password:'kakashi12',
    database:'lauta'
}

const databaseRequest=new Pool(connectInfo)

const allDataMsg=async()=>{
    const response= await databaseRequest.query('SELECT * FROM inbox');
     console.log(response.rows)    
     return response.rows
 }

module.exports={
    allDataMsg
}