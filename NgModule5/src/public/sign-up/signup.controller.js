(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignupFormController', SignupFormController);
    

    SignupFormController.$inject = ['MenuService'];
    function SignupFormController(MenuService) {
        var reg = this;

        reg.submit = function () {
          
          reg.favorite = false;
          reg.saved = false;

          MenuService.getMenuItem(reg.favorite_dish).then(function(response){
            
            MenuService.saveRegInfo(reg.favorite_dish);

            reg.saved = true;
            
          }).catch(function(error){
            reg.favorite = true;
          });
        };
    }
    
})();