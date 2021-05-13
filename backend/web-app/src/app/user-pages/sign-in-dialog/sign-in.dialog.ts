
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordDialog } from '../forgot-password-dialog/forgot-password.dialog';

@Component({
    templateUrl: './sign-in.dialog.html'
})
export class SignInDialog {

    constructor(private readonly dialog: MatDialog) {}

    email: string = '';
    password: string = '';

    signIn(): void {
        //
    }

    forgotPassword(): void {
        this.dialog.open(ForgotPasswordDialog, {data: this.email});
    }

}
