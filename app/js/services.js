'use strict';

/* Services */

var vampdServices = angular.module('vampdServices', ['ngResource']);

vampdServices.factory('Role', ['$resource',
  function($resource){
    return $resource('chef/roles/:roleId.json', {}, {
      query: {method:'GET', params:{roleId:'roles'}, isArray:true}
    });
  }]);
