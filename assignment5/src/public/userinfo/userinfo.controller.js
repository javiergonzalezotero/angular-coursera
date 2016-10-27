(function () {
	"use strict";

	angular.module('public')
	.controller('UserInfoController', UserInfoController);

	UserInfoController.$inject = ['MenuService', 'UserService', 'ApiPath'];
	function UserInfoController(MenuService, UserService, ApiPath) {
		var userInfo = this;
		userInfo.user = UserService.getUser();
		userInfo.basePath = ApiPath;
	}


})();