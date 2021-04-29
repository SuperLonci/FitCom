
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuhtenticationResponse, Credentials } from '../../../nest-server/src/users/user.interfaces';

@Injectable()
export class ApiService {

    constructor(private readonly httpClient: HttpClient) {}

    authorize(jwt: string, completion: (jwt: string) => void): void {
        this.httpClient.post<AuhtenticationResponse>('api/users/authorize', {}, {headers: 
            {authorization: jwt}
        }).subscribe(
            (response: AuhtenticationResponse) => completion(response.jwt)
        );
    }

    authenticate(user: Credentials, completion: (jwt: string) => void): void {
        this.httpClient.post<AuhtenticationResponse>('api/users/auhtenticate', user).subscribe(
            (response: AuhtenticationResponse) => completion(response.jwt)
        );
    }

    getFitnessCenterOverview() {
        this.httpClient.get('api/fitness-centers').subscribe(
            res => console.log(res)
        );
    }

}
