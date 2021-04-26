
import { Controller } from '@nestjs/common';
import { StaffService } from './staff.service';

@Controller()
export class StaffController {

    constructor(private readonly staffService: StaffService) {}

}
