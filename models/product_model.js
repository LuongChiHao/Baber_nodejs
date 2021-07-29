const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    id: {type: ObjectId},
    name: {type: String},
    price: {type: Number},
    des: {type: String},
    img: {type: String},
    brand: {type: Schema.Types.ObjectId, ref: 'brand'}
})

module.exports = mongoose.model('product', productSchema)