
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    async test(): Promise<any> {
        return await this.userService.test();
    }

}
