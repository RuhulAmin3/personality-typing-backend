const User = require("./user.model")
const config = require("../../../config");
const { createToken } = require("../../../shared/jwtToken");
const ApiError = require("../../../errors/ApiError");
const httpStatus = require("http-status");

const createUser = async (data) => {
    const result = await User.create(data);
    let token;
    if (result) {
        token = createToken({ id: result._id, email: result.email }, config.jwt_secret, config.jwt_expire_in)
    } else {
        throw new Error("failed to create user");
    }
    return { result, token };
}

const loginUser = async (loginData) => {
    const { email, password } = loginData || {};
    const user = await User.findOne({ email })
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "user not found");
    }

    const isPasswordMatched = await User.isPasswordMatched(user.password, password);
    if (!isPasswordMatched) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "incorrect password")
    }

    const token = createToken({ id: user._id, email: user.email }, config.jwt_secret, config.jwt_expire_in)

    return {
        user, token
    };
}

module.exports = {
    createUser,
    loginUser
}
