
export interface FitnessCenterForAdministrationOverview {
    id: string
    title: string
    city: string
    owner: string
    ownerId: string
    isPending: boolean
}

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

    ownerEmail: string
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
