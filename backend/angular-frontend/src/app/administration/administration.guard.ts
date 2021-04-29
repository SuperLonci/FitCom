
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user.service';

@Injectable()
export class AdministrationGuard implements CanActivate {
    
    constructor(
        private readonly userService: UserService,
        private readonly router: Router
    ) {}

    canActivate(): boolean {
        if (this.userService.isAdministrator()) return true;
        this.router.navigate(['']);
        return false;
    }

}
