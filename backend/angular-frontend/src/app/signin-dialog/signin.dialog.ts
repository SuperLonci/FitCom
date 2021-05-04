
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ForgotPasswordDialog } from '../forgot-password-dialog/forgot-password.dialog';
import { UserService } from './../_services/user.service';

@Component({
    templateUrl: './signin.dialog.html'
})
export class SigninDialog {

    constructor(
        private readonly userService: UserService,
        private readonly dialogReference: MatDialogRef<SigninDialog>,
        private readonly dialog: MatDialog
    ) {}

    credentials: {
        email: string
        password: string
    } = {
        email: '',
        password: ''
    }

    dataIsIncomplete = (): boolean => this.credentials.email === '' || this.credentials.password === '';

    signin(): void {
        if (!this.dataIsIncomplete()) this.userService.authenticate(this.credentials, 
            () => this.dialogReference.close()
        );
    }

    forgotPassword(): void {
        this.dialog.open(ForgotPasswordDialog);
    }

}
