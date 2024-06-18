sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.incture.project1.controller.second", {
        onInit: function() {
        },
        onsubmit: function(){
          this.getOwnerComponent().getRouter().navTo("thirdroot");
        },
        onback:function(){
          this.getOwnerComponent().getRouter().navTo("firstroot");
        }
      });
    }
  );
  