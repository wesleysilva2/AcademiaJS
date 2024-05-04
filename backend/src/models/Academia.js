const mongoose = require('mongoose');
const PointOnMapSchema = require('./utils/PointOnMapSchema');

const AcademiaSchema = new mongoose.Schema({
    name: String,
    img_academy_url: String,
    user_list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    location:{
        type: PointOnMapSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Academias', AcademiaSchema);