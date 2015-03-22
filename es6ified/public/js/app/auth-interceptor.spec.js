import authInterceptor from './auth-interceptor';
import angularMocks from 'angular-mocks';

//console.log('angularMocks', angularMocks.module === module)

describe('authInterceptor', function() {
  var interceptor,
      qMock,
      locationMock;

  beforeEach(function(){

    qMock = {
      reject(reason){}
    };
    spyOn(qMock, 'reject');

    locationMock = {
      path(url){}
    }

  });

  it('should be created successfully', function() {
    expect(authInterceptor).toBeDefined();
    expect(authInterceptor().responseError).toBeDefined();
  });

  it('should redirect on 401', function() {
    interceptor = authInterceptor(qMock, locationMock);
    expect(interceptor.responseError).toBeDefined();

  });

});
