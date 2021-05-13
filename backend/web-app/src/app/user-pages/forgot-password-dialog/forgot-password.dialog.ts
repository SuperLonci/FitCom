
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    templateUrl: './forgot-password.dialog.html'
})
export class ForgotPasswordDialog {

    constructor(@Inject(MAT_DIALOG_DATA) private readonly passedEmail: string) {
        this.email = passedEmail;
    }

    text: string = 'Wenn Sie Ihr Passwort vergessen haben, können wir Ihnen eine E-Mail zukommen lassen, mit der Sie ein neues Passwort festlegen können.';

    email: string = '';

    forgotPassword(): void {
        //
    }

}
