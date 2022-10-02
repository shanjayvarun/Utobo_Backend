const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    user_Id : {type : String, unique : true},
    imageUrl : {type : String, required : true, unique : true},
    createdDate: { type: Date, default: Date.now },
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret.id;
    }
});

module.exports = mongoose.model('Image', schema);