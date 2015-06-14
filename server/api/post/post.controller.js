'use strict';

var _ = require('lodash');
var Post = require('./post.model');

// Get list of posts
exports.index = function(req, res) {
  var skip = 0;
  var limit = 3;
  if (req.query.skip === 'undefined') {
    skip = 0;
  } else {
    skip = req.query.skip;
  }
  
  if (req.query.limit === 'undefined') {
    limit = 3;
  } else {
    limit = req.query.limit;
  }


  Post.find({}, {}, { skip: skip, limit: limit, sort: { 'created': -1 } }, function (err, posts) {
    if(err) { return handleError(res, err); }
    //posts.forEach(function(){console.log(arguments[0])})
    return res.json(200, posts);
  });
};

// Get a single post
exports.show = function(req, res) {
  Post.findById(req.params.id, function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    return res.json(post);
  });
};

// Creates a new post in the DB.
exports.create = function(req, res) {
  req.body.author = req.user.name;
  Post.create(req.body, function(err, post) {
    if(err) { return handleError(res, err); }
    return res.json(201, post);
  });
};

// Updates an existing post in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Post.findById(req.params.id, function (err, post) {
    if (err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    var updated = _.merge(post, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, post);
    });
  });
};

// Deletes a post from the DB.
exports.destroy = function(req, res) {
  Post.findById(req.params.id, function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    post.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
