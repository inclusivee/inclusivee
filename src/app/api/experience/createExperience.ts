import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
 }

 const formData = new URLSearchParams(req.body);
 const jobTitle = formData.get("jobTitle") as string;
 const companyName = formData.get("companyName") as string;
 const startDate = new Date(formData.get("startDate") as string);
 const endDate = new Date(formData.get("endDate") as string);
 const isCurrent = formData.get("isCurrent") === 'true';
 const responsibilities = formData.get("responsibilities") as string;
 const userIdString = formData.get("userId") as string;
 const userId = parseInt(userIdString);

 try {
    await prisma.experience.create({
      data: {
        jobTitle,
        companyName,
        startDate,
        endDate,
        isCurrent,
        responsibilities,
        userId
      },
    });

    // Redirecionamento no lado do servidor
    res.redirect(302, '/pages/registryCurriculum/ability');
 } catch (error) {
    console.error('Error creating experience:', error);
    res.status(500).json({ message: 'Internal Server Error' });
 }
}
