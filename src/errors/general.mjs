import logger from '../core/logger.mjs'

export default (err, req, res, next) => {
    logger.error(err)
    const payload = {
        status: err.status || 500,
        message: err.message,
        errors: {}
    }
    return res.status(payload.status).json(payload)
}
