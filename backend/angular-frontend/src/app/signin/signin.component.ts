
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Credentials } from '../../../../nest-server/src/identity-provider/identity-provider.interfaces';
import { ApiService } from '../api.service';
import { AppService } from '../app/app.service';

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
        private readonly apiService: ApiService,
        private readonly appService: AppService
    ) {}

    user: Credentials = {
        email: '',
        password: ''
    }
    
    signin(): void {
        this.apiService.authenticate(this.user, (jwt) => {
            this.dialogReference.close();
            this.appService.setAuthenticated(jwt);
        });
    }
    
}
