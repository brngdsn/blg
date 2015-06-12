'use strict';

angular.module('cleanBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blog.create', {
        url: '^/blog/create',
        templateUrl: 'app/blog.create/blog.create.html',
        controller: 'BlogCreateCtrl'
      });
  });
