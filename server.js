import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
app.use(express.json())


// =======================================================================================================

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


app.delete('/usuarios/:id', async (req, res) => {
  await prisma.cliente.delete({
    where: {
      id_cliente: parseInt(req.params.id, 10)
    }
  })
  res.status(200).json({ message: " Usuário deletado com Sucesso !"})
});


// =======================================================================================================


app.post('/endereco', async (req, res) => {
  await prisma.endereco.create({
    data: {
      id_cliente: req.body.id_cliente,
      rua: req.body.rua,
      numero: req.body.numero,
      bairro: req.body.bairro,
      cidade: req.body.cidade,
      estado: req.body.estado
    }
  })
  res.status(201).json(req.body)
}); 


app.get('/endereco', async (req, res) => {
  let endereco = []
  if (Object.keys(req.query).length > 0) {
    endereco = await prisma.endereco.findMany({
      where: {
        id_cliente: req.query.id_cliente ? parseInt(req.query.id_cliente) : undefined,
        rua: req.query.rua,
        numero: req.query.numero,
        bairro: req.query.bairro,
        cidade: req.query.cidade,
        estado: req.query.estado
      }
    })
  } else {
    endereco = await prisma.endereco.findMany();
  }
  res.status(200).json(endereco)
});


app.put('/endereco/:id', async (req, res) => {
  try {
    const endereco = await prisma.endereco.update({
      where: {
        id_endereco: parseInt(req.params.id, 10)
      },
      data: {
        rua: req.body.rua,
        numero: req.body.numero,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado
      }
    });
    res.status(200).json(endereco);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar endereço" });
  }
});


app.delete('/endereco/:id', async (req, res) => {
  await prisma.endereco.delete({
    where: {
      id_endereco: parseInt(req.params.id, 10)
    }
  })
  res.status(200).json({ message: " Endereço deletado com Sucesso !"})
});


// =======================================================================================================


app.post('/curso', async (req, res) => {
  await prisma.curso.create({
    data: {
      titulo: req.body.titulo,
      descricao: req.body.descricao,
      carga_horaria: req.body.carga_horaria,
      link_video: req.body.link_video
    }
  })
  res.status(201).json(res.body)
});


app.get('/curso', async (req, res) => {
  let curso = []
  if (Object.keys(req.query).length > 0) {
    curso = await prisma.curso.findMany({
      where: {
        id_curso: req.query.id ? parseInt(req.query.id, 10) : undefined,
        titulo: req.query.titulo,
        descricao: req.query.descricao,
        carga_horaria: req.query.carga_horaria,
        link_video: req.query.link_video
      }
    })
  } else {
    curso = await prisma.curso.findMany();
  }
  res.status(200).json(curso)
});


app.put('/curso/:id', async (req, res) => {
  try {
    const curso = await prisma.curso.update({
      where: {
        id_curso: parseInt(req.params.id, 10)
      },
      data: {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        carga_horaria: req.body.carga_horaria,
        link_video: req.body.link_video
      }
    });
    res.status(200).json(curso);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar curso" });
  }
});


app.delete('/curso/:id', async (req, res) => {
  await prisma.curso.delete({
    where: {
      id_curso: parseInt(req.params.id, 10)
    }
  })
  res.status(200).json({ message: "Curso deletado com Sucesso !"})
});



// =======================================================================================================


app.post('/inscricao_curso', async (req, res) => {
  await prisma.inscricaoCurso.create({
    data: {
      id_cliente: req.body.id_cliente,
      id_curso: req.body.id_curso,
      data_inscricao: new Date(req.body.data_inscricao),
      situacao: req.body.situacao
    }
  });
  res.status(201).json(req.body);
});


app.get('/inscricao_curso', async (req, res) => {
  let inscricoes = []
  if (Object.keys(req.query).length > 0) {
    inscricoes = await prisma.inscricaoCurso.findMany({
      where: {
        id_cliente: req.query.id_cliente ? parseInt(req.query.id_cliente) : undefined,
        id_curso: req.query.id_curso ? parseInt(req.query.id_curso) : undefined,
        situacao: req.query.situacao,
        data_inscricao: req.query.data_inscricao ? new Date(req.query.data_inscricao) : undefined
      }
    })
  } else {
    inscricoes = await prisma.inscricaoCurso.findMany();
  }
  res.status(200).json(inscricoes)
});


app.put('/inscricao_curso/:id', async (req, res) => {
  const inscricao = await prisma.inscricaoCurso.update({
    where: {
      id_inscricao: parseInt(req.params.id, 10)
    },
    data: {
      id_cliente: req.body.id_cliente,
      id_curso: req.body.id_curso,
      data_inscricao: new Date(req.body.data_inscricao),
      situacao: req.body.situacao
    }
  });
  res.status(200).json(inscricao);
});


app.delete('/inscricao_curso/:id', async (req, res) => {
  await prisma.inscricaoCurso.delete({
    where: {
      id_inscricao: parseInt(req.params.id, 10)
    }
  })
  res.status(200).json({ message: "Inscrição do curso deletado com Sucesso !"})
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));