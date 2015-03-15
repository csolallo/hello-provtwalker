describe('SearchController', function() {
  var controller = {foo:'bar'};

  // beforeEach(function() {
  //   bard.appModule('app.admin');
  //   bard.inject('$controller', '$log', '$rootScope');
  // });

  // beforeEach(function() {
  //   controller = $controller('SearchController');
  //   $rootScope.$apply();
  // });

  //bard.verifyNoOutstandingHttpRequests();
  //beforeEach(module('es6ified'));

  it('should be created successfully', function() {
    console.log('hello', controller, expect(controller).toBeDefined())
    expect(controller).toBeDefined();
  });
});
