import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import cors from '@fastify/cors'
import cookie, { FastifyCookieOptions } from '@fastify/cookie'
import { authRoutes } from './routes/authRoutes'
import fastifySecureSession from '@fastify/secure-session'

export const runServer = async () => {
    const server = fastify();
    server.register(cors, {
        // put your options here
        origin: "*",
        credentials: true,
        methods: ["GET", "POST"]
    })


    await server.register(require('@fastify/swagger'))

    await server.register(require('@fastify/swagger-ui'), {
        routePrefix: '/',
        uiConfig: {
            docExpansion: 'full',
            deepLinking: false
        }
    });

    // Register routes
    await server.register(authRoutes);


    server.register(cookie, {
        secret: "my-secret", // for cookies signature
        parseOptions: {}     // options for parsing cookies
    } as FastifyCookieOptions)


    server.register(fastifySecureSession, {
        // the name of the attribute decorated on the request-object, defaults to 'session'
        sessionName: 'session',
        secret: 'qazscdxvtgrfbhchuyghtclokmnjohbon',
        salt: 'c4e87987dbcewesc',
        cookie: {
            path: '/',
            httpOnly: true // Use httpOnly for all production purposes
        }
    }
    )

    server.listen({ port: 8080 || 3000 }, (err, address) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(`Server listening at ${address}`)
    })
}