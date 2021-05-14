
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Credentials, JwtResponse, JwtResponseUser } from '../../../../server/src/users/user.interfaces';

@Injectable()
export class UserService {

    constructor(
        private readonly httpClient: HttpClient,
        private readonly snackBar: MatSnackBar,
        private readonly router: Router
    ) {
        const jwt = localStorage.getItem('fitcom-jwt');
        if (jwt) this.authorization(jwt);
        else console.log('No JWT in local storage');
    }

    jwt: string | undefined;
    user: JwtResponseUser | undefined;

    setUser(response: JwtResponse): void {
        this.jwt = response.jwt;
        this.user = response.user;
        localStorage.setItem('fitcom-jwt', response.jwt);
    }

    authentication(credentials: Credentials, completion: (wasSuccessful: boolean) => void): void {
        this.httpClient.post<JwtResponse>('api/users/authentication', credentials, {observe: 'response'}).subscribe(
            (response) => {
                const jwtResponse: JwtResponse = response.body as JwtResponse;
                this.setUser(jwtResponse);
                completion(true);
            },
            (response) => {
                completion(false);
                if (response.status === 401) this.showSnackBar('Falsches Passwort');
                if (response.status === 403) this.showSnackBar('Benutzerkonto noch nicht freigeschalten');
                if (response.status === 404) this.showSnackBar('Benutzer mit E-Mail Adresse nicht gefunden');
            }
        );
    }

    authorization(jwt: string): void {
        this.httpClient.post<JwtResponse>('api/users/authorization', {}, { headers: { authorization: jwt } }).subscribe(
            jwtResponse => this.setUser(jwtResponse)
        );
    }

    signOut(): void {
        localStorage.removeItem('fitcom-jwt');
        this.jwt = undefined;
        this.user = undefined;
        this.router.navigate(['']);
    }

    showSnackBar(title: string): void {
        this.snackBar.open(title, '', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom'
        });
    }

}
