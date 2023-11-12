export const loginSchema = {
    description: 'The login endpoint handles user authentication by verifying credentials. Users typically provide their registered email and password. Upon successful verification, the endpoint generates an authentication session token, granting access to protected resources. verify it by hitting the /auth endpoint',
    body: {
        type: 'object',
        properties: {
            email: { type: 'string' },
            password: { type: 'string' },

        },
        required: ['email', 'password']
    },
    response: {
        '200': {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                email: { type: 'string' },
                dbId: { type: 'string' },
                jwtCookie: { type: 'string' }
            }
        },
        '400': {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        }
    }
}