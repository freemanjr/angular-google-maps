'use strict';

/**
 * @ngdoc overview
 * @name angularGoogleMapsApp
 * @description
 * # angularGoogleMapsApp
 *
 * Main module of the application.
 */
angular
  .module('angularGoogleMapsApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
