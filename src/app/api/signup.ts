'user server'
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 if (req.method === 'POST') {
    // Extrai os dados do corpo da requisição
    const { name, email, password, typeUser } = req.body;

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      // Cria um novo usuário no banco de dados
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          type: typeUser,
        },
      });

      // Retorna uma resposta para o cliente
      res.status(200).json({ message: 'Usuário criado com sucesso', user });
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
 } else {
    // Método não permitido
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
 }
}
