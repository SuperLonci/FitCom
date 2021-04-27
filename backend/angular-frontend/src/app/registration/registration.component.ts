
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { StaffForPost } from '../../../../nest-server/src/staff/staff.interfaces';

@Component({
    template: ''
})
export class RegistrationPage {

    constructor(
        private readonly dialog: MatDialog,
        private readonly activeRoute: ActivatedRoute
    ) {
        console.log(this.activeRoute.snapshot.params);
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
        private readonly httpClient: HttpClient
    ) {}

    staff: StaffForPost = {
        gender: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        password: ''
    }

    passwordRepeat: string = '';

    passwordIsValid = (): boolean => this.staff.password !== '';
    passwordsAreEqual = (): boolean => this.staff.password === this.passwordRepeat;
    dataIsComplete = (): boolean => this.staff.firstName !== '' && this.staff.lastName !== '' && this.passwordIsValid() && this.passwordsAreEqual();

    register(): void {
        this.httpClient.post(`api/staff/register/${this.activationToken}`, this.staff).subscribe(
            () => undefined
        );
    }

}
