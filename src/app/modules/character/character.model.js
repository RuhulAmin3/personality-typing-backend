const { model } = require("mongoose");

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
        type: Number,
        required: false
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

export const Character = model("character", CharacterSchema);