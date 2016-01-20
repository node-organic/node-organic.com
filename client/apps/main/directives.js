'use strict';

/* Directives */
angular.module('app.directives', [])
  .directive('scrollOnFocus', function($window) {
    return {
      link: function(scope, $el) {
        $el.on('focus', function() {
          $window.scrollTo(0, $el.prop('offsetTop'))
        })
      }
    }
  })
  .directive('blurOnEsc', function($window) {
    return {
      link: function(scope, $el) {
        $el.on('keyup', function(e) {
          if(e.keyCode == 27)
            $el[0].blur()
        })
      }
    }
  })