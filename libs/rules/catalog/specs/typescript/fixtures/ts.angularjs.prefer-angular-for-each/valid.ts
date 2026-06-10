import angular from 'angular';

angular.module('myApp')
  .controller('TestCtrl', function() {
    const items = [1, 2, 3];
    angular.forEach(items, function(item: number) {
      console.log(item);
    });
  });
