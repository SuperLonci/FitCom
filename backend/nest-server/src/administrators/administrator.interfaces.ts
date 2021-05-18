
export interface Administrator{
    id: string
    firstName: string
    lastName: string
    email: string
}

export interface AdministratorAuthenticationResponse {
    jwt: string
    user: Administrator
}
