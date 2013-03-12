'use strict';

angular.module('markdownApp')
  .controller('MainCtrl', function ($scope) {
    $scope.markdownTooltip = '# Level 1 Header (H1)\n###### Level 6 Header (H6)';
  });