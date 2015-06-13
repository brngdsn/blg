'use strict';

angular.module('cleanBlogApp')
  .controller('BlogPostsCtrl', function ($scope, $http) {
    $http.get('/api/posts')
      .success(function(posts){
        console.log(posts)
        $scope.post = posts[0]
      })
      .error(function(error){
        $scope.error = error;
        throw new Error(error);
      })
  });
