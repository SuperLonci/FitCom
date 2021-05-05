
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../_services/api.service';
import { FitcomAdministrationAdministratorDetailDialog } from './fitcom-administration-administrator-detail-dialog/fitcom-administration-administrator-detail.dialog';
import { FitcomAdministrationCreateAdministratorDialog } from './fitcom-administration-create-administrator-component/fitcom-administration-create-administrator.dialog';

@Component({
    templateUrl: './fitcom-administration-administrators.component.html'
})
export class FitcomAdministrationAdministratorsComponent {

    constructor(
        private readonly apiService: ApiService,
        private readonly dialog: MatDialog
    ) {
        this.apiService.getAdministrators(
            (administratiors) => this.administrators = administratiors
        );
    }

    administrators: any[] = [];

    columns = [
        {
            objectKey: 'firstName',
            title: 'Vorname'
        },
        {
            objectKey: 'lastName',
            title: 'Nachname'
        }
    ];

    didSelectAdministrator(id: string): void {
        this.dialog.open(FitcomAdministrationAdministratorDetailDialog, {data: id});
    }

    createAdministrator(): void {
        this.dialog.open(FitcomAdministrationCreateAdministratorDialog);
    }

}
