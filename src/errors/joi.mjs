import logger from '../core/logger.mjs'

export default (err, req, res, next) => {
    if (err.status === 400 && err.statusText === 'Bad Request') {
        logger.error(err)
        const payload = {
            status: err.status,
            message: err.statusText,
            errors: err.errors
        }
        return res.status(payload.status).json(payload)
    }
    next(err)
}
