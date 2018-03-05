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
            
            var regInfo = {};
            regInfo.first_name = reg.first_name;
            regInfo.last_name = reg.last_name;
            regInfo.e_mail = reg.e_mail;
            regInfo.u_phone = reg.u_phone;
            regInfo.favorite_dish = reg.favorite_dish;

            regInfo.categ = response.data;

            MenuService.saveRegInfo(regInfo);

            reg.saved = true;
            
          }).catch(function(error){
            reg.favorite = true;
          });
        };
    }
    
})();