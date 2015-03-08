function SearchController($scope, $location){
  var vm = this;
  vm.username = 'substack'
  vm.search = (username) => $location.path('/user/' + username);
}
SearchController.$inject = ['$scope', '$location']

export default SearchController
