'use strict';

angular.module('cleanBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blog.home.posts', {
        url: '^/blog/home/posts?skip&limit',
        templateUrl: 'app/home.posts/posts.html',
        controller: 'PostsCtrl'
      });
  });
