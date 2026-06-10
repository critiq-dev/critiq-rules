import angular from 'angular';

angular.module('myApp')
  .controller('TestCtrl', function() {
    const items = [1, 2, 3];
    items.forEach(function(item: number) {
      console.log(item);
    });
  });
