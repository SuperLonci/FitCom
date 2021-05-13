
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    templateUrl: './registration.dialog.html'
})
export class RegistrationDialog {

    constructor(@Inject(MAT_DIALOG_DATA) public readonly activationToken: string) {}

    completeRegistration(): void {
        //
    }

}
