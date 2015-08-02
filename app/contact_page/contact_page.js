'use strict';

angular.module('foodMeApp.contactPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact_page', {
    templateUrl: 'contact_page/contact_page.html',
    controller: 'contactPageCtrl'
  });
}])

.controller('contactPageCtrl', ["$scope", function($scope) {
}]);
