
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        <mat-tab-group mat-align-tabs="end" [(selectedIndex)]="selectedTab" (selectedTabChange)="tabSelectionDidChange($event.index)">

            <mat-tab *ngFor="let tab of tabs">
                <ng-template mat-tab-label> {{ tab }} </ng-template>
            </mat-tab>

        </mat-tab-group>

        <div id="content">
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['./administrator.component.scss']
})
export class AdministrationComponent {

    constructor(private readonly router: Router) {
        this.router.navigate(['Administration', this.tabs[this.selectedTab]]);
    }

    selectedTab: number = 3;
    tabs: string[] = ['Trainingsübungen', 'Statistiken', 'Fitnessstudios', 'Administratoren'];

    tabSelectionDidChange(index: number): void {
        this.router.navigate(['Administration', this.tabs[index]]);
    }
    
}
