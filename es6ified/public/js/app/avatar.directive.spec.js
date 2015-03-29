import angular from 'angular';
import ngMock from 'angular-mocks';
import app from './main'
import template from './avatar.html!text'
//import avatar from './avatar.directive';

describe('avatar', () => {
  var el,
      spyDetails = jasmine.createSpy('showDetails'),
      user = {
        "login": "spot",
        "avatar_url": "http://placekitten.com/100/100",
        "name": "Spot",
        "company": "cyberwizard institute",
        "location": "Seattle, WA",
        "public_repos": 100,
        "followers": 10000
      };

  beforeEach(ngMock.module('es6ified'));

  beforeEach(ngMock.inject(($compile, $rootScope) => {
    // setup scope
    var scope = $rootScope;
    scope.user = user;
    scope.myShowDetails = spyDetails;

    // create and compile directive
    var els = angular.element('<avatar user="user" show-details="myShowDetails()"/>');
    $compile(els)(scope);
    el = els[0];
    scope.$digest();
  }));

  it('should bind to user data', () => {
    expect(el.querySelector('img').getAttribute('src')).toBe(user.avatar_url);
    expect(el.querySelector('dt').textContent).toBe(user.name);
    expect(el.textContent).toContain('10,000');
  });

  it('should bind to the scope\'s click event', () => {
    el.click();

    expect(spyDetails).toHaveBeenCalled()
  });

});
