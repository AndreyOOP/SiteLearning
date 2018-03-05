(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignupFormController', SignupFormController);
    

    SignupFormController.$inject = ['MenuService'];
    function SignupFormController(MenuService) {
        var reg = this;

        reg.favorite = false;

        reg.submit = function () {

          MenuService.getMenuItem('A').then(function(response){

            reg.favorite = false;
            //todo
            // - save data to utilize it later
            // - add display OK message
            // - instead of 'A' item have to be parameter from input field
            
          }).catch(function(error){ //here should be logic for displaying error message in case is on server data not found
            console.log('Error response from server'); 
            reg.favorite = true;
          });
        };
    }
    
})();