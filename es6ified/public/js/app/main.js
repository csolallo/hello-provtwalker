import angular from 'angular'
import 'angular-route'

import SearchController from './search.controller'
import UserController from './user.controller'
import github from './github'

var app = angular.module('es6ified', ['ngRoute']);

app.controller('SearchController', ['$scope', '$location', SearchController])
//app.controller('SearchController', [SearchController])
app.controller('UserController', ['$scope', 'github', '$routeParams', UserController])

app.factory("github", ['$http', github]);

var routeConfig = function($routeProvider, $locationProvider){
  $routeProvider
    .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchController',
        controllerAs: 'vm'
    })
    .when('/user/:username', {
        templateUrl: 'views/user.html',
        controller: 'UserController'
    })
    .otherwise({redirectTo:'/search'});
    // Pushstate please
    $locationProvider.html5Mode(true);
};

routeConfig.$inject = ['$routeProvider', '$locationProvider'];

app.config(routeConfig);

export function bootstrap(el){
  angular.bootstrap(el, [app.name]);
  return app;
}
