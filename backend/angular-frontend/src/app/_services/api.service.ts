
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { AppService } from './app.service';
import { finalize } from 'rxjs/operators';
import { Exercise, ExerciseForPostRequest } from '../../../../nest-server/src/exercises/exercise.interfaces';
import { FitcomAdministratorForPostRequest, FitcomAdministrators } from '../../../../nest-server/src/fitcom-administrators/fitcom-administrator.interfaces';

@Injectable()
export class ApiService {

    constructor(
        private readonly httpClient: HttpClient,
        private readonly userService: UserService,
        private readonly appService: AppService
    ) {}

    getAdministrators(completion: (administrators: FitcomAdministrators) => void): void {
        this.appService.isLoading = true;
        this.httpClient.get<FitcomAdministrators>('api/fitcom-administrators', {headers: {authorization: this.userService.user?.jwt ?? ''}}).pipe(
            finalize(() => this.appService.isLoading = false)
        ).subscribe(
            (administrators => completion(administrators)),
            () => console.log('Administratoren konnten nicht geladen werden.')
        );
    }

    inviteFitcomAdministrator(administrator: FitcomAdministratorForPostRequest): void {
        this.httpClient.post('api/fitcom-administrators', administrator, {headers: {authorization: this.userService.user?.jwt ?? ''}}).subscribe(
            (res) => console.log(res),
            () => console.log('Administrator konnte nicht eingeladen werden.')
        );
    }

    getExercises(completion: (exercises: any) => void): void {
        this.appService.isLoading = true;
        this.httpClient.get('api/exercises', {headers: {authorization: this.userService.user?.jwt ?? ''}}).pipe(
            finalize(() => this.appService.isLoading = false)
        ).subscribe(
            (exercises => completion(exercises)),
            () => console.log('Trainingsübungen konnten nicht geladen werden.')
        );
    }

    createExercise(exercise: ExerciseForPostRequest, completion: (exercise: Exercise) => void): void {
        this.httpClient.post<Exercise>('api/exercises', exercise, {headers: {authorization: this.userService.user?.jwt ?? ''}}).subscribe(
            (exercise: Exercise) => completion(exercise),
            (() => console.log('Trainingsübung konnte nicht angelegt werden.'))
        );
    }

    getFitnessCenters(completion: (fitnessCenters: any) => void): void {
        this.appService.isLoading = true;
        this.httpClient.get('api/fitness-centers', {headers: {authorization: this.userService.user?.jwt ?? ''}}).pipe(
            finalize(() => this.appService.isLoading = false)
        ).subscribe(
            (fitnessCenters => completion(fitnessCenters)),
            () => console.log('Fitnessstudios konnten nicht geladen werden.')
        );
    }




    

    // getOwnUserProfile(completion: (user: User) => void): void {
    //     this.httpClient.get<User>('api/users/ownUserProfile', {headers: {authorization: this.userService.jwt ?? ''}}).subscribe(
    //         (user: User) => completion(user),
    //         () => console.log('Benutzerprofil konnte nicht geladen werden')
    //     );
    // }

    // getFitnessCenters(completion: (fitnessCenters: FitnessCenterForAdministrationOverview[]) => void): void {
    //     this.httpClient.get<FitnessCenterForAdministrationOverview[]>('api/fitness-centers', {headers: {authorization: this.userService.jwt ?? ''}}).subscribe(
    //         fitnessCenters => completion(fitnessCenters)
    //     );
    // }

    // createFitnessCenter(fitnessCenter: FitnessCenterForPost, completion: () => void): void {
    //     this.httpClient.post('api/fitness-centers', fitnessCenter, {headers: {authorization: this.userService.jwt ?? ''}}).subscribe(
    //         () => completion()
    //     );
    // }


    // createAdministrator(email: string, completion: (userId: string) => void): void {
    //     this.httpClient.post<CreateUserResponse>(`api/users/fitcomAdministrator/${email}`, {}, {headers: {authorization: this.userService.jwt ?? ''}}).subscribe(
    //         response => completion(response.userId)
    //     );
    // }

    // getFitcomAdministrator(userId: string, completion: (user: any) => void): void {
    //     this.httpClient.get<Administrator>(`api/administrators/${userId}`, {headers: {authorization: this.userService.jwt ?? ''}}).subscribe(
    //         administrator => completion(administrator)
    //     );
    // }

}
