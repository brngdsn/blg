'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  subTitle: String,
  author: String,
  created: { type: Date, default: Date.now },
  image: String,
  images: [String],
  body: String
});

/*PostSchema
  .virtual('imageSrc')
  .get(function(){
    return {
      'image': this.image.binary.buffer.toString()
    };
  })*/

/*PostSchema
  .virtual('image')
  .get(function(){
    return {
      'image': this.image.data.toString()
    };
  })
;*/

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
