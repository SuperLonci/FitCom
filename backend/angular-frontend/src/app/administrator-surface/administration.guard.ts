
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AdministrationGuard implements CanActivate {
    
    constructor(private readonly router: Router) {}

    canActivate(): boolean {
        this.router.navigate(['']);
        return true;
    }

}
