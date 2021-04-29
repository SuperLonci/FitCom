
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SigninDialog } from '../signin/signin.component';
import { AppService } from './app.service';
import { UserService } from '../user.service';
import { UserProfileDialog } from '../user-profile/user-profile.dialog';

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
        this.dialog.open(UserProfileDialog);
    }

    editPassword(): void {
        // this.dialog.open();
    }

}
