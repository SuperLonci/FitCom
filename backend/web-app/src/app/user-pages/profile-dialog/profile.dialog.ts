
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/_services/api.service';
import { UserProfile } from '../../../../../server/src/users/user.interfaces';

@Component({
    templateUrl: './profile.dialog.html'
})
export class ProfileDialog {

    constructor(
        private readonly apiService: ApiService,
        private readonly dialogReference: MatDialogRef<ProfileDialog>
    ) {
        this.apiService.getProfile(user => {
            if (!user) this.dialogReference.close();
            this.user = user;
        });
    }

    user: UserProfile | undefined;

}
