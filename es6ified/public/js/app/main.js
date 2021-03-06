import angular from 'angular'
import routes from './routes.config'
import SearchController from './search.controller'
import UserController from './user.controller'
import github from './github'
import avatar from './avatar.directive'

var app = angular.module('es6ified', ['ngRoute']);

// $inject on register
// app.controller('SearchController', ['$scope', '$location', SearchController])
// app.controller('UserController', ['$scope', 'github', '$routeParams', UserController])

// defer $inject to definition
app.controller('SearchController', SearchController)
app.controller('UserController', UserController)

app.factory('github', github);

app.directive('avatar', avatar);

app.config(routes);

export function bootstrap(el){
  console.log('bootstrapping angular');
  angular.bootstrap(el, [app.name]);
  return app;
}
