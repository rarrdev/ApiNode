const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')

const app = express()

app.set('port', process.env.PORT || 9000)
const objConecion = {
    host:'riveradev.com.co',
    port:'3306',
    user:'riveraso_nsga',
    password:'owmC56?9',
    database:'nsgacurso'
}

// middlewares(brinda la funcionalidad para el acceso a la bd) 
app.use(myconn(mysql,objConecion,'single'))
app.use(express.json())


// rutas de las api(routes)
app.get('/',(req,res)=>{
    res.send('Bienvenido a mi API ♠')
})

app.use('/api',routes)





// ejecucion del servidor 
app.listen(app.get('port'),()=>{
    console.log('servidor ejecutandose en el puerto',app.get('port'))
})