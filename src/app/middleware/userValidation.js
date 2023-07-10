const httpStatus = require("http-status");
const ApiError = require("../../errors/ApiError");
const { verifyToken } = require("../../shared/jwtToken");
const config = require("../../config");

const userValidation = () => {
    return async (req, res, next) => {
        try {
            const token = req.headers.authorization;
            if (!token) {
                throw new ApiError(httpStatus.UNAUTHORIZED, "you are unauthorized user")
            }
            let verifiedToken = verifyToken(token, config.jwt_secret);
            if (!verifiedToken) {
                throw new ApiError(httpStatus.FORBIDDEN, "you are for bidden user");
            }
            req.user = verifiedToken;
            next()
        } catch (err) {
            next(err);
        }
    }
}

module.exports = userValidation;