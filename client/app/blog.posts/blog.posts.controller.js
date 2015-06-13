'use strict';

angular.module('cleanBlogApp')
  .controller('BlogPostsCtrl', function ($scope, $http, $stateParams) {
    $http.get('/api/posts/'+$stateParams.id)
      .success(function(post){
        $scope.post = post;
      })
      .error(function(error){
        $scope.error = error;
        throw new Error(error);
      })
    ;
  });
