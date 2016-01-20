'use strict';

/* Controllers */

angular.module('app.controllers', [])
  .controller('app', function($scope, URLS) {
    $scope.URLS = URLS  
  })
  .controller("modules", function($scope, Modules){
    $scope.modules = Modules.query()
  })
  .controller("menu", function($scope, $location, URLS) {
    $scope.URLS = URLS;
    $scope.currentPath = "#"+$location.path();
    $scope.$on('$routeChangeSuccess', function () {
      $scope.currentPath = "#"+$location.path()
    });
  })