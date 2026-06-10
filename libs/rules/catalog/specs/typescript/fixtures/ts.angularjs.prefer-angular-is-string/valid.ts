import angular from 'angular';

angular.module('myApp')
  .controller('TypeCtrl', function() {
    function process(val: unknown) {
      if (angular.isString(val)) {
        console.log(val.toUpperCase());
      }
    }
  });
