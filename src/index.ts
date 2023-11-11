import fastify, { FastifyReply } from 'fastify'
import { logProduct } from './utils/getProduct';


const server = fastify()

server.get('/ping', async () => {
    const data = await logProduct();

    return (data);
})

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})