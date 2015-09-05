'use strict';

angular.module('foodMeApp.aboutPage', ['ngRoute', 'commonServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about_page', {
    templateUrl: 'about_page/about_page.html',
    controller: 'aboutPageCtrl'
  });
}])

.controller('aboutPageCtrl', ["$scope", "CommonCode", function($scope, CommonCode) {
  // Always scroll to the top of the page.
  $('.overall_container').scrollTop(0);
}]);
