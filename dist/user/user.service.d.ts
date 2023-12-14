import { User } from "./user.entity";
export declare class UserService {
    users: User[];
    getUserByUserName(userName: string): User;
}
