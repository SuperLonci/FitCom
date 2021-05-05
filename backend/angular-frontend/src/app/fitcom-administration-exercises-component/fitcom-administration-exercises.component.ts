
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../_services/api.service';
import { FitcomAdministrationCreateExerciseDialog } from './fitcom-administration-create-exercise-component/fitcom-administration-create-exercise.dialog';
import { FitcomAdministrationExerciseDetailDialog } from './fitcom-administration-exercises-detail-dialog/fitcom-administration-exercises-detail.dialog';

@Component({
    templateUrl: './fitcom-administration-exercises.component.html'
})
export class FitcomAdministrationExercisesComponent {

    constructor(
        private readonly apiService: ApiService,
        private readonly dialog: MatDialog
    ) {
        this.apiService.getExercises(
            (exercises) => this.exercises = exercises
        );
    }

    exercises: any[] = [];

    columns = [
        {
            objectKey: 'title',
            title: 'Name'
        },
        {
            objectKey: 'type',
            title: 'Typ der Übung'
        }
    ];

    didSelectExercise(id: string): void {
        this.dialog.open(FitcomAdministrationExerciseDetailDialog, {data: id});
    }

    createExercise(): void {
        this.dialog.open(FitcomAdministrationCreateExerciseDialog);
    }

}
