export interface UserModel {
    userID: number;
    email: string;
    password: string;
    hasedpassword: string;
    role: string;
}

export type CreateUserInput = {
    email: string;
    password: string;
    role: string;
};
