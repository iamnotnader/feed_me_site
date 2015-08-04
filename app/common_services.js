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
  return root;
}]);
