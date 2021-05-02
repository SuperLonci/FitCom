
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

import { AuhtenticationResponse, Credentials, FitcomUserRole, JwtContent, UserForRegistration } from './../../../../nest-server/src/users/user.interfaces';

@Injectable()
export class UserService {

    constructor(
        private readonly httpClient: HttpClient,
        private readonly router: Router,
        private readonly snackBar: MatSnackBar
    ) {
        const jwt = localStorage.getItem('fitcom-jwt');
        if (jwt) this.authorize(jwt);
        else console.log('No JWT in local storage');
    }

    jwt: string | undefined;
    userId: string | undefined;
    userRole: string | undefined;

    isAdministrator = (): boolean => this.userRole === FitcomUserRole.fitcomAdministrator;
    isFitnessCenterStaff = (): boolean => this.userRole === FitcomUserRole.fitnessCenterAdministrator || this.userRole === FitcomUserRole.fitnessCenterTrainer;

    setAuthenticated(jwt: string): void {
        localStorage.setItem('fitcom-jwt', jwt);
        const {userId, userRole} = jwt_decode<JwtContent>(jwt);
        this.jwt = jwt;
        this.userId = userId;
        this.userRole = userRole;
    }

    authorize(jwt: string): void {
        this.httpClient.post<AuhtenticationResponse>('api/users/authorize', {}, {headers: {authorization: jwt} }).subscribe(
            (response: AuhtenticationResponse) => this.setAuthenticated(response.jwt)
        );
    }

    authenticate(user: Credentials, completion: () => void): void {
        this.httpClient.post<AuhtenticationResponse>('api/users/auhtenticate', user).subscribe(
            (response: AuhtenticationResponse) => {
                this.setAuthenticated(response.jwt);
                completion();
                if (this.userRole === FitcomUserRole.fitcomAdministrator) this.router.navigate(['Administration']);
                if (this.userRole === FitcomUserRole.fitnessCenterAdministrator || this.userRole === FitcomUserRole.fitnessCenterTrainer) this.router.navigate(['Fitnessstudio']);
            },
            () => this.snackBar.open('Es ist ein Fehler aufgetreten.', '', {
                duration: 5000,
                horizontalPosition: 'end',
                verticalPosition: 'bottom'
            })
        );
    }

    signout(): void {
        localStorage.removeItem('fitcom-jwt');
        this.jwt = undefined;
        this.userId = undefined;
        this.userRole = undefined;
        this.router.navigate(['']);
    }

    register(activationToken: string, user: UserForRegistration, completion: (wasSuccessful: boolean) => void): void {
        this.httpClient.post<AuhtenticationResponse>(`api/users/register/${activationToken}`, user).subscribe(
            (response: AuhtenticationResponse) => {
                this.setAuthenticated(response.jwt);
                completion(true);
                if (this.userRole === FitcomUserRole.fitcomAdministrator) this.router.navigate(['Administration']);
                if (this.userRole === FitcomUserRole.fitnessCenterAdministrator || this.userRole === FitcomUserRole.fitnessCenterTrainer) this.router.navigate(['Fitnessstudio']);
            },
            () => completion(false)
        );
    }
    

}
