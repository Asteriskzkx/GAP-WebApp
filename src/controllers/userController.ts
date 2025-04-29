import { UserService } from "@/services/userService";
import { CreateUserInput, UserModel } from "@/models/UserModel";

const service = new UserService();

export const userController = {
    getAll: async () => {
        return service.getUsers();
    },
    getById: (id: number): Promise<UserModel | null> => service.getUser(id),
    create: (data: CreateUserInput): Promise<UserModel> => service.createUser(data),
    update: async (userID: number, data: Partial<Omit<UserModel, "userID">>) => {
        return service.updateUser(userID, data);
    },
    delete: async (userID: number) => {
        return service.deleteUser(userID);
    }
};

