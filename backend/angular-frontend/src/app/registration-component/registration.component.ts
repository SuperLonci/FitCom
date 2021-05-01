
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { RegistrationDialog } from './registration.dialog';

@Component({
    template: ''
})
export class RegistrationComponent {
    
    constructor(
        private readonly activeRoute: ActivatedRoute,
        private readonly dialog: MatDialog
    ) {
        const activationToken = this.activeRoute.snapshot.params.activationToken;
        this.dialog.open(RegistrationDialog, { data: activationToken, disableClose: true });
    }

}
