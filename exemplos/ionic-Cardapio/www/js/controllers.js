angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Pratos, Config) {
	Pratos.query({type: Config.postType}, function(data) {
    $scope.Pratos = data;
    console.log(data);
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
