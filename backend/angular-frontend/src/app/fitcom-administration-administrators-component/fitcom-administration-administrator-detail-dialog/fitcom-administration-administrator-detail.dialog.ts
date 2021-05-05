
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialog } from 'src/app/_reusable-components/confirmation-dialog/confirmation.dialog';
import { FitcomAdministrator } from '../../../../../nest-server/src/fitcom-administrators/fitcom-administrator.interfaces';

@Component({
    templateUrl: './fitcom-administration-administrator-detail.dialog.html'
})
export class FitcomAdministrationAdministratorDetailDialog {

    constructor(
        @Inject(MAT_DIALOG_DATA) public readonly administrator: FitcomAdministrator,
        private readonly dialog: MatDialog
    ) {}
    
    unauthorizeFitcomAdministrator(): void {
        this.dialog.open(ConfirmationDialog, {data: {
            title: `Sollen ${this.administrator.firstName} ${this.administrator.lastName} wirklich seine Rechte als Administrator entzogen werden?`,
            buttonTitle: 'Entziehen',
            warnAction: true
        }}).afterClosed().subscribe((confirmed: boolean) => {
            //
        });
    }

}
