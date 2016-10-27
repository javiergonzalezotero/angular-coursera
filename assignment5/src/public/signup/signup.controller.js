(function () {
	"use strict";

	angular.module('public')
	.controller('SignupController', SignupController);

	SignupController.$inject = ['MenuService', 'UserService'];
	function SignupController(MenuService, UserService) {
		var reg = this;

		reg.submit = function () {
			MenuService.getMenuItemByShortName(reg.user.short_name).then(function (menu) {
				reg.user.menuItem = menu;
				UserService.login(reg.user);
				reg.success  = true;
				reg.noMenuNumber = false;
			}, function (error) {
				reg.success = false;
				reg.noMenuNumber = true; 
			});
		};
	}


})();