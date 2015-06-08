'use strict';

angular.module('cleanBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blog.about', {
        url: '^/blog/about',
        templateUrl: 'app/blog.about/blog.about.html',
        controller: 'BlogAboutCtrl'
      });
  });