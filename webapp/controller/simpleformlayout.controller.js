sap.ui.define(
  [
    "sap/ui/core/mvc/Controller"
  ],
  function (BaseController) {
    "use strict";

    return BaseController.extend("com.incture.project1.controller.simpleformlayout", {
      onInit: function () {
      },
      onsubmit: function () {
        var empid1 = this.getView().byId("empid").getValue();
        var ename = this.getView().byId("empname").getValue();
        var edesg = this.getView().byId("empdesg").getValue();
        var email = this.getView().byId("empmail").getValue();
        var eskill = this.getView().byId("empskill").getValue();
        
        var flag = true;
        if (empid1 === "") {
          flag = false;
          this.getView().byId("empid").setValueState("Error");
          this.getView().byId("empid").setValueStateText("Employee ID is mandatory field");
          //it is required for mandtory fields
        } else {

          //regular expression is used in data validation
          this.getView().byId("empid").setValueState("None");
          var regempid = /^[0-9]+$/;//matching for entire code
          if (!empid1.match(regempid) || empid1.length !== 8) {
            flag = false;
            this.getView().byId("empid").setValueState("Error");
            this.getView().byId("empid").setValueStateText("Employee ID should be 8 digits ");

          }

        }
        if (ename === "") {
          flag = false;
          this.getView().byId("empname").setValueState("Error");
          this.getView().byId("empname").setValueStateText("Emp name is a mandatory field");

        } else {
          this.getView().byId("empname").setValueState("None");
          var regname = /^[a-zA-Z]+$/;
          if (!ename.match(regname)) {
            flag = false;
            this.getView().byId("empname").setValueState("Error");
            this.getView().byId("empname").setValueStateText("Emp name must be in alphacharacter")
          }
        }
        if (edesg === "") {
          flag = false;
          this.getView().byId("empdesg").setValueState("Error");
          this.getView().byId("empdesg").setValueStateText("Employee designation is a mandatory field");

        } else {
          this.getView().byId("empdesg").setValueState("None");
          var regdesg = /^[a-zA-Z]+$/;
          if (!edesg.match(regdesg)) {
            flag = false;
            this.getView().byId("empdesg").setValueState("Error");
            this.getView().byId("empdesg").setValueStateText("Emp designation must be in alphabets")
          }
        }
        if (email === "") {
          flag = false;
          this.getView().byId("empmail").setValueState("Error");
          this.getView().byId("empmail").setValueStateText("Emp email is a mandatory field");

        } else {
          this.getView().byId("empmail").setValueState("None");
          var regmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
          if (!email.match(regmail)) {
            flag = false;
            this.getView().byId("empmail").setValueState("Error");
            this.getView().byId("empmail").setValueStateText("Emp mail must be @ symbol")
          }
        }
        if (eskill === "") {
          flag = false;
          this.getView().byId("empskill").setValueState("Error");
          this.getView().byId("empskill").setValueStateText("Emp skills is a mandatory field");

        } else {
          this.getView().byId("empskill").setValueState("None");
          var regskill = /^[a-zA-Z]+$/;
          if (!eskill.match(regskill)) {
            flag = false;
            this.getView().byId("empskill").setValueState("Error");
            this.getView().byId("empskill").setValueStateText("Emp skills must be in alphacharacter")
          }
        }

        //checks both validation & then submit after that can submit 
        if (flag == true) {
          alert("you have enter correct values")
          this.getOwnerComponent().getModel().setProperty("/empid",empid1);
        this.getOwnerComponent().getModel().setProperty("/empname",ename);
        this.getOwnerComponent().getModel().setProperty("/empdesg",edesg);
        this.getOwnerComponent().getModel().setProperty("/empmail",email);
        this.getOwnerComponent().getModel().setProperty("/empskill",eskill);
        this.getOwnerComponent().getRouter().navTo("previewroot");
        }
        
      },
      //simple form submission without validation
      onpreview:function(){
        var empid1 = this.getView().byId("empid").getValue();
        var ename = this.getView().byId("empname").getValue();
        var edesg = this.getView().byId("empdesg").getValue();
        var email = this.getView().byId("empmail").getValue();
        var eskill = this.getView().byId("empskill").getValue();
        this.getOwnerComponent().getModel().setProperty("/empid",empid1);
        this.getOwnerComponent().getModel().setProperty("/empname",ename);
        this.getOwnerComponent().getModel().setProperty("/empdesg",edesg);
        this.getOwnerComponent().getModel().setProperty("/empmail",email);
        this.getOwnerComponent().getModel().setProperty("/empskill",eskill);
        this.getOwnerComponent().getRouter().navTo("previewroot");
        
        
      }
    });
  }
);
