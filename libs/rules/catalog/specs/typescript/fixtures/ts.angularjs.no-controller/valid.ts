import angular from 'angular';

interface MyBindings {
  items: unknown[];
}

angular.module('myApp', [])
  .component('myList', {
    bindings: {
      items: '<',
    },
    template: '<div ng-repeat="item in $ctrl.items">{{item}}</div>',
    controller: function() {
      this.$onInit = function() {
        console.log('component initialized');
      };
    },
  } as MyBindings);
