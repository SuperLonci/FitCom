
import { Component } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
    templateUrl: './profile.dialog.html'
})
export class ProfileDialog {

    constructor(private readonly apiService: ApiService) {
        this.apiService.getProfile();
    }

    user: any | undefined;

}
