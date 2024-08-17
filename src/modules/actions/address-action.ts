"use server";
import { redirect } from "next/navigation";
import prisma from "../../../lib/prisma";


async function createAddress(formData: FormData) {
  const zipcode = formData.get("zipcode") as string;
  const street = formData.get("street") as string;
  const number = formData.get("number") as string;
  const district = formData.get("district") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const country = formData.get("country") as string;
  const userIdString = formData.get("userId") as string;
  const userId = parseInt(userIdString) as unknown as number;

  await prisma.address.create({
    data: {
      zipcode,
      street,
      number,
      district,
      city,
      state,
      country,
      userId,
    },
  });
  redirect("/pages/registryCurriculum/experience");
}

export default createAddress;
