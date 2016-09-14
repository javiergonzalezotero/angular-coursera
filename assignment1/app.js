(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController ($scope) {

		$scope.checkLunch = function () {
			if (!$scope.lunchMenu) {
				$scope.message = "Please enter data first";
				return;
			}
			var nElems = $scope.lunchMenu.split(",").filter(discardEmpty).length;
			$scope.message= nElems < 4 ? "Enjoy!" : "Too much!";
		};

		function discardEmpty(item){
			return item.trim().length > 0;
		};

	}

})();
