(function () {
  "use strict";

  angular.module('common')
  .service('UserService', UserService);


  function UserService() {
    console.log("creation service")
    var service = this;


    service.getUser = function(){
      return service.user;
    };

    service.login = function(user){
     service.user = user;
    };

  }


})();