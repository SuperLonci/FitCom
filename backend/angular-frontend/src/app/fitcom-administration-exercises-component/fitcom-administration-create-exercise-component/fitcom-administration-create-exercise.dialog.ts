
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/_services/api.service';
import { ExerciseForPostRequest, ExerciseType } from '../../../../../nest-server/src/exercises/exercise.interfaces';

@Component({
    templateUrl: './fitcom-administration-create-exercise.dialog.html'
})
export class FitcomAdministrationCreateExerciseDialog {

    constructor(
        private readonly apiService: ApiService,
        private readonly dialogReference: MatDialogRef<FitcomAdministrationCreateExerciseDialog>
    ) {}

    exercise: ExerciseForPostRequest = {
        type: ExerciseType.weight,
        requiresEquipment: false,
        requiresTrainingspartner: false,
        title: '',
        description: ''
    }

    create(): void {
        this.apiService.createExercise(this.exercise, (exercise => {
            if (exercise) this.dialogReference.close(exercise);
        }));
    }

}
