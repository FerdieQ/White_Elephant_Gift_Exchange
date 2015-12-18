(function() {
  "use strict";

  angular
      .module("elephantApp")
      .controller("GiftsController", GiftsController);

  GiftsController.$inject = ["$state", "userDataService", "$log", "$http"];

  function GiftsController($state, userDataService, $log, $http) {
    var vm = this;

    vm.user = userDataService;gift

    vm.gifts = [];

    vm.gift = {
      name: "",
      category: ""
    };

    vm.editGift = {
      name: "",
      category: ""
    }

    vm.getGifts     = getGifts;
    vm.deleteGift    = deleteGift;
    vm.updateGift    = updateGift;
    vm.postGift      = postGift;
    vm.resetEditForm = resetEditForm;

    vm.getGifts();

    function getGifts() {
      $http.get('/api/gifts').then(function(response) {
        vm.gifts = response.data;
      }, function(errRes) {
        console.error('Error with your gift!', errRes);
      });
    }

    function deleteGift(id) {
      $http.delete('/api/gifts/' + id).then(function(response) {
        console.log(response);
      }, function(errRes) {
        console.error('Error with your gift!', errRes);
      }).then(getGifts);
    }

    function postGift() {
      $http.post('/api/gifts', vm.newGift)
        .then(getFishes)
        .then(function(response) {
          vm.newGift = {
            name: "",
            category: ""
          };
        });
    }

    function updateGift(id) {
      $http.put('/api/gifts/' + id, vm.editGift).then(function(response) {
        vm.editGift = {
          name: "",
          category: ""
        };
      }, function(errRes) {
        console.log('Error with your gift!', errRes);
      }).then(getGifts);
    }

    function resetEditForm() {
      vm.giftCategory = '';
      vm.giftName = '';
      vm.editGift = {
        name: "",
        category: ""
      };
    }

  }

})();
