import 'angular-route'

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

export default routeConfig;
