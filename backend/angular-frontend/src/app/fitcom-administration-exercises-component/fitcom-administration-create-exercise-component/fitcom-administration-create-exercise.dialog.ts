
import { Component } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { ExerciseForPostRequest, ExerciseType } from '../../../../../nest-server/src/exercises/exercise.interfaces';

@Component({
    templateUrl: './fitcom-administration-create-exercise.dialog.html'
})
export class FitcomAdministrationCreateExerciseDialog {

    constructor(private readonly apiService: ApiService) {}

    exercise: ExerciseForPostRequest = {
        type: ExerciseType.weight,
        requiresEquipment: false,
        requiresTrainingspartner: false,
        title: '',
        description: ''
    }

    create(): void {
        this.apiService.createExercise(this.exercise, (exercise => {
            //
        }));
    }

}
