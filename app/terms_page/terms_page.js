'use strict';

angular.module('foodMeApp.termsPage', ['ngRoute', 'commonServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/terms_page', {
    templateUrl: 'terms_page/terms_page.html',
    controller: 'termsPageCtrl'
  });
}])

.controller('termsPageCtrl', ["$scope", "CommonCode", function($scope, CommonCode) {
  // Always scroll to the top of the page.
  CommonCode.scrollToId('topOfPage');
}]);
