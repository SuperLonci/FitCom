
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

    constructor(private readonly httpClient: HttpClient) {
        const fitcomTokenString = localStorage.getItem('fitcom-jwt');
        // if (fitcomTokenString) this.httpClient.post('', {});
        
        
        // const fitcomToken = JSON.parse(fitcomTokenString) as {
        //     userId: string,
        //     role: string,
        //     jwt: string
        // };
        // this.user = fitcomToken;

        // authenticate

    }

    readonly user: undefined | {
        userId: string,
        role: string,
        jwt: string
    }

    isLoading: boolean = false;
    
}
