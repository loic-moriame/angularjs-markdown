'use strict';

angular.module('markdownApp')
  .directive('markdown', function () {
    var converter = new Showdown.converter();
    var link = function(scope, element, attrs, model) {
        var render = function() {
            var htmlText = converter.makeHtml(model.$modelValue);
            element.html(htmlText);
        };
        scope.$watch(attrs['ngModel'], render);
        render();        
    };

    return {
        restrict: 'E',
        require: 'ngModel',
        link: link
    }
  });
