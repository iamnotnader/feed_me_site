'use strict';

angular.module('foodMeApp.contactPage', ['ngRoute', 'commonServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact_page', {
    templateUrl: 'contact_page/contact_page.html',
    controller: 'contactPageCtrl'
  });
}])

.controller('contactPageCtrl', ["$scope", "CommonCode", function($scope, CommonCode) {
  // Always scroll to the top of the page.
  $('.overall_container').scrollTop(0);
}]);
