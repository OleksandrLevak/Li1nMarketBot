'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AtbProductSchema = new Schema({
  uuid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  sale: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  oldPrice: {
    type: Float32Array,
  },
  imgUrl: {
    type: String,
  },
  shopUrl: {
    type: String,
  },
});

mongoose.model('atb-products', AtbProductSchema);