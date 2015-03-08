export default function($http){
  return {

    getUser(username){
      return $http
        .get('https://api.github.com/users/' + username)
        .then((response)=> response.data);
    },

    getRepos(user){
      return $http
        .get(user['repos_url'])
        .then(function(response){
          return response.data;
        });
    }
  }
}
