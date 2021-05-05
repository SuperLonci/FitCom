
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FitcomAdministrator } from '../../../../../nest-server/src/fitcom-administrators/fitcom-administrator.interfaces';

@Component({
    templateUrl: './fitcom-administration-administrator-detail.dialog.html'
})
export class FitcomAdministrationAdministratorDetailDialog {

    constructor(@Inject(MAT_DIALOG_DATA) public readonly administrator: FitcomAdministrator) {}
    
}
