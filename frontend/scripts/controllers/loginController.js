app.controller('loginController', function ($scope, $http, $location) {
	var UNAME_REGX = /\d+/;
	var basePath = $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/services/backend/';
	$scope.loginValidate = function () {
		//Lets say all the validations are done
		if (!UNAME_REGX.test($scope.userName)) {
			alert('Some Error.');
		} else {
			$scope.submitLoginForm();
		}
	}

	$scope.submitLoginForm = function () {
		var data = {
			userName: $scope.userName,
			password: $scope.password
		};
		$http.post(basePath + 'login', data)
		.success(function(response, status) {
			$scope.userName = respone.userUsername;
			$scope.email = respone.email;
		})
		.error(function (response, status) {
		})
		.then(function (data) {
			//use data
		});
	};
});