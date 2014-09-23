'use strict';

/* App Module */

var vampdApp = angular.module('vampdApp', [
  'ngRoute',
  'vampdAnimations',

  'vampdControllers',
  'vampdFilters',
  'vampdServices'
]);

vampdApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/roles', {
        templateUrl: 'app/partials/role-list.html?id=' + new Date().getTime(),
        controller: 'RoleListCtrl'
      }).
      when('/roles/:roleId', {
        templateUrl: 'app/partials/role-detail.html?id=' + new Date().getTime(),
        controller: 'RoleDetailCtrl'
      }).
      otherwise({
        redirectTo: '/roles'
      });
  }]);

vampdApp.run(function($rootScope, $templateCache) {
  $rootScope.$on('$routeChangeStart', function(event, next, current) {
      if (typeof(current) !== 'undefined'){
          $templateCache.remove(current.templateUrl);
      }
  });
});
