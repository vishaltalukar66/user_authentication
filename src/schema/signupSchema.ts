export const signupSchema = {
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