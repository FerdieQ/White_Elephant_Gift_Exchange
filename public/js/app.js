console.log('JS loaded!');

(function() {
  "use strict";

  angular
    .module("elephantApp", ["ui.router"])
    .config(appRoutes);

  appRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function appRoutes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state("homePage", {
        url: "/",
        templateUrl: "templates/home.html"
        // controller: "LoginController",
        // controllerAs: "vm"
      })
      .state("aboutPage", {
        url: "/about",
        templateUrl: "templates/about.html"
      })
      .state("createPage", {
        url: "/create",
        templateUrl: "templates/create.html",
        controller: "CreateController",
        controllerAs: "vm"
      });


    $urlRouterProvider.otherwise("/");
  }

})();
