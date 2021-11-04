const mongoose = require('mongoose');

const TypeCakeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const TypeCake = mongoose.model('typecake', TypeCakeSchema);

module.exports = {
    TypeCake,
    TypeCakeSchema,
};
