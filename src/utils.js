import winston from 'winston'

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: 'debug'
        }),
        new winston.transports.File({
            level: 'error',
            filename: '/.logs/errors.log'
        })
    ]
})

const loggerMiddleware = (req, res, next) => {
    logger.info(`${req.url} - ${req.method}`)
    next()
}

export { logger, loggerMiddleware }