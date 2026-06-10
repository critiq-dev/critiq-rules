import angular from 'angular';

angular.module('myApp')
  .service('DataService', function($http: any) {
    this.getItems = function() {
      $http.get('/api/items')
        .success(function(data: any) {
          console.log('Got items:', data);
        })
        .error(function(err: any) {
          console.error('Failed:', err);
        });
    };
  });
