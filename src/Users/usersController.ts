import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from '../Users/usersService';
import { CreateUserDto } from 'src/Dtos/createUserDto';

@Controller('/users')
export class UsersController {
   constructor (private readonly userService: UsersService) {}
   
    @Get()
    findAl() {
        return this.userService.findAl();
    }

    @Post()
    create(@Body() user: CreateUserDto) {
        return this.userService.create(user);
    }
}