angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})
.factory('Config', function(){ //FACTORY DE CONFIGURAÇÃO. baseURL é a URL da sua API. postType é o slug do seu post Type
  var Config = {
    baseUrl: "http://crepedeliciabrasil.com.br/site/wp-json",
    postType: "crepe"
  }
  return Config;
})
.factory('Pratos', function(Config, $resource){
return $resource(Config.baseUrl+'/posts/:id');
});
