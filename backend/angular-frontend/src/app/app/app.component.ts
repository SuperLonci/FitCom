
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SigninDialog } from '../signin/signin.component';
import { AppService } from './app.service';

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

    navigationDestinations: string[] = ['Startseite', 'Administration', 'Fitnessstudio', 'Blog'];

    signin(): void {
        this.dialog.open(SigninDialog);
    }

    signout(): void {
        this.appService.signout();
    }

    navigateTo(destination: string): void {
        this.router.navigate([destination]);
    }

    editPassword(): void {
        // this.dialog.open();
    }

}
