'use strict';

angular.module('cleanBlogApp')
  .controller('PostsCtrl', function ($scope, $http) {
    $http.get('/api/posts')
      .success(function(posts){
        $scope.posts = posts;
        $scope.error = false;
      })
      .error(function(error){
        $scope.error = error;
        throw new Error(error);
      })
    ;
  });
