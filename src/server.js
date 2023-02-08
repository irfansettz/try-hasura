const Hapi = require('@hapi/hapi');
const data = [
    {
        id: 1,
        title: "Mengerjakan Exercise",
        completed: true
    },
    {
        id: 2,
        title: "Mengerjakan Assignment",
        completed: false
    }
]
const start = async () => {
    try {
        const server = Hapi.server({
            port: 5000,
            host: 'localhost',
            routes: {
                cors: {
                    origin: ['*'],
                },
            },
        });
        server.route({
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return h.response({
                    status: 'success',
                    data: data
                }).code(200);   
            }
        });

        await server.start();
        console.log(`Server running at ${server.info.uri}`);
    } catch (error) {
        console.log(error);
    }
};

start();