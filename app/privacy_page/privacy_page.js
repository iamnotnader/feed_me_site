'use strict';

angular.module('foodMeApp.privacyPage', ['ngRoute', 'commonServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/privacy_page', {
    templateUrl: 'privacy_page/privacy_page.html',
    controller: 'privacyPageCtrl'
  });
}])

.controller('privacyPageCtrl', ["$scope", "CommonCode", function($scope, CommonCode) {
  // Always scroll to the top of the page.
  CommonCode.scrollToId('topOfPage');
}]);
