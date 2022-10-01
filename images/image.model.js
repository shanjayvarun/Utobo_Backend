const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId : {type : String, required : true},
    imageUrl : {type : String, required : true},
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
});

module.exports = mongoose.model('Image', schema);