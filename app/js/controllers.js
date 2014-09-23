'use strict';

/* Controllers */

var vampdControllers = angular.module('vampdControllers', []);

vampdControllers.controller('RoleListCtrl', ['$scope', 'Role',
  function($scope, Role) {
    $scope.roles = Role.query();
    $scope.orderProp = 'age';
  }]);

vampdControllers.controller('RoleDetailCtrl', ['$scope', '$routeParams', 'Role',
  function($scope, $routeParams, Role) {
    $scope.role = Role.get({roleId: $routeParams.roleId}, function(role) {
    });
  }]);
