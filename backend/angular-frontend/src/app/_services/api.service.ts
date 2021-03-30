
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class APIService {
    
    constructor(private httpClient: HttpClient) { }

    // example(): Observable<any> {
    //     return this.httpClient.get('/test');
    // }

}
