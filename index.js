import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Exemplo: listar todos os clientes da tabela cliente
  const clientes = await prisma.cliente.findMany()
  console.log(clientes)
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
