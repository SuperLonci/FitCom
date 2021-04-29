
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FitnessCenterForAdministrationOverview, FitnessCenterForPost } from '../../../nest-server/src/fitness-centers/fitness-center.interfaces';
import { UserService } from './user.service';

@Injectable()
export class ApiService {

    constructor(
        private readonly httpClient: HttpClient,
        private readonly userService: UserService
    ) {}

    getFitnessCenters(completion: (fitnessCenters: FitnessCenterForAdministrationOverview[]) => void): void {
        this.httpClient.get<FitnessCenterForAdministrationOverview[]>('api/fitness-centers', {headers: {authorization: this.userService.jwt ?? ''}}).subscribe(
            fitnessCenters => completion(fitnessCenters)
        );
    }

    createFitnessCenter(fitnessCenter: FitnessCenterForPost, completion: () => void): void {
        this.httpClient.post('api/fitness-centers', fitnessCenter, {headers: {authorization: this.userService.jwt ?? ''}}).subscribe(
            () => completion()
        );
    }

}
