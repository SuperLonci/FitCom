
import { Component } from '@angular/core';
import { ApiService } from '../_services/api.service';

@Component({
    templateUrl: './fitcom-administration-administrators.component.html'
})
export class FitcomAdministrationAdministratorsComponent {

    constructor(private readonly apiService: ApiService) {
        // this.apiService.getAdministrators(
        //     () => undefined
        // );
    }

}
