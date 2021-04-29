
export interface AdministratorForAdministrationOverview {
    id: string
    firstName: string
    lastName: string
}

export interface FitcomAdministratorsOverview {
    administrators: AdministratorForAdministrationOverview[]
    pendingAdministrators: {
        id: string
        email: string
    }[]
}



export interface Administrator {
    id: string
    gender: string
    firstName: string
    lastName: string
    birthDate: string
    email: string
}
