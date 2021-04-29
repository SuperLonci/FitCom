
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { FitnessCenterForAdministrationOverview } from './../../../../../nest-server/src/fitness-centers/fitness-center.interfaces';
import { AddFitnessCenterDialog } from './add-fitness-center-dialog/add-fitness-center.dialog';

@Component({
    templateUrl: './fitness-centers.component.html'
})
export class FitnessCentersComponents {

    constructor(
        private readonly apiService: ApiService,
        private readonly dialog: MatDialog
    ) {
        this.apiService.getFitnessCenters(
            (fitnessCenters => this.fitnessCenters = fitnessCenters)
        );
    }

    fitnessCenters: FitnessCenterForAdministrationOverview[] = [];

    addFitnessCenter(): void {
        this.dialog.open(AddFitnessCenterDialog);
    }

    columns = [
        {
            title: 'Name',
            attributeName: 'title'
        },
        {
            title: 'Stadt',
            attributeName: 'city'
        }
    ];
    
}
