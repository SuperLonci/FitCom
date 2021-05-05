
export interface FitcomAdministrator {
    id: string
    firstName: string
    lastName: string
    email: string
    birthDate: Date
    invitedBy: string
    invitedAt: Date
    invitedByName: string
}

export interface InvitedFitcomAdministrator {
    id: string
    email: string
    invitedBy: string
    invitedAt: Date
    invitedByName: string
}

export interface FitcomAdministrators {
    administrators: FitcomAdministrator[]
    invitedAdministrators: InvitedFitcomAdministrator[]
}

export interface FitcomAdministratorForPostRequest {
    email: string
}
