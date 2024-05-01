'use server'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';


const prisma = new PrismaClient

async function createAccount(formData: FormData) {
  
  
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const type= formData.get('typeUser') as string
  
    const hasPassword = await bcrypt.hash(password,10)
  
    await prisma.user.create({
      data: {
          name,
          email,
          password:hasPassword,
          type
      },
    });
    redirect("/pages/homeCandidato");
  }

  export default createAccount;
 
