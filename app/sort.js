(function() {
  'use strict';

  angular
    .module('tableSortApp')
    .factory('Sort', ['$localStorage', SortFactory]);

  function SortFactory($localStorage) {
    return function Sort(sortId, sortConfig) {
      return $localStorage.$default({
        [sortId]: sortConfig
      })[sortId];
    }
  };

})();
