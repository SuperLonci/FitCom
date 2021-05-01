
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from '../_services/app.service';
import { SigninDialog } from '../signin-dialog/signin.dialog';
import { UserService } from './../_services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    constructor(
        public readonly appService: AppService,
        public readonly userService: UserService,
        private readonly dialog: MatDialog,
        private readonly router: Router
    ) {}

    sideNavIsExpanded: boolean = false;

    navigationLinks: string[] = ['Startseite', 'Nutzungsbedingungen', 'Impressum', 'Datenschutz'];

    signin(): void {
        this.dialog.open(SigninDialog);
    }

    signout(): void {
        this.userService.signout();
    }

    navigateTo(destination: string): void {
        this.sideNavIsExpanded = false;
        this.router.navigate([destination]);
    }

    showUserProfile(): void {
        // this.dialog.open(UserProfileDialog);
    }

    editPassword(): void {
        // this.dialog.open();
    }

}
