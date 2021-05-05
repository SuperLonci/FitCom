
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../_services/api.service';
import { FitcomAdministrationAdministratorDetailDialog } from './fitcom-administration-administrator-detail-dialog/fitcom-administration-administrator-detail.dialog';
import { FitcomAdministrationCreateAdministratorDialog } from './fitcom-administration-create-administrator-component/fitcom-administration-create-administrator.dialog';
import { FitcomAdministrators } from './../../../../nest-server/src/fitcom-administrators/fitcom-administrator.interfaces';

@Component({
    templateUrl: './fitcom-administration-administrators.component.html'
})
export class FitcomAdministrationAdministratorsComponent {

    constructor(
        private readonly apiService: ApiService,
        private readonly dialog: MatDialog
    ) {
        this.apiService.getAdministrators(
            (administratiors: FitcomAdministrators) => this.administrators = administratiors
        );
    }

    administrators: FitcomAdministrators = {
        administrators: [],
        invitedAdministrators: []
    };

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

    invitedAdministratorsColumns = [
        {
            objectKey: 'email',
            title: 'E-Mail Adresse'
        },
        {
            objectKey: 'invitedByName',
            title: 'eingeladen von'
        },
        {
            objectKey: 'invitedAt',
            title: 'eingeladen am'
        }
    ];

    didSelectAdministrator(id: string): void {
        this.dialog.open(FitcomAdministrationAdministratorDetailDialog, {data: id});
    }

    createAdministrator(): void {
        this.dialog.open(FitcomAdministrationCreateAdministratorDialog);
    }

}
