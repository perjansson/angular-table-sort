(function() {
  'use strict';

  angular
    .module('tableSortApp')
    .controller('Controller', ['Service', 'Sort', Controller]);

  function Controller(Service, Sort) {
    var vm = this;
    vm.companies = null;
    vm.sort = new Sort('companyKey', {
      by: 'name',
      reverse: false,
      query: ''
    });

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
