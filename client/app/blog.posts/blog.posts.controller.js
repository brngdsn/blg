'use strict';

angular.module('cleanBlogApp')
  .controller('BlogPostsCtrl', function ($scope, $http, $stateParams) {
    $scope.format = function(d) {
      return new Date(d).getTime();
    };
    $http.get('/api/posts/'+$stateParams.id)
      .then(function(post){
        $scope.post = post.data;
      }, function(error){
        $scope.error = error;
        throw new Error(error);
      })
    ;
  });
