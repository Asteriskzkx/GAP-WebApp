import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
import { UserModel } from "@/models/UserModel";

export class UserRepository {
    async getAll(): Promise<UserModel[]> {
        return prisma.user.findMany();
    }

    async getById(userID: number): Promise<UserModel | null> {
        return prisma.user.findUnique({ where: { userID } });
    }

    async create(data: Omit<UserModel, "userID">): Promise<UserModel> {
        return prisma.user.create({ data });
    }

    async update(userID: number, data: Partial<Omit<UserModel, "userID">>): Promise<UserModel> {
        return prisma.user.update({ where: { userID }, data });
    }

    async delete(userID: number): Promise<UserModel> {
        return prisma.user.delete({ where: { userID } });
    }
}
