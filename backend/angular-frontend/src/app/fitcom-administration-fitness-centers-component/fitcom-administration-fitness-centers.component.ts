
import { Component } from '@angular/core';
import { ApiService } from '../_services/api.service';

@Component({
    templateUrl: './fitcom-administration-fitness-centers.component.html'
})
export class FitcomAdministrationFitnessCentersComponent {

    constructor(private readonly apiService: ApiService) {
        this.apiService.getFitnessCenters(
            (fitnessCenters) => this.fitnessCenters = fitnessCenters
        );
    }

    fitnessCenters: any[] = [];

}
