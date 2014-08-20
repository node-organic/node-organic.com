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
])
.constant("URLS", {
  "documentationUrl":"https://github.com/VarnaLab/node-organic/tree/master/docs",
  "discussionsUrl": "https://github.com/VarnaLab/node-organic/issues"
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'public/templates/underconstruction.html'});
  $routeProvider.when('/about', {templateUrl: 'public/templates/about.html'});
  $routeProvider.when('/404', {templateUrl: 'public/templates/404.html'});
  $routeProvider.otherwise({redirectTo: "404"});
}])
