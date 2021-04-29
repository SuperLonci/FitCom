
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        <mat-tab-group mat-align-tabs="end" [(selectedIndex)]="selectedTab" (selectedTabChange)="tabSelectionDidChange($event.index)">

            <mat-tab *ngFor="let tab of tabs">
                <ng-template mat-tab-label> {{ tab }} </ng-template>
            </mat-tab>

        </mat-tab-group>

        <router-outlet></router-outlet>
    `
})
export class AdministrationComponent {

    constructor(private readonly router: Router) {}

    selectedTab: number = 1;
    tabs: string[] = ['Fitnessstudios', 'Administratoren'];

    tabSelectionDidChange(index: number): void {
        this.router.navigate(['Administration', this.tabs[index]]);
    }
    
}
