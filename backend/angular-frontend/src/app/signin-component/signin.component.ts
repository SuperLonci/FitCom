
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Credentials } from './../../../../nest-server/src/interfaces';

@Component({
    template: ''
})
export class SigninPage {

    constructor(
        private readonly dialog: MatDialog
    ) {
        this.dialog.open(SigninDialog, { disableClose: true });
    }

}

@Component({
    templateUrl: './signin.component.html'
})
export class SigninDialog {

    user: Credentials = {
        email: '',
        password: ''
    }

    signinAsAdministrator(): void {
        //
    }

    siginAsFitnessCenterStaff(): void {
        //
    }
    
}
