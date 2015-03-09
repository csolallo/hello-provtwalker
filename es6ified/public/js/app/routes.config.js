import 'angular-route'

// import html files as template string using text plugin
import userTemplate from './user.html!text'
import searchTemplate from './search.html!text'

var routeConfig = function($routeProvider, $locationProvider){
  $routeProvider
    .when('/search', {
        // templateUrl: 'js/app/search.html',
        template: searchTemplate,
        controller: 'SearchController',
        controllerAs: 'vm'
    })
    .when('/user/:username', {
        // templateUrl: 'js/app/user.html',
        template: userTemplate,
        controller: 'UserController'
    })
    .otherwise({redirectTo:'/search'});
    // Pushstate please
    $locationProvider.html5Mode(true);
};

routeConfig.$inject = ['$routeProvider', '$locationProvider'];

export default routeConfig;
