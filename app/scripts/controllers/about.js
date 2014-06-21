'use strict';

/**
 * @ngdoc function
 * @name gdlApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gdlApp
 */
angular.module('gdlApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
