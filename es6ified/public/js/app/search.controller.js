class SearchController {
  constructor($scope, $location){
    var vm = this;
    vm.username = 'twalker'
    vm.search = (username) => $location.path('/user/' + username);
  }
}
// alternative inject
//SearchController.$inject = ['$scope', '$location']

export default SearchController
