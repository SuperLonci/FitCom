
import { Component } from '@angular/core';

@Component({
    template: `
        <mat-tab-group mat-align-tabs="end">
    
            <mat-tab>
                <ng-template mat-tab-label> Fitnessstudios </ng-template>
            </mat-tab>

            <mat-tab>
                <ng-template mat-tab-label> Fitcom Administratoren </ng-template>
            </mat-tab>
            
        </mat-tab-group>

        Administratoroberfläche
    `
})
export class AdministrationSurface {

}
