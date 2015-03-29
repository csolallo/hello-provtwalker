import ngMock from 'angular-mocks';
import app from './main'
//import github from './github';

describe('github', () => {

  var github,
      $httpBackend,
      $http;

  beforeEach(ngMock.module('es6ified'));

  beforeEach(ngMock.inject(($injector) => {
    $httpBackend = $injector.get('$httpBackend');
    $http = $injector.get('$http');
    github = $injector.get('github');
  }));

  it('should be registered with angular', () => {
    expect(github).toBeDefined();
    expect(github.getUser).toBeDefined();
    expect(github.getRepos).toBeDefined();
  });

  describe('.getUser(username)', () => {
    it('should promise a github user', (done) => {
      $httpBackend.whenGET('https://api.github.com/users/somebody')
        .respond({name: 'somebody'});

      github
        .getUser('somebody')
        .then( user => expect(user.name).toEqual('somebody'))
        .then(done)

      $httpBackend.flush();

    });
  });

  describe('.getRepos(user)', () => {
    it('should promise a github user\'s repositories', (done) => {
      var user = {
        name: 'somebody',
        'repos_url': '/fakehub-repos'
      };

      $httpBackend
        .whenGET(user.repos_url)
        .respond({repos: ['foo', 'bar']});

      github
        .getRepos(user)
        .then( res => expect(res.repos).toContain('foo'))
        .then(done)

      $httpBackend.flush();

    });
  });

});
