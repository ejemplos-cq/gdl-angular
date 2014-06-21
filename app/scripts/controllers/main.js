'use strict';

/**
 * @ngdoc function
 * @name gdlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gdlApp
 */
angular.module('gdlApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
