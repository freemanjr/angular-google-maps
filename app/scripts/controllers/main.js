'use strict';

/**
 * @ngdoc function
 * @name angularGoogleMapsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGoogleMapsApp
 */
angular.module('angularGoogleMapsApp')
  .controller('MainCtrl', function ($scope, uiGmapGoogleMapApi) {
    uiGmapGoogleMapApi.then(function (maps) {
      $scope.map = {
        center: { // tulsa oklahoma
          latitude: 36.14674677781439,
          longitude: -96.02047729492188
        },
        zoom: 8
      };
    });
  });
