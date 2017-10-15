'use strict';

angular.module('cleanBlogApp')
  .controller('BlogCreateCtrl', function ($scope, $http, $state) {
    $scope.onSubmit = function() {
      $http.post('/api/posts',$scope.post)
        .then(function(success){
          $scope.success = success.data;
          $state.go('blog.posts',{ id: success.data._id })
        }, function(error){
          $scope.error = error;
          throw new Error(error);
        })
      ;
   };
  });
