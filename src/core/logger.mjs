import bunyan from 'bunyan'

const logger = bunyan.createLogger({
    name: 'api',
    src: true,
    streams: [
        {
            level: 'info',
            stream: process.stdout
        },
        {
            level: 'info',
            path: './app.log'
        }
    ]
})

export default logger
