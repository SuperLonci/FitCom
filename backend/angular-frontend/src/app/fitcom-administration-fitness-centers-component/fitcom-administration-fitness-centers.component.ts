
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../_services/api.service';
import { FitcomAdministrationCreateFitnessCenterDialog } from './fitcom-administration-create-fitness-center-dialog/fitcom-administration-create-fitness-center.dialog';
import { FitcomAdministrationFitnessCenterDetailDialog } from './fitcom-administration-fintess-center-detail-dialog/fitcom-administration-fintess-center-detail.dialog';

@Component({
    templateUrl: './fitcom-administration-fitness-centers.component.html'
})
export class FitcomAdministrationFitnessCentersComponent {

    constructor(
        private readonly apiService: ApiService,
        private readonly dialog: MatDialog
    ) {
        this.apiService.getFitnessCenters(
            (fitnessCenters) => this.fitnessCenters = fitnessCenters
        );
    }

    fitnessCenters: any[] = [];

    columns = [
        {
            objectKey: 'title',
            title: 'Name'
        }
    ];

    didSelectFitnessCenter(id: string): void {
        this.dialog.open(FitcomAdministrationFitnessCenterDetailDialog, {data: id});
    }

    createFitnessCenter(): void {
        this.dialog.open(FitcomAdministrationCreateFitnessCenterDialog);
    }

}
