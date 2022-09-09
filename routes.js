const express = require('express')
const routes = express.Router();


routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err)
            return res.send(err)

        conn.query('SELECT * FROM EMPLEADO;', (err, rows) => {
            if (err) {
                return res.send(err)
            }
            else {
                res.json(rows)
            }
        })
    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)    
        
        conn.query('insert into empleado set?',[req.body] ,(err, rows) => {
            if (err) {
                return res.send(err)
            }
            else {
                res.send('Emepleado Creado')
            }
        })
    })
})

routes.delete('/:iden', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)    
        
        conn.query('delete from empleado where Identificacion = ?',[req.params.iden] ,(err, rows) => {
            if (err) {
                return res.send(err)
            }
            else {
                res.send('Emepleado eliminado')
            }
        })
    })
})

routes.put('/:iden', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)    
        
        conn.query('UPDATE Empleado set ? where Identificacion = ?',[req.body, req.params.iden] ,(err, rows) => {
            if (err) {
                return res.send(err)
            }
            else {
                res.send('Emepleado Actualizado')
            }
        })
    })
})





module.exports = routes