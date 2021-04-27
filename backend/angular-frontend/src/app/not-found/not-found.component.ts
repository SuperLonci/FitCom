
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template:'<div> Seite konnte nicht gefunden werden </div> <button mat-button (click)="navigateHome()"> Zur Stratseite </button>'
})
export class NotFoundComponent {

    constructor(private readonly router: Router) {}

    navigateHome(): void {
        this.router.navigate(['']);
    }

}
