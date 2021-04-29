
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Credentials } from '../../../../nest-server/src/users/user.interfaces';
import { UserService } from '../user.service';

@Component({
    template: ''
})
export class SigninPage {
    constructor(private readonly dialog: MatDialog) {
        this.dialog.open(SigninDialog, { disableClose: true });
    }
}

@Component({
    templateUrl: './signin.component.html'
})
export class SigninDialog {

    constructor(
        private readonly dialogReference: MatDialogRef<SigninDialog>,
        private readonly userService: UserService
    ) {}

    user: Credentials = {
        email: '',
        password: ''
    }
    
    signin(): void {
        this.userService.authenticate(this.user, (wasSuccessful) => {
            if (wasSuccessful) this.dialogReference.close();
        });
    }
    
}
