(function(){
    'use strict';
    angular.module('nypage')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function routesConfig($stateProvider, $urlRouterProvider, $httpProvider){

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "views/primaryView.html",
                controller: "MainController",
                controllerAs: "mainCtrl"
            })
            .state('present', {
                url: "/present",
                templateUrl: "views/presente.html",
                controller: "MainController",
                controllerAs: "mainCtrl"
            })
            .state('future', {
                url: "/future",
                templateUrl: "views/futuro.html",
                controller: "MainController",
                controllerAs: "mainCtrl"
            })
            .state('beautifulMoments', {
                url: "/beautifulMoments",
                templateUrl: "views/bellosMomentos.html",
                controller: "MainController",
                controllerAs: "mainCtrl"
            })
            .state('last', {
                url: "/last",
                templateUrl: "views/Pasado.html",
                controller: "MainController",
                controllerAs: "mainCtrl"
            });
    }

})();