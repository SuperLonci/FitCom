
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
export class FitnessCenterAdministrationComponent {

    constructor(private readonly router: Router) {}

    selectedTab: number = 3;
    tabs: string[] = ['Anfragen', 'Mitglieder', 'Angestellte', 'Fitnessstudio'];

    tabSelectionDidChange(index: number): void {
        this.router.navigate(['Fitnessstudio', this.tabs[index]]);
    }

}
