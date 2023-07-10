const { model, Schema } = require("mongoose");

const CharacterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    enneagramtype: {
        type: Number,
        required: true
    },
    enneagramwing: {
        type: Number,
        required: false
    },
    enneagramvariant: {
        type: String,
        required: false
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

const Character = model("character", CharacterSchema);

module.exports = Character;