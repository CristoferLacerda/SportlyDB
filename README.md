# 🗄️ Sportly - Backend (SportlyDB)

Este repositório contém a **camada de banco de dados e APIs** do projeto **Sportly**, responsável por gerenciar informações de usuários, treinos e modalidades esportivas.  
É a base de dados e a API que alimentam o **Frontend do Sportly**.

🔗 Frontend relacionado: [Sportly Frontend](https://github.com/CristoferLacerda/FrontEnd_Sportly)

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
- [Express.js](https://expressjs.com/) - Framework para criação de APIs
- [Prisma ORM](https://www.prisma.io/) - ORM para manipulação do banco de dados
- [MySQL](https://www.mysql.com/) - Banco de dados relacional
- [Nodemon](https://nodemon.io/) - Utilitário para desenvolvimento
- [ESLint](https://eslint.org/) - Padronização do código

---

## 📂 Estrutura do Projeto

```

SportlyDB/
├── prisma/           # Schema e migrations do banco de dados
│   └── schema.prisma
├── src/
│   ├── routes/       # Definição das rotas da API
│   ├── controllers/  # Lógica das rotas
│   ├── services/     # Regras de negócio
│   └── index.js      # Arquivo principal do servidor
├── package.json      # Dependências e scripts
└── README.md         # Este arquivo

````



## ⚙️ Como Rodar o Projeto

1. Clone este repositório:
   
   git clone https://github.com/CristoferLacerda/SportlyDB.git

2. Acesse a pasta:

   cd SportlyDB

3. Instale as dependências:

   npm install

4. Configure o banco de dados:

   * Ajuste as variáveis no arquivo `.env`:

     DATABASE_URL="file:./dev.db"   # exemplo para SQLite

5. Rode as migrations para criar as tabelas:

   npx prisma migrate dev

6. Inicie o servidor:

   npm run dev

7. A API ficará disponível em:

   http://localhost:3000

---

## 📡 Endpoints Principais

### 👤 Usuários

* `POST /usuarios` → Criar usuário
* `GET /usuarios` → Listar usuários
* `GET /usuarios/:id` → Buscar usuário por ID
* `PUT /usuarios/:id` → Atualizar usuário
* `DELETE /usuarios/:id` → Deletar usuário

### 🎓 Cursos

* `POST /cursos` → Criar curso
* `GET /cursos` → Listar cursos
* `GET /cursos/:id` → Buscar cursos por ID
* `PUT /cursos/:id` → Atualizar curso
* `DELETE /cursos/:id` → Deletar curso

### 🛒 Pedidos

* `POST /pedido` → Criar pedido
* `GET /pedido/:id` → Buscar pedido
* `PUT /pedido/:id` → Atualizar pedido
  

📄 Veja o schema completo em: [prisma/schema.prisma](./prisma/schema.prisma)


---

## 🗄️ Modelo do Banco de Dados (Prisma Schema)


```prisma
model cliente {
  id_cliente Int      @id @default(autoincrement())
  nome       String
  email      String   @unique
  telefone   String?  @db.VarChar(15)
  cpf        String   @unique
  senha      String   @db.VarChar(255)
}

model pedido {
  id_pedido   Int      @id @default(autoincrement())
  id_cliente  Int
  data_pedido DateTime @db.Date
  valor_total Decimal  @db.Decimal(10, 2)

  @@index([id_cliente], map: "id_cliente")
}

model curso {
  id_curso      Int    @id @default(autoincrement())
  titulo        String @db.VarChar(150)
  descricao     String @db.VarChar(200)
  carga_horaria Int    @db.SmallInt
  link_video    String @db.VarChar(100)
}
```
