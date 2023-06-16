import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/Dtos/createUserDto';

global.users = [];
@Injectable()
export class UsersService {
    findAl(): any[] {
        return global.users;
    }

    create(user: CreateUserDto){
        global.users.push(user);
    }
}