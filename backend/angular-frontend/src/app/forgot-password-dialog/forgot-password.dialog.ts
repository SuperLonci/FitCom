
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../_services/api.service';

@Component({
    templateUrl: './forgot-password.dialog.html'
})
export class ForgotPasswordDialog {

    constructor(
        private readonly apiService: ApiService,
        private readonly dialogReference: MatDialogRef<ForgotPasswordDialog>,
    ) {}

    email: string = '';

    dataIsIncomplete = (): boolean => this.email === '';

    forgotPassword(): void {
        if (!this.dataIsIncomplete()) undefined;
        // this.userService.authenticate(this.credentials, 
        //     () => this.dialogReference.close()
        // );
    }

}
