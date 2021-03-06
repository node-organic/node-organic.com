'use strict';

require("../../../bower_components/angular/angular")
require("../../../bower_components/angular-route/angular-route")
require("../../../bower_components/angular-resource/angular-resource.js")

require("./controllers")
require("./services")
require("./directives")
require("./filters")


// Declare app level module which depends on filters, and services
angular.module('app', [
  'ngResource',
  'ngRoute',
  'app.controllers',
  'app.services',
  'app.directives'
])
.constant("URLS", {
  "documentation":"https://github.com/VarnaLab/node-organic",
  "discussions": "https://github.com/VarnaLab/node-organic/issues",
  "modules": "#/modules",
  "home": "#/"
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'public/release/main/templates/about.html'});
  $routeProvider.when('/modules', {templateUrl: 'public/release/main/templates/modules.html'});
  $routeProvider.when('/404', {templateUrl: 'public/release/main/templates/404.html'});
  $routeProvider.otherwise({redirectTo: "404"});
}])
