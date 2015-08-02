'use strict';

angular.module('foodMeApp.aboutPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about_page', {
    templateUrl: 'about_page/about_page.html',
    controller: 'aboutPageCtrl'
  });
}])

.controller('aboutPageCtrl', ["$scope", function($scope) {
}]);
