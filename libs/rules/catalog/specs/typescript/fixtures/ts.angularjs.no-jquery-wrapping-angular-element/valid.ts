import angular from 'angular';

angular.module('myApp')
  .directive('myDir', function() {
    return {
      link: function(scope: any, element: any) {
        const el = angular.element(element);
        el.addClass('processed');
        el.text('Updated');
      },
    };
  });
