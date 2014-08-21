'use strict';

/* Services */
angular.module('app.services', [])
  .factory('Modules', function ($resource) {
    return $resource('/api/modules')
  })