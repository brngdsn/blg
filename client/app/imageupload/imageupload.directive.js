'use strict';

angular.module('cleanBlogApp')
  .directive('imageupload', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

    element.bind('change',function(event){
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (levent) {
          scope.post = scope.post || {};
          scope.post.image = levent.target.result,
          scope.$apply();
        };
        reader.readAsDataURL(file);
      })
    ;

      }
    };
  });
