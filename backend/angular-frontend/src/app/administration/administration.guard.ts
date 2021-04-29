
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FitcomUserRole } from '../../../../nest-server/src/users/user.interfaces';
import { AppService } from '../app/app.service';

@Injectable()
export class AdministrationGuard implements CanActivate {
    
    constructor(
        private readonly appService: AppService,
        private readonly router: Router
    ) {}

    canActivate(): boolean {
        if (this.appService.userRole === FitcomUserRole.fitcomAdministrator) return true;
        this.router.navigate(['']);
        return false;
    }

}
