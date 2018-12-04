import logger from '../core/logger.mjs'

export default (err, req, res, next) => {
    if (err.name === 'MongoError' && err.code === 11000) {
        logger.error(err)
        const payload = {
            status: 400,
            message: err.message,
            errors: {}
        }
        return res.status(payload.status).json(payload)
    }
    next(err)
}
