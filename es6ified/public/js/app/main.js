import angular from 'angular'
import routes from './routes.config'
import SearchController from './search.controller'
import UserController from './user.controller'
import github from './github'
import authInterceptor from './auth-interceptor'

var app = angular.module('es6ified', ['ngRoute']);

// $inject on register
// app.controller('SearchController', ['$scope', '$location', SearchController])
// app.controller('UserController', ['$scope', 'github', '$routeParams', UserController])

// defer $inject to definition
app.controller('SearchController', SearchController)
app.controller('UserController', UserController)

app.factory('authInterceptor', authInterceptor);
app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
}]);

app.factory('github', github);

app.config(routes);

export function bootstrap(el){
  angular.bootstrap(el, [app.name]);
  return app;
}
