import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
app.use(express.json())



app.post('/usuarios', async (req, res) => {

  await prisma.cliente.create({
    data: {
      nome: req.body.nome,
      email: req.body.email,
      telefone: req.body.telefone,
      cpf: req.body.cpf
    }
  })

  res.status(201).json(req.body)
  
}); 



app.put('/usuarios/:id', async (req, res) => {
  

  await prisma.cliente.update({

    where: {
      id_cliente: parseInt(req.params.id, 10)
    },

    data: {
      nome: req.body.nome,
      email: req.body.email,
      telefone: req.body.telefone,
      cpf: req.body.cpf
    }
  })

  res.status(201).json(req.body)
  
}); 



app.get('/usuarios', async (req, res) => {

  let cliente = []

  if (req.query) {

    cliente = await prisma.cliente.findMany({
      where: {
        nome: req.query.nome,
        email: req.query.email,
        telefone: req.query.telefone,
        cpf: req.query.cpf
      }
    })

  } 
  
  else {

    const cliente = await prisma.cliente.findMany()

  }
  
  res.status(200).json(cliente)
  
});



app.delete('/usuarios/:id', async (req, res) => {
  await prisma.cliente.delete({
    where: {
      id_cliente: parseInt(req.params.id, 10)
    }
  })

  res.status(200).json({ message: " Usuário deletado com Sucesso !"})

});








const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));