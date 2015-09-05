'use strict';

angular.module('foodMeApp.landingPage', ['ngRoute', 'commonServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/landing_page', {
    templateUrl: 'landing_page/landing_page.html',
    controller: 'LandingPageCtrl'
  });
}])

.controller('LandingPageCtrl', ["$scope", "$interval", "CommonCode", function($scope, $interval, CommonCode) {
  // Encapsulate the eyebrow-raising logic.
  var init_eyebrows = function(scope_arg, interval_arg) {
    var normalBurgerSrc = "landing_page/normal_burger.png";
    var happyBurgerSrc = "landing_page/happy_burger.png";
    var eyebrowPromise;
    var eyebrowRaiseInterval = 1500;
    scope_arg.burgerImageSrc = normalBurgerSrc;
    scope_arg.enterAppButton = function() {
      interval_arg.cancel(eyebrowPromise);
      eyebrowPromise = undefined;
      is_normal = false;
      scope_arg.burgerImageSrc = happyBurgerSrc;
    };
    scope_arg.leaveAppButton = function() {
      is_normal = true;
      eyebrowPromise = interval_arg(eyebrowRaiser, eyebrowRaiseInterval);
      scope_arg.burgerImageSrc = normalBurgerSrc;
    };

    var is_normal = true;
    var eyebrowRaiser = function() {
      if (is_normal) {
        scope_arg.burgerImageSrc = happyBurgerSrc;
      } else {
        scope_arg.burgerImageSrc = normalBurgerSrc;
      }
      is_normal = !is_normal;
    };
    
    eyebrowPromise = interval_arg(eyebrowRaiser, eyebrowRaiseInterval);
    scope_arg.stopEyebrowRaise = function() {
      if (angular.isDefined(eyebrowPromise)) {
        interval_arg.cancel(eyebrowPromise);
        eyebrowPromise = undefined;
      }
    };
    scope_arg.$on('$destroy', function() {
      // Make sure that the interval is destroyed too
      scope_arg.stopEyebrowRaise();
    });
  };

  // Actual init.
  init_eyebrows($scope, $interval);
  $('.overall_container').scrollTop(0);
}]);
