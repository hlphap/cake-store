const mongoose = require('mongoose');

const { Schema } = mongoose;

const WardSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        district: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'districts',
        },
        province: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'provinces',
        },
    },
    {
        timestamps: false,
        versionKey: false,
    },
);

const Ward = mongoose.model('wards', WardSchema);

module.exports = {
    WardSchema,
    Ward,
};
