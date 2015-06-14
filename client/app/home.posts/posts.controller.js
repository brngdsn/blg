'use strict';

angular.module('cleanBlogApp')
  .controller('PostsCtrl', function ($scope, $http, $stateParams) {
    $scope.busy = true;
    $scope.format = function(d) {
      return new Date(d).getTime();
    };
    if ($stateParams.skip === 'undefined' || !($stateParams.skip > 0)) {
      $scope.skip = 0;
    } else {
      $scope.skip = $stateParams.skip;
    }
    if ($stateParams.limit === 'undefined' || !($stateParams.limit > 0)) {
      $scope.limit = 3;
    } else {
      $scope.limit = $stateParams.limit;
    }
    $http.get('/api/posts?skip='+$scope.skip+'&limit='+$scope.limit)
      .success(function(posts){
        $scope.posts = posts;
        $scope.busy = false;
        $scope.error = false;
        $scope.skip = parseInt($scope.skip) + 3;
      })
      .error(function(data, status, headers, config){
        $scope.busy = false;
        $scope.error = true;
        $scope.status = status;
        $scope.headers = headers;
        $scope.config = config;
        throw new Error(config);
      })
    ;
  });
