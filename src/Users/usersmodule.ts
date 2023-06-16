import { Module } from '@nestjs/common';
import { UsersController } from './usersController';
import { UsersService } from './usersService';

@Module({
    imports: [],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UserModule {}