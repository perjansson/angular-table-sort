(function() {
  'use strict';

  angular
    .module('tableSortApp')
    .service('Service', ['$q', Service]);

  function Service($q) {
    this.getCompanies = getCompanies;
    var fakeCompanies = getFakeCompanies();

    function getCompanies() {
      var deferred = $q.defer();
      deferred.resolve(fakeCompanies);
      return deferred.promise;
    }

    function getFakeCompanies() {
      return _(1000).times(function(n){
        return {
          name: faker.company.companyName(),
          address: faker.address.streetAddress(),
          phone: faker.phone.phoneNumber()
        };
      });
    }
  };

})();
