const mongoose = require('mongoose');

const { Schema } = mongoose;

const DistrictSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
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

const District = mongoose.model('districts', DistrictSchema);

module.exports = {
    DistrictSchema,
    District,
};
