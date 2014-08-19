'use strict';

require("../../bower_components/angular/angular")
require("../../bower_components/angular-route/angular-route")
require("../../bower_components/angular-resource/angular-resource.js")

require("./app/controllers")
require("./app/services")
require("./app/directives")
require("./app/filters")


// Declare app level module which depends on filters, and services
angular.module('app', [
  'ngResource',
  'ngRoute',
  'app.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'public/templates/underconstruction.html'});
  $routeProvider.when('/about', {templateUrl: 'public/templates/about.html'});
  $routeProvider.otherwise({redirectTo: "404"});
}]);