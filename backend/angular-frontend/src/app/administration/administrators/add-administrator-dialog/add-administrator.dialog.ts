
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

@Component({
    templateUrl: './add-administrator.dialog.html'
})
export class AddAdministratorDialog {

    constructor(
        private readonly apiService: ApiService,
        private readonly dialogReference: MatDialogRef<AddAdministratorDialog>
    ) {}

    email: string = '';

    addAdministrator(): void {
        this.apiService.createAdministrator(this.email, (userId) => {
            if (userId) this.dialogReference.close({
                id: userId,
                email: this.email
            });
        });
    }

}
