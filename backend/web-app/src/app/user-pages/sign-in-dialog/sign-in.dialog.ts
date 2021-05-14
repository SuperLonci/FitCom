
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/_services/user.service';
import { Credentials } from '../../../../../server/src/users/user.interfaces';
import { ForgotPasswordDialog } from '../forgot-password-dialog/forgot-password.dialog';

@Component({
    templateUrl: './sign-in.dialog.html'
})
export class SignInDialog {

    constructor(
        private readonly dialog: MatDialog,
        private readonly userService: UserService,
        private readonly dialogReference: MatDialogRef<SignInDialog>
    ) {}

    isLoading: boolean = false;

    credentials: Credentials = {
        email: '',
        password: ''
    };

    inputIsValid = (): boolean => this.credentials.email !== '' && this.credentials.password !== '';

    signIn(): void {
        if (!this.inputIsValid()) return;
        this.isLoading = true;
        this.userService.authentication(this.credentials, wasSuccessful => {
            this.isLoading = false;
            if (wasSuccessful) this.dialogReference.close();
        });
    }

    forgotPassword(): void {
        this.dialog.open(ForgotPasswordDialog, {data: this.credentials.email});
    }

}
