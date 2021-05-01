
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from './../_services/user.service';

@Component({
    templateUrl: './signin.dialog.html',
    styleUrls: ['./signin.dialog.scss']
})
export class SigninDialog {

    constructor(
        private readonly userService: UserService,
        private readonly dialogReference: MatDialogRef<SigninDialog>
    ) {}

    credentials: {
        email: string
        password: string
    } = {
        email: '',
        password: ''
    }

    dataIsIncomplete = (): boolean => this.credentials.email === '' || this.credentials.password === ''

    signin(): void {
        if (!this.dataIsIncomplete())
            this.userService.authenticate(this.credentials, 
                () => this.dialogReference.close()
            );
    }

}
