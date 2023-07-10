const { model } = require("mongoose");

const RelationshipSchema = new Schema({
    type1: {
        type: Number,
        required: true
    },
    type2: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

const Relationship = model("relationship", RelationshipSchema);