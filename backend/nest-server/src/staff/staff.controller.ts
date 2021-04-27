
import { Controller, Param, Post, Request } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffForPost } from './staff.interfaces';

@Controller('api/staff')
export class StaffController {

    constructor(private readonly staffService: StaffService) {}

    @Post('register/:activationToken')
    async register(@Param('activationToken') activationToken: string, @Request() request: Request): Promise<void> {
        const staff = request.body as unknown as StaffForPost;
        return await this.staffService.register(activationToken, staff);
    }

}
