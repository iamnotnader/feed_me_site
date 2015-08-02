'use strict';

angular.module('foodMeApp.termsPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/terms_page', {
    templateUrl: 'terms_page/terms_page.html',
    controller: 'termsPageCtrl'
  });
}])

.controller('termsPageCtrl', ["$scope", function($scope) {
}]);
