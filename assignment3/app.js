(function () {
	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective)
	.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

	function FoundItemsDirective() {
		var ddo = {
			templateUrl: 'foundItems.html',
			scope: {
				items: '<',
				onRemove: '&'
			},
			controller: NarrowItDownController,
			controllerAs: 'ctrl',
			bindToController: true
		};

		return ddo;
	}

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var ctrl = this;

		ctrl.searchTerm = "";

		ctrl.getMatchedMenuItems = function(searchTerm){
			var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

			promise.then(function (response) {
				console.log(response);
				ctrl.found=response;
			})
			.catch(function (error) {
				console.log(error);
			})
		};

		ctrl.removeItem = function (itemIndex) {
			ctrl.found.splice(itemIndex, 1);
		};
	}


	MenuSearchService.$inject = ['$http', 'ApiBasePath']
	function MenuSearchService($http, ApiBasePath){
		var service = this;

		service.getMatchedMenuItems = function(searchTerm){
			return $http({
				method: "GET",
				url: (ApiBasePath + "/menu_items.json")
			}).then(function(result){
				var foundItems = [];
				var menu_items = result.data.menu_items;
				for (var i=0; i< menu_items.length; i++){
					if(menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
						foundItems.push(menu_items[i]);
					}
				}
				return foundItems;
			});
			
		};
	}


})();

