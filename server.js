// const express = require('express');

import express from 'express'
const app = express();
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) => {

  users.push(req.body)

  res.status(201).json(req.body)
  
}); 

app.get('/usuarios', (req, res) => {

  res.status(200).json(users)
  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));