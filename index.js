const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config
const PORT = process.env.PORT || 3001;

app.get('/',(req,res)=>{
    res.send("Hola desde tu aplicacion")
})

// Iniciar el servidor y escuchar el puerto indicado
app.listen(PORT, () =>{
    console.log(`Escuchando en el punto de entrada http://localhost:${PORT}`);
})