
import { BadRequestException } from '@nestjs/common';

export interface JwtResponse {
    jwt: string
    user: JwtResponseUser
}

export interface JwtResponseUser {
    id: string
    firstName: string
    lastName: string
    isFitcomAdministrator: boolean
    isStaffInFitnessCenters: any[]
    isMemberInFitnessCenters: any[]
}

export interface JwtContent {
    userId: string
}

export class Credentials {

    constructor(object: any) {
        if (!('email' in object) || object.email === '') {
            console.log('invalid email for credentials');
            throw new BadRequestException;
        }
        this.email = object.email;
        
        if (!('password' in object) || object.password === '') {
            console.log('invalid password for credentials');
            throw new BadRequestException;
        }
        this.password = object.password;
    }

    email: string;
    password: string;

}

export interface UserProfile {
    firstName: string
    lastName: string
    birthDate: Date
    email: string
}

export class EditPasswordRequest {

    constructor(object: any) {
        if (!('password' in object) || object.password === '') {
            console.log('invalid password for credentials');
            throw new BadRequestException;
        }
        this.password = object.password;
    }

    password: string;

}
