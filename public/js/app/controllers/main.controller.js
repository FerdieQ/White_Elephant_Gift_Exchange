(function() {
  "use strict";

  angular
    .module("elephantApp")
    .controller("MainController", MainController);

  MainController.$inject = ['userDataService'];

  function MainController(userDataService) {
    var vm = this;

    vm.isLoggedIn = userDataService.isLoggedIn;

    // vm.test ="hello";
  }

})();
