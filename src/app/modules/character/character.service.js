const httpStatus = require("http-status");
const Character = require("./character.model");
const ApiError = require("../../../errors/ApiError");

const createCharacter = async (data) => {
    const result = await Character.create(data);
    return result;
}

const getAllCharacter = async () => {
    const result = await Character.find();
    return result;
}
const deleteCharacter = async (id) => {
    const user = await Character.findById(id);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "user does not exist");
    }
    const result = await Character.findByIdAndDelete(id);
    return result;
}
const getSingleCharacter = async (id) => {
    const user = await Character.findById(id);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "user does not exist");
    }
    const result = await Character.findById(id);
    return result;
}

const updateCharacter = async (id, data) => {
    const user = await Character.findById(id);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "user does not exist");
    }
    const result = await Character.findByIdAndUpdate(id, data, { new: true });
    return result;
}

module.exports = {
    createCharacter,
    getAllCharacter,
    deleteCharacter,
    updateCharacter,
    getSingleCharacter
}