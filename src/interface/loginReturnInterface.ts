export interface loginReturnInterface {
    success: boolean,
    email?: string,
    dbId?: string,
    message: string
    jwtCookie?: string,
}