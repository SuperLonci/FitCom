
import { Component } from '@angular/core';
import { APIService } from '../_services/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    
    title: string = 'Titel';
    
    constructor(public apiService: APIService) { }

}
