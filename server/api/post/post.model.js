'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  subTitle: String,
  author: String,
  created: { type: Date, default: Date.now },
  image: {
    src: Buffer,
    type: String
  },
  images: [{
    src: Buffer,
    type: String
  }],
  body: String
});

PostSchema
  .virtual('preview')
  .get(function() {
    return {
      'title': this.title,
      'subTitle': this.subTitle,
      'author': this.author,
      'created': this.created
    };
  });


module.exports = mongoose.model('Post', PostSchema);
