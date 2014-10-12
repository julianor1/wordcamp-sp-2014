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
    baseUrl: "http://rcdev.com.br/palestra/wp-json",
    rootUrl: "http://rcdev.com.br/palestra",
    postType: "boletins",
    oAuth: {
      consumerSecret:"8hiRicniUiAjWq86W8H6e8wyDgJjmFf6BxhUgH4RYzhbDxu1",
      consumerKey: "5CisRX2107ra",
      callback: "#/tab/dash"
    }
  }
  return Config;
})
.factory('Pratos', function(Config, $resource){
return $resource(Config.baseUrl+'/posts/:id');
})
.factory('oAuthRequest', function(Config, $http){
return Config.rootUrl+'/oauth1';
})
.factory('OAuthF', function(Config, $resource){
 return function (form) {
    var accessor = { consumerSecret: form.consumerSecret.value
                   , tokenSecret   : form.tokenSecret.value};
    var message = { method: form.httpMethod.value
                  , action: form.URL.value
                  , parameters: OAuth.decodeForm(form.parameters.value)
                  };
    for (var e = 0; e < form.elements.length; ++e) {
        var input = form.elements[e];
        if (input.name != null && input.name.substring(0, 6) == "oauth_"
            && input.value != null && input.value != ""
            && (!(input.type == "checkbox" || input.type == "radio") || input.checked))
        {
            message.parameters.push([input.name, input.value]);
        }
    }
    OAuth.SignatureMethod.sign(message, accessor);
    showText("normalizedParameters", OAuth.SignatureMethod.normalizeParameters(message.parameters));
    showText("signatureBaseString" , OAuth.SignatureMethod.getBaseString(message));
    showText("signature"           , OAuth.getParameter(message.parameters, "oauth_signature"));
    showText("authorizationHeader" , OAuth.getAuthorizationHeader("", message.parameters));
    return false;
}
function showText(elementId, text) {
    var child = document.createTextNode(text);
    var element = document.getElementById(elementId);
    if (element.hasChildNodes()) {
        element.replaceChild(child, element.firstChild);
    } else {
        element.appendChild(child);
    }
}
function freshTimestamp() {
    document.request.oauth_timestamp.value = OAuth.timestamp();
}
function freshNonce() {
    document.request.oauth_nonce.value = OAuth.nonce(11);
}
});
