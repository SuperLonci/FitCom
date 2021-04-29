
import { Component } from '@angular/core';
import { Administrator } from '../../../../nest-server/src/administrators/administrator.interfaces';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
    templateUrl:'./user-profile.dialog.html'
})
export class UserProfileDialog {

    constructor(
        private readonly userService: UserService,
        private readonly apiService: ApiService
    ) {
        if (!this.userService.userId) return;
        if (this.userService.isAdministrator())
            this.apiService.getFitcomAdministrator(this.userService.userId, 
                administrator => this.user = administrator
            );
        // if (this.userService.isFitnessCenterStaff()) this.api
    }

    user: Administrator | undefined;

}