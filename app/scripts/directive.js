(function() {
  'use strict';

  angular
    .module('tableSortApp')
    .directive('pjSort', [SortDirective]);

  function SortDirective() {
    return {
      restrict: 'A',
      transclude: true,
      template: '<a href ng-click="onClick()">' +
        '<span ng-transclude></span>' +
        ' <i class="glyphicon" ng-class="{\'fa fa-caret-up\' : order === by && !reverse,  \'fa fa-caret-down\' : order===by && reverse}"></i>' +
        '</a>',
      scope: {
        order: '=',
        by: '=',
        reverse: '=',
        onSortClick: '='
      },
      link: function(scope, element, attrs) {
        scope.onClick = function() {
          if (scope.order === scope.by) {
            scope.reverse = !scope.reverse
          } else {
            scope.by = scope.order;
            scope.reverse = false;
          }

          if (scope.onSortClick) {
            scope.onSortClick(scope.by);
          }
        }
      }
    }
  };

})();
