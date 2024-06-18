sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.incture.project1.controller.fourth", {
        onInit: function() {
        },
        onsubmit: function(){
            this.getOwnerComponent().getRouter().navTo("firstroot");
        }
      });
    }
  );
  