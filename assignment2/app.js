(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
	.controller('ToBuyShoppingController', ToBuyShoppingController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyShoppingController(ShoppingListCheckOffService) {
		var toBuyCtrl = this;
		toBuyCtrl.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

		toBuyCtrl.buyItem=ShoppingListCheckOffService.buyItem;
		/*toBuyCtrl.buyItem = function(itemIndex){
			console.log("jheheh")
			ShoppingListCheckOffService.buyItem(itemIndex);
		}*/
	}


	AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
		var alreadyBoughtCtrl = this;

		alreadyBoughtCtrl.itemsBought = ShoppingListCheckOffService.getItemsBought();
	}

	function ShoppingListCheckOffService() {
		var itemsToBuy = [
		{ name: "cookies", quantity: 10 },
		{ name: "soda", quantity: 10 },
		{ name: "milk", quantity: 4 },
		{ name: "apples", quantity: 5 },
		{ name: "bananas", quantity: 8 }
		];
		var itemsBought = [];

		this.buyItem = function (itemIndex) {
			var item = itemsToBuy.splice(itemIndex, 1);
			itemsBought.push(item[0]);
			console.log(itemsBought.length);
				console.log(itemsToBuy.length);
		};

		this.getItemsToBuy = function () {
			return itemsToBuy;
		};

		this.getItemsBought = function () {
			return itemsBought;
		};
	}

})();
