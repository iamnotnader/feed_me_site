'use strict';

// Declare app level module which depends on views, and components
angular.module('commonServices', []).
factory('CommonCode', ['$location', '$anchorScroll',
    function($location, $anchorScroll) {
  var root = {};
  root.scrollToId = function(id) {
    $location.hash(id);
    $anchorScroll();
  };

  root.feedbackFormURL = 'https://docs.google.com/forms/d/1G3MB-rHYWA6NCEqvGMD_JvIFC0JcqMNvyUtfHeBsHoQ/viewform?usp=send_form';
  return root;
}]);
