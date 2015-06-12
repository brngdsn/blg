'use strict';

angular.module('cleanBlogApp')
  .controller('BlogCreateCtrl', function ($scope) {
   $scope.onSubmit = function() {
    console.log($scope.image)
   };
  });
