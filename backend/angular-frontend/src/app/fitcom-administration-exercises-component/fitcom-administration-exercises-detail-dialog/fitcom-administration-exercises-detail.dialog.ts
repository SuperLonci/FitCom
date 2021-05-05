
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Exercise } from '../../../../../nest-server/src/exercises/exercise.interfaces';

@Component({
    templateUrl: './fitcom-administration-exercises-detail.dialog.html'
})
export class FitcomAdministrationExerciseDetailDialog {

    constructor(@Inject(MAT_DIALOG_DATA) public readonly exercise: Exercise) {
        this.editableExercise = exercise;
    }

    editableExercise: Exercise;

}
