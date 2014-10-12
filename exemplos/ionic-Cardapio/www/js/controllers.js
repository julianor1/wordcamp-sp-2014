angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Pratos, Config, $auth) {
	Pratos.query({type: Config.postType}, function(data) {
    $scope.Pratos = data;
    var message = {};
    message.method = "POST";
    message.action = "http://rcdev.com.br/palestra/oauth1/request";//url
    var timestampe = OAuth.timestamp();
    var nonce = OAuth.nonce(11);
    console.log('timestampe : ' + timestampe + ' nonce: '+ nonce);
    message.parameters = {};
    message.parameters.oauth_timestamp = timestampe;
    message.parameters.oauth_nonce = nonce;
    message.parameters.oauth_consumer_key = Config.oAuth.consumerKey;
    message.parameters.oauth_callback = Config.oAuth.callback;
    message.parameters.type = Config.postType;
   	var accessor = {}
    accessor.consumerSecret = Config.oAuth.consumerSecret;
    OAuth.SignatureMethod.sign(message, accessor);
    console.log("signatureBaseString" , OAuth.SignatureMethod.getBaseString(message));
    console.log("normalizedParameters", OAuth.SignatureMethod.normalizeParameters(message.parameters));
    console.log("Signature: ", OAuth.getParameter(message.parameters, "oauth_signature"));
    console.log(data);
    
  });
  $scope.autenticar = function(){
    console.log("autneticado: ",$auth.isAuthenticated());
    $auth.link('wp-api-oauth');

  };
})
.controller('LoginCtrl', function($scope, Config, $auth, oAuthRequest, $http, $window){
   var message = {};
    message.method = "POST";
    message.action = "http://rcdev.com.br/palestra/oauth1/request";//url
    var timestampe = OAuth.timestamp();
    var nonce = OAuth.nonce(11);
    message.parameters = {};
    message.parameters.oauth_timestamp = timestampe;
    message.parameters.oauth_nonce = nonce;
    message.parameters.oauth_consumer_key = Config.oAuth.consumerKey;
    message.parameters.oauth_callback = Config.oAuth.callback;
    message.parameters.type = Config.postType;
    var accessor = {}
    accessor.consumerSecret = Config.oAuth.consumerSecret;
    OAuth.SignatureMethod.sign(message, accessor);
    console.log("Signature: ", OAuth.getParameter(message.parameters, "oauth_signature"));
    console.log("signatureBaseString" , OAuth.SignatureMethod.getBaseString(message));
    console.log("normalizedParameters", OAuth.SignatureMethod.normalizeParameters(message.parameters));
    $scope.informacoes = {
      signature: OAuth.getParameter(message.parameters, "oauth_signature"),
      BaseString: OAuth.SignatureMethod.getBaseString(message),
      parameters: OAuth.SignatureMethod.normalizeParameters(message.parameters)
    }
    var assina = OAuth.getParameter(message.parameters, "oauth_signature");
    $http({url: oAuthRequest+'/request',
          method: 'POST',
          params: {oauth_timestamp: timestampe, oauth_nonce: nonce, oauth_consumer_key: Config.oAuth.consumerKey, type: Config.postType, oauth_signature: assina, oauth_signature_method: 'HMAC-SHA1', oauth_callback: Config.oAuth.callback}
        })
    .success(function(data){
      console.log("Sucesso", data);//peguei token!!! agora eh direcionar para
      var regex = /[?&]([^=#]+)=([^&#]*)/g,
    url = 'http://whatever.com/?'+data,
    params = {},
    match;
    while(match = regex.exec(url)) {
        params[match[1]] = match[2];
    }
      console.log("URL COM TOKEN: ", oAuthRequest+'/authorize?oauth_token='+'&oauth_callback='+Config.oAuth.callback)
      $window.location.href = oAuthRequest+'/authorize?oauth_token='+params.oauth_token+'&oauth_callback='+Config.oAuth.callback;
    }).error(function(data){
      console.error("ERRO!!!! ", data);
    });
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
