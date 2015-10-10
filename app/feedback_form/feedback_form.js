'use strict';

angular.module('foodMeApp.feedbackForm', ['ngRoute', 'commonServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/feedback', {
    template: "<div></div>",
    controller: 'feedbackFormCtrl'
  });
}])

.controller('feedbackFormCtrl', ["$scope", "CommonCode", function($scope, CommonCode) {
  window.location.href = CommonCode.feedbackFormURL;
}]);
