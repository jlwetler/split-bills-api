import prisma from "../database";
import { Session } from "../interfaces/interfaces";

export async function createSession(id: number, token: string) {
    const params = {
        token,
        userId: id
    } 
    await prisma.authentication.create({
        data: params
    });
    const session = await prisma.user.findMany({
        where: {
          authentication: {
            token: token,
          },
        },
        select: {
          id: true,
          name: true,
          email: true,
          authentication: {
            select: {
              token: true,
            },
          },
        },
      });

    return session;
}