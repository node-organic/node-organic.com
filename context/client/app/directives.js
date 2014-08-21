'use strict';

/* Directives */
angular.module('app.directives', [])
  .directive('scrollOnFocus', function($window) {
    return {
      link: function(scope, $el) {
        $el.on('focus', function() {
          $window.scrollTo(0,$el[0].getBoundingClientRect().top+50)
        })
      }
    }
  })