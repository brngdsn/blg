'use strict';

angular.module('cleanBlogApp')
  .controller('BlogCreateCtrl', function ($scope, $http) {
    $scope.onSubmit = function() {
      $http.post('/api/posts',$scope.post)
        .success(function(success){
          $scope.success = success;
        })
        .error(function(error){
          $scope.error = error;
          throw new Error(error);
        })
      ;
   };
  });
