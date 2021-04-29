
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    constructor(private readonly httpClient: HttpClient) {}

    getFitnessCenters(): void {
        this.httpClient.get('api/fitness-centers').subscribe(
            res => console.log(res)
        );
    }

}
