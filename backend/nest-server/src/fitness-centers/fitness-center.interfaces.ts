
import { StaffForInitialPost } from './../staff/staff.interfaces';

export interface FitnessCenterForPost {
    title: string
    country: string
    
    city: string
    postCode: string
    street: string
    streetNumber: string

    email: string
    phoneNumber: string
    faxNumber: string

    owner: StaffForInitialPost
}

export interface FitnessCenter {
    id: string
    title: string
    ownerId: string
    createdAt: string

    country: string
    city: string
    postCode: string
    street: string
    streetNumber: string

    email: string
    phoneNumber: string
    faxNumber: string
}
