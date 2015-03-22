import authInterceptor from './auth-interceptor';
import angularMocks from 'angular-mocks';

describe('authInterceptor', function() {

    it('should be created successfully', function() {
        expect(authInterceptor).toBeDefined();
        expect(authInterceptor().responseError).toBeDefined();
    });
});
