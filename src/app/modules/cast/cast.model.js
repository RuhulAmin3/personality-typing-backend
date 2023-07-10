import { model } from "mongoose";

const CastSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    characters: {
        type: Array,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

export const Cast = model("cast", CastSchema);