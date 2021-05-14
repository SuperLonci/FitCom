
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './user.service';

@Injectable()
export class ApiService {

    constructor(
        private readonly httpClient: HttpClient,
        private readonly snackBar: MatSnackBar,
        private readonly userService: UserService
    ) {
        console.log(userService.jwt);
    }

    showSnackBar(title: string): void {
        this.snackBar.open(title, '', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom'
        });
    }

    getProfile(): void {
        this.httpClient.get('api/users/').subscribe(
            (user) => console.log(user)
        );
    }

}
