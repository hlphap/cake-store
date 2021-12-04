const mongoose = require('mongoose');

const { Schema } = mongoose;

const AddressSchema = new Schema(
    {
        province: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'provinces',
        },
        district: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'districts',
        },
        ward: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'wards',
        },
    },
    {
        timestamps: false,
        versionKey: false,
    },
);

const Address = mongoose.model('address', AddressSchema);

module.exports = {
    Address,
    AddressSchema,
};
