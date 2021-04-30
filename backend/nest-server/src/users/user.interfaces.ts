
export interface User {
    id: string
    role: FitcomUserRole
    gender: string
    firstName: string
    lastName: string
    birthDate: Date
    email: string
    invitationPending: boolean
    createdAt: Date
    creatorId: string
    creator: string
}





export interface Credentials {
    email: string
    password: string
}

export interface JwtContent {
    userId: string
    userRole: FitcomUserRole
}

export interface AuhtenticationResponse {
    jwt: string
}

export interface CreateUserResponse {
    userId: string
}

export interface UserAuthenticationDatabaseResult {
    id: string
    role: FitcomUserRole
    activationToken: string
}

export enum FitcomUserRole {
    fitcomAdministrator = 'fitcomAdministrator',
    fitnessCenterAdministrator = 'fitnessCenterAdministrator',
    fitnessCenterTrainer = 'fitnessCenterTrainer'
}

export interface UserForRegistration {
    firstName: string
    lastName: string
    gender: string
    birthDate: string
    password: string
}
