
import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FitnessCenterForPost } from '../../../../../../nest-server/src/fitness-centers/fitness-center.interfaces';

@Component({
    templateUrl: './add-fitness-center.dialog.html'
})
export class AddFitnessCenterDialog {
    
    constructor(private readonly apiService: ApiService) {}

    fitnessCenter: FitnessCenterForPost = {
        title: '',
        country: '',
        city: '',
        postCode: '',
        street: '',
        streetNumber: '',
        email: '',
        phoneNumber: '',
        faxNumber: '',
        ownerEmail: ''
    };

    addFitnessCenter(): void {
        this.apiService.createFitnessCenter(this.fitnessCenter);
    }

}
