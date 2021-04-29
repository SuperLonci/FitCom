
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { AdministratorForAdministrationOverview } from './../../../../../nest-server/src/administrators/administrator.interfaces';
import { AddAdministratorDialog } from './add-administrator-dialog/add-administrator.dialog';

@Component({
    templateUrl: './administrators.component.html'
})
export class AdministratorsComponent {

    constructor(
        private readonly apiService: ApiService,
        private readonly dialog: MatDialog
    ) {
        this.apiService.getAdministrators(
            administratorsOverview => {
                this.administrators = administratorsOverview.administrators;
                this.pendingAdministrators = administratorsOverview.pendingAdministrators;
            }
        );
    }

    administrators: AdministratorForAdministrationOverview[] = [];
    pendingAdministrators: {
        id: string
        email: string
    }[] = [];

    addAdministrator(): void {
        this.dialog.open(AddAdministratorDialog).afterClosed().subscribe(
            (pendingAdministrator: {id: string, email: string}) => {
                if (pendingAdministrator) this.pendingAdministrators.push(pendingAdministrator);
            }
        );
    }

    adminstratorColumns = [
        {
            title: 'Vorname',
            attributeName: 'firstName'
        },
        {
            title: 'Nachname',
            attributeName: 'lastName'
        }
    ];

    pendingAdministratorColumns = [
        {
            title: 'E-Mail Adresse',
            attributeName: 'email'
        }
    ];
    
}
