
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtContent } from '../../../../nest-server/src/users/user.interfaces';
import jwt_decode from 'jwt-decode';
import { ApiService } from '../api.service';

@Injectable()
export class AppService {

    constructor(
        private readonly apiService: ApiService,
        private readonly router: Router
    ) {
        const jwt = localStorage.getItem('fitcom-jwt');
        if (jwt) this.apiService.authorize(jwt, (jwt) => this.setAuthenticated(jwt));
        else console.log('no token to authorize');
    }

    jwt: string | undefined;
    userId: string | undefined;
    userRole: string | undefined;

    isLoading: boolean = false;

    setAuthenticated(jwt: string): void {
        localStorage.setItem('fitcom-jwt', jwt);
        const {userId, userRole} = jwt_decode<JwtContent>(jwt);
        this.jwt = jwt;
        this.userId = userId;
        this.userRole = userRole;
        // if (userRole === FitcomUserRole.fitcomAdministrator) this.router.navigate(['Administration']);
        // else this.router.navigate(['Fitnessstudio']);
    }

    signout(): void {
        localStorage.removeItem('fitcom-jwt');
        this.jwt = undefined;
        this.userId = undefined;
        this.userRole = undefined;
        this.router.navigate(['']);
    }
    
}
