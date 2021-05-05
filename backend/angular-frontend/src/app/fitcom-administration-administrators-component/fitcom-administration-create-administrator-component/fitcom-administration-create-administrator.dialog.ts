
import { Component } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { FitcomAdministratorForPostRequest } from '../../../../../nest-server/src/fitcom-administrators/fitcom-administrator.interfaces';

@Component({
    templateUrl: './fitcom-administration-create-administrator.dialog.html'
})
export class FitcomAdministrationCreateAdministratorDialog {

    constructor(private readonly apiService: ApiService) {}

    isLoading: boolean = false;
    
    administrator: FitcomAdministratorForPostRequest = {
        email: ''
    };

    invite(): void {
        this.apiService.inviteFitcomAdministrator(this.administrator);
    }

}
