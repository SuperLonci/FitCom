
import { Component } from '@angular/core';
import { User } from '../../../../nest-server/src/users/user.interfaces';
import { ApiService } from '../_services/api.service';
import { UserService } from '../_services/user.service';

@Component({
    templateUrl: './user-profile.dialog.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileDialog {

    constructor(
        private readonly apiService: ApiService,
        private readonly userService: UserService
    ) {
        if (this.userService.userId) this.apiService.getUserProfile(this.userService.userId,
            (user: User) => this.user = user
        );
    }

    user: User | undefined;

    editMode: boolean = false;

}
