(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['MenuDataService', 'items'];
function ItemsListController(MenuDataService, items) {
  var itemsList = this;
  itemsList.items = items.menu_items;
  itemsList.categoryName = items.category.name;
}

})();