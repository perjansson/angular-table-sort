(function() {
  'use strict';

  angular
    .module('tableSortApp')
    .controller('Controller', ['Service', Controller]);

  function Controller(Service) {
    var vm = this;
    vm.companies = null;
    vm.sort = {
      type: 'name',
      reverse: false,
      searchQuery: ''
    };

    activate();

    function activate() {
      Service.getCompanies()
        .then(updateCompanies);
    }

    function updateCompanies(companies) {
      vm.companies = companies;
    }
  };

})();
