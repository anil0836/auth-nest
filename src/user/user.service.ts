import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {

    public users: User[] = [
        {
            username: "User1",
            password: "emp",
            email: "user1@gmail.com",
            age: 22
        },
        {
            username: "User2",
            password: "admin",
            email: "user2@gmail.com",
            age: 22
        }, {
            username: "User3",
            password: "admin",
            email: "user3@gmail.com",
            age: 22
        },

    ];
    getUserByUserName(userName: string):
        User {

        return this.users.find((user: User) => user.username == userName);
    }
}