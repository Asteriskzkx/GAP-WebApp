import { UserRepository } from "@/repositories/userRepository";
import { CreateUserInput, UserModel } from "@/models/UserModel";
import bcrypt from "bcryptjs";

const repo = new UserRepository();

export class UserService {
    async getUsers(): Promise<UserModel[]> {
        return repo.getAll();
    }

    async getUser(userID: number): Promise<UserModel | null> {
        return repo.getById(userID);
    }

    async createUser(data: CreateUserInput): Promise<UserModel> {
        const hashedPassword = await bcrypt.hash(data.password, 10);

        return repo.create({
            email: data.email,
            password: data.password,
            hasedpassword: hashedPassword,
            role: data.role,
        });
    }

    async updateUser(userID: number, data: Partial<Omit<UserModel, "userID">>): Promise<UserModel> {
        return repo.update(userID, data);
    }

    async deleteUser(userID: number): Promise<UserModel> {
        return repo.delete(userID);
    }
}
