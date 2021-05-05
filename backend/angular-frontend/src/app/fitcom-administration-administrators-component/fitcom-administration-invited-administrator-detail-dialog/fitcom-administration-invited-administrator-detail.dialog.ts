
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InvitedFitcomAdministrator } from '../../../../../nest-server/src/fitcom-administrators/fitcom-administrator.interfaces';

@Component({
    templateUrl: './fitcom-administration-invited-administrator-detail.dialog.html'
})
export class FitcomAdministrationInvitedAdministratorDetailDialog {

    constructor(@Inject(MAT_DIALOG_DATA) public readonly invitedAdministrator: InvitedFitcomAdministrator) {}

}
