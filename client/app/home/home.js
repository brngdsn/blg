'use strict';

angular.module('cleanBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blog.home', {
        url: '^/blog/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      });
  });
