'use strict';

angular.module('foodMeApp.privacyPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/privacy_page', {
    templateUrl: 'privacy_page/privacy_page.html',
    controller: 'privacyPageCtrl'
  });
}])

.controller('privacyPageCtrl', ["$scope", function($scope) {
}]);
