
export interface Administrator{
    id: string
    firstName: string
    lastName: string
    email: string
}

export interface AdministratorAuthenticationResponse {
    jwt: string
    userId: string
    role: FitcomRole
}

export enum FitcomRole {
    fitcomAdministrator = 'fitcomAdministrator',
    fitnessCenterAdministrator = 'fitnessCenterAdministrator',
    fitnessCenterTrainer = 'fitnessCenterTrainer'
}
