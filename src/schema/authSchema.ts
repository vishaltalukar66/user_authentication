export const authSchema = {
    description: 'The authentication endpoint  validates the authenticity of an incoming request. It often involves checking the provided authentication token against stored records. If the token is valid, the endpoint allows access to protected resources; otherwise, it denies the request.',
    response: {
        '200': {
            type: 'object',
            properties: {
                success: { type: 'boolean' },

            }
        },
        '400': {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
            }
        }
    }
}