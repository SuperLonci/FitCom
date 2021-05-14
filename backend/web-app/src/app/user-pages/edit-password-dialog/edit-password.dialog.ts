
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/_services/api.service';
import { EditPasswordRequest } from '../../../../../server/src/users/user.interfaces';

@Component({
    templateUrl: './edit-password.dialog.html'
})
export class EditPasswordDialog {

    constructor(
        private readonly apiService: ApiService,
        private readonly dialogReference: MatDialogRef<EditPasswordDialog>
    ) {}

    editPasswordRequest: EditPasswordRequest = {
        password: ''
    };

    passwordRepeat: string = '';

    inputIsValid = (): boolean => this.editPasswordRequest.password === this.passwordRepeat && this.passwordRepeat !== '';

    editPassword(): void {
        if (this.inputIsValid()) this.apiService.editPassword(this.editPasswordRequest, (wasSuccessful) => {
            if (wasSuccessful) this.dialogReference.close();
        });
    }

}
