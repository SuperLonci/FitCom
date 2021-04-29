
import { Component } from '@angular/core';

@Component({
    template: `
        <mat-tab-group mat-align-tabs="end">

            <mat-tab>
                <ng-template mat-tab-label> Anfragen </ng-template>
            </mat-tab>

            <mat-tab>
                <ng-template mat-tab-label> Mitglieder </ng-template>
            </mat-tab>

            <mat-tab>
                <ng-template mat-tab-label> Fitnessstudio </ng-template>
            </mat-tab>

            <mat-tab>
                <ng-template mat-tab-label> Mitarbeiter </ng-template>
                <staff-component></staff-component>
            </mat-tab>

        </mat-tab-group>
        
        Fitnessstudiooberfläche
    `
})
export class FitnessCenterSurface {

}
