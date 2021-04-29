
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UserForRegistration } from '../../../../nest-server/src/users/user.interfaces';
import { UserService } from '../user.service';

@Component({
    template: ''
})
export class RegistrationPage {

    constructor(
        private readonly dialog: MatDialog,
        private readonly activeRoute: ActivatedRoute
    ) {
        const activationToken = this.activeRoute.snapshot.params.activationToken;
        this.dialog.open(RegistrationDialog, { data: activationToken, disableClose: true });
    }

}

@Component({
    templateUrl: './registration.dialog.html'
})
export class RegistrationDialog {

    constructor(
        @Inject(MAT_DIALOG_DATA) private readonly activationToken: string,
        private readonly dialogReference: MatDialogRef<RegistrationDialog>,
        private readonly userService: UserService
    ) {}

    user: UserForRegistration = {
        gender: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        password: ''
    }

    passwordRepeat: string = '';

    passwordIsValid = (): boolean => this.user.password !== '';
    passwordsAreEqual = (): boolean => this.user.password === this.passwordRepeat;
    dataIsComplete = (): boolean => this.user.firstName !== '' && this.user.lastName !== '' && this.passwordIsValid() && this.passwordsAreEqual();

    register(): void {
        this.userService.register(this.activationToken, this.user, 
            (wasSuccessful) => {
                if (wasSuccessful) this.dialogReference.close();
            }
        );
    }

}
