
import { Component } from '@angular/core';
import { ApiService } from '../_services/api.service';

@Component({
    templateUrl: './fitcom-administration-exercises.component.html'
})
export class FitcomAdministrationExercisesComponent {

    constructor(private readonly apiService: ApiService) {
        this.apiService.getExercises(
            (exercises) => this.exercises = exercises
        );
    }

    exercises: any[] = [];

}
