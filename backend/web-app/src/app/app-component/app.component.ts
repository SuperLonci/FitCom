
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignInDialog } from '../user-pages/sign-in-dialog/sign-in.dialog';
import { AppService } from '../_services/app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        public readonly appService: AppService,
        private readonly dialog: MatDialog,
        private readonly router: Router
    ) {}

    sideNavIsExpanded: boolean = false;

    navigationLinks: string[] = ['Startseite', 'Nutzungsbedingungen', 'Impressum', 'Datenschutz'];

    navigateTo(destination: string): void {
        this.sideNavIsExpanded = false;
        this.router.navigate([destination]);
    }

    signIn(): void {
        this.dialog.open(SignInDialog);
    }

}
