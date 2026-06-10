import angular from 'angular';

angular.module('myApp')
  .directive('myDirective', function() {
    return {
      template: '<div>Hello</div>',
      replace: true,
      scope: {},
      link: function(scope: any, element: any) {
        element.text('Linked');
      },
    };
  });
