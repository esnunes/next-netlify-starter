import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ log: ['query'] })

export default async function handler(req, res) {
  await prisma.user.findUnique({ where: { id: '1' } })
  res.status(200).json({ name: 'hello world' })
}
