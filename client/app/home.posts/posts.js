'use strict';

angular.module('cleanBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blog.home.posts', {
        url: '^/blog/home/posts',
        templateUrl: 'app/home.posts/posts.html',
        controller: 'PostsCtrl'
      });
  });
