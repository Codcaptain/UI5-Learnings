sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.incture.project1.controller.preview", {
        onInit: function() {
            this.getOwnerComponent().getRouter().getRoute("previewroot").attachPatternMatched(this.onPatternMatched,this);
        },
        back:function(){
            this.getOwnerComponent().getRouter().navTo("simpleformroot")
        },
        onPatternMatched:function(){
        var eid=this.getOwnerComponent().getModel().getProperty("/empid");
        var en=this.getOwnerComponent().getModel().getProperty("/empname");
        var ed=this.getOwnerComponent().getModel().getProperty("/empdesg");
        var ee=this.getOwnerComponent().getModel().getProperty("/empmail");
        var es=this.getOwnerComponent().getModel().getProperty("/empskill");
        this.getView().byId("txtid").setText(eid);
        this.getView().byId("txtname").setText(en);
        this.getView().byId("txtdesg").setText(ed);
        this.getView().byId("txtmail").setText(ee);
        this.getView().byId("txtskill").setText(es);
        }
      });
    }
  );
  