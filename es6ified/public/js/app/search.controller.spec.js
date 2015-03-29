import ngMock from 'angular-mocks';
//import SearchController from './search.controller';

describe('SearchController', ()=> {
  var scope,
      constructController;

  beforeEach(ngMock.module('es6ified'));

  beforeEach(ngMock.inject(($controller, $rootScope)=> {
    scope = $rootScope.$new();
    constructController = $controller;
  }));

  it('should be registered with angular', function() {
    var controller = constructController('SearchController',{
      $scope: scope
    });
    
    expect(controller).toBeDefined();
  });

  describe('.search(username)', ()=> {

    it('should route to /user/:username', ()=> {
      var spyLocation = jasmine.createSpyObj('location', ['path']);
      var controller = constructController('SearchController', {
        $scope: scope,
        $location: spyLocation
      });

      controller.search('jarjar');

      expect(spyLocation.path).toHaveBeenCalledWith('/user/jarjar');
    })

  });
});
