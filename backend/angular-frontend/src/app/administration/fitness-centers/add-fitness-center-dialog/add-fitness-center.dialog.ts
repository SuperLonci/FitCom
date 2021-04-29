
import { Component } from '@angular/core';
import { FitnessCenterForPost } from '../../../../../../nest-server/src/fitness-centers/fitness-center.interfaces';

@Component({
    templateUrl: './add-fitness-center.dialog.html'
})
export class AddFitnessCenterDialog {
    
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

}
