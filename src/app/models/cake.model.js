const mongoose = require('mongoose');
const { TypeCakeSchema } = require('./type-cake.model');

const CakeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        typeCake: {
            type: TypeCakeSchema,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const Cake = mongoose.model('cakes', CakeSchema);

module.exports = {
    Cake,
    CakeSchema,
};
