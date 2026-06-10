import angular from 'angular';

describe('MyService', function() {
  let $http: any;
  let $q: any;

  beforeEach(angular.mock.inject(function(_$http_: any, _$q_: any) {
    $http = _$http_;
    $q = _$q_;
    if (someCondition) {
      throw new Error('Unexpected state');
    }
  }));
});
