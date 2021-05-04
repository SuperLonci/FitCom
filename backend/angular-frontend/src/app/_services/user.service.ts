
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthenticationResponse, Credentials } from './../../../../nest-server/src/users/user.interfaces';

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

    user: undefined | AuthenticationResponse;

    setAuthenticated(authenticationResponse: AuthenticationResponse): void {
        this.user = authenticationResponse;
        if (this.user.isFitcomAdministrator) this.router.navigate(['Administration']);
        localStorage.setItem('fitcom-jwt', authenticationResponse.jwt);
    }

    authorize(jwt: string): void {
        this.httpClient.post<AuthenticationResponse>('api/users/authorization', {}, {headers: {authorization: jwt} }).subscribe(
            (response: AuthenticationResponse) => this.setAuthenticated(response)
        );
    }

    authenticate(user: Credentials, completion: () => void): void {
        this.httpClient.post<AuthenticationResponse>('api/users/authentication', user).subscribe(
            (response: AuthenticationResponse) => {
                this.setAuthenticated(response);
                completion();
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
        this.user = undefined;
        this.router.navigate(['']);
    }

    // register(activationToken: string, user: UserForRegistration, completion: (wasSuccessful: boolean) => void): void {
    //     this.httpClient.post<AuhtenticationResponse>(`api/users/register/${activationToken}`, user).subscribe(
    //         (response: AuhtenticationResponse) => {
    //             this.setAuthenticated(response.jwt);
    //             completion(true);
    //             if (this.userRole === FitcomUserRole.fitcomAdministrator) this.router.navigate(['Administration']);
    //             if (this.userRole === FitcomUserRole.fitnessCenterAdministrator || this.userRole === FitcomUserRole.fitnessCenterTrainer) this.router.navigate(['Fitnessstudio']);
    //         },
    //         () => completion(false)
    //     );
    // }
    
}
