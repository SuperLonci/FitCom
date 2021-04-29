
import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
    templateUrl: './fitness-centers.component.html'
})
export class FitnessCentersComponents {

    constructor(private readonly apiService: ApiService) {
        this.apiService.getFitnessCenters();
    }
    
}
