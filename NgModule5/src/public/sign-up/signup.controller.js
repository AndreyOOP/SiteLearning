(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignupFormController', SignupFormController);
    
    function SignupFormController() {
        var reg = this;

        reg.submit = function () {
          reg.completed = true;
          console.log('Submitted!');
        };
    }
    
})();