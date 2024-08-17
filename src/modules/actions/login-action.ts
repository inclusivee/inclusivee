'use server'
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers'
import prisma from '../../../lib/prisma';





async function loginAccount(formData: FormData) {
 const email = formData.get("email") as string;
 const password = formData.get("password") as string;

 // Busca o usuário pelo email
 const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
 });

 // Verifica se o usuário existe
 if (!user) {
    // Usuário não encontrado, você pode retornar um erro ou redirecionar
    console.log('Usuário não encontrado');
    return;
 }

 // Verifica se a senha fornecida corresponde à senha hash armazenada
 const isPasswordCorrect = await bcrypt.compare(password, user.password);

 if (isPasswordCorrect) {
   const userId = user.id as number;
   cookies().set('userId', `${userId}`);


    // Senha correta, prossegue com o redirecionamento ou a lógica de login
    redirect("/pages/homeCandidato");
 } else {
    // Senha incorreta, você pode retornar um erro ou redirecionar
    console.log('Senha incorreta');
 }
 

}



export default loginAccount;
