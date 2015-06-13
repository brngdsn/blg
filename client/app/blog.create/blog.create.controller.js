'use strict';

angular.module('cleanBlogApp')
  .controller('BlogCreateCtrl', function ($scope, $http, $state) {
    $scope.onSubmit = function() {
      $http.post('/api/posts',$scope.post)
        .success(function(success){
          $scope.success = success;
          $state.go('blog.posts',{ id: success._id })
        })
        .error(function(error){
          $scope.error = error;
          throw new Error(error);
        })
      ;
   };
  });
