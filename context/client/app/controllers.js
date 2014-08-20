'use strict';

/* Controllers */

angular.module('app.controllers', [])
  .controller('app', function($scope, URLS) {
    $scope.URLS = URLS  
  })