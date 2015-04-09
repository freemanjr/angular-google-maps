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
    'ngRoute',
    'uiGmapgoogle-maps'
  ])
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      //    key: 'your api key',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
  })
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
