export const signupSchema = {
    description: 'Sign up endpoint, handles the registration or signup process for new users. This endpoint typically receives user-provided information, such as a username, email, full name, password and confirm password and creates a new user account in the system.',
    body: {
        type: 'object',
        properties: {
            email: { type: 'string' },
            fullname: { type: 'string' },
            password: { type: 'string' },
            cpassword: { type: 'string' },


        },
        required: ['email', 'password', 'cpassword', 'fullname']
    },
    response: {
        '200': {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
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