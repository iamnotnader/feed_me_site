'use strict';

// Declare app level module which depends on views, and components
angular.module('foodMeApp', [
  'ngRoute',
  'foodMeApp.landingPage',
  'foodMeApp.aboutPage',
  'foodMeApp.contactPage',
  'foodMeApp.termsPage',
  'foodMeApp.privacyPage',
]).
config(['$routeProvider',
    function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/landing_page'});
}]);
