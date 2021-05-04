
export interface Credentials {
    email: string
    password: string
}

export interface AuthenticationResponse {
    jwt: string
    userId: string
    isFitcomAdministrator: boolean
    isStaffInFitnessCenters: any[]
    isMemberInFitnessCenters: any[]
}

export interface FitnessCenterForStaff {
    fitnessCenterTitle: string
    fitnessCenterId: string
    
    // rights -- incomplete
    canAcceptInvitations: boolean
    canWatchMembers: boolean
    canCreateTrainingsplans: boolean
}

export interface FitnessCenterForMember {
    fitnessCenterTitle: string
    fitnessCenterId: string
}

export interface JwtContent {
    userId: string
    isFitcomAdministrator: boolean

    isStaffInFitnessCenters: FitnessCenterForStaff[]
    
    isMemberInFitnessCenters: {
        fitnessCenterTitle: string
        fitnessCenterId: string
    }[]
}

export interface DatabaseUserResponse extends JwtContent {
    activationToken: string
}
