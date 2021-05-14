
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditPasswordRequest, UserProfile } from '../../../../server/src/users/user.interfaces';
import { UserService } from './user.service';

@Injectable()
export class ApiService {

    constructor(
        private readonly httpClient: HttpClient,
        private readonly snackBar: MatSnackBar,
        private readonly userService: UserService
    ) {}

    showSnackBar(title: string): void {
        this.snackBar.open(title, '', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom'
        });
    }

    getProfile(completion: (user: UserProfile | undefined) => void): void {
        if (this.userService.jwt) this.httpClient.get<UserProfile>('api/users/profile', { headers: { authorization: this.userService.jwt } }).subscribe(
            (user) => completion(user),
            () => {
                this.showSnackBar('Profil konnte nicht geladen werden.');
                completion(undefined);
            }
        );
    }

    editPassword(editPasswordRequest: EditPasswordRequest, completion: (wasSuccessful: boolean) => void): void {
        if (this.userService.jwt) this.httpClient.post<UserProfile>('api/users/edit-password', editPasswordRequest, { headers: { authorization: this.userService.jwt } }).subscribe(
            () => completion(true),
            () => this.showSnackBar('Passwort konnte nicht geändert werden.')
        );
    }

}
