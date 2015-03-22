var authInterceptor = function($q, $location) {
  return {
    responseError: function(rejection) {
      if (rejection.status === 401) {
        // redirect to login
        $location.path('/login');
      }
      return $q.reject(rejection);
    }
  };
};

authInterceptor.$inject = ['$q', '$location'];

export default authInterceptor;
