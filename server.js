// const express = require('express');

import express from 'express'
const app = express();
app.use(express.json())

const user = []

app.post('/usuarios', (req, res) => {
  console.log(req.body);

  res.send('Ok post')
  
}); 

app.get('/usuarios', (req, res) => {
  res.send('Deu certo !')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));