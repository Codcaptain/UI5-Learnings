sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.incture.project1.controller.bindingresults", {
        onInit: function() {
          this.getOwnerComponent().getRouter().getRoute("bindingresultroot").attachPatternMatched(this.onPatternMatched,this);
        },
        back:function(){
            this.getOwnerComponent().getRouter().navTo("bindingroot");
        },
        onPatternMatched:function(oEvent){
          // this.getView().bindElement("/aemployee/2");
          var index=oEvent.getParameter("arguments").Index;
          this.getView().bindElement("/aemployee/"+index);
        }
      });
    }
  );
  