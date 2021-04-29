
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FitcomUserRole } from '../../../../nest-server/src/users/user.interfaces';
import { UserService } from '../user.service';

@Injectable()
export class AdministrationGuard implements CanActivate {
    
    constructor(
        private readonly userService: UserService,
        private readonly router: Router
    ) {}

    canActivate(): boolean {
        if (this.userService.userRole === FitcomUserRole.fitcomAdministrator) return true;
        this.router.navigate(['']);
        return false;
    }

}
