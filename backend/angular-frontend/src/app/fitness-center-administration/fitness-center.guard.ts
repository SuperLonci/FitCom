
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user.service';

@Injectable()
export class FitnessCenterGuard implements CanActivate {
    
    constructor(
        private readonly userService: UserService,
        private readonly router: Router
    ) {}

    async canActivate(): Promise<boolean> {
        await new Promise(resolve => setTimeout(resolve, 250));
        if (this.userService.isFitnessCenterStaff()) return true;
        this.router.navigate(['']);
        return false;
    }

}
