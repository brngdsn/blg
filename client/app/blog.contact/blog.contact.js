'use strict';

angular.module('cleanBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blog.contact', {
        url: '^/blog/contact',
        templateUrl: 'app/blog.contact/blog.contact.html',
        controller: 'BlogContactCtrl'
      });
  });