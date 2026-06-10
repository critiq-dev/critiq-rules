import angular from 'angular';
import $ from 'jquery';

angular.module('myApp')
  .directive('myDir', function() {
    return {
      link: function(scope: any, element: any) {
        const wrapped = $(angular.element(element));
        wrapped.addClass('processed');
      },
    };
  });
