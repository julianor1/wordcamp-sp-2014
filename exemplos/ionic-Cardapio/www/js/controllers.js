angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Pratos) {
	Pratos.query({type: 'boletins'}, function(data) {
    $scope.Pratos = data;
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
