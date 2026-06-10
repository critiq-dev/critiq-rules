import angular from 'angular';

angular.module('myApp')
  .controller('TypeCtrl', function() {
    function process(val: unknown) {
      if (typeof val === 'string') {
        console.log(val.toUpperCase());
      }
    }
  });
