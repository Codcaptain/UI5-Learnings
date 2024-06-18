sap.ui.define([
    "sap/ui/core/mvc/Controller",
    
],
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("com.incture.project1.controller.first", {
            onInit: function() {
            },
            onsubmit: function () {
                alert("it is working");
                this.getOwnerComponent().getRouter().navTo("secondroot");
            },
            onchange: function () {
                var name = this.getView().byId("idinput").getValue();
                var msg = "Welcome To" + name;
                this.getView().byId("idtext1").setText(msg);
                var alignment = this.getView().byId("idinput1").getValue();//here the idinput1 is according to the input field in view 
                this.getView().byId("idtext1").setTextAlign();//settextalignment to align the entire text
                //disabled input fields
                this.getView().byId("idinput").setEnabled(false);
                this.getView().byId("idinput1").setEnabled(false);//dynamically enable disabled kept it false for disabling the input fields
                

            },
            hide:function(){
                var btn1=this.getView().byId("Hide").getText();// setting the button text to variable if it is Hide then change it 
                if(btn1==="Hide"){
                    // this.getView().byId("page").setVisible(false); //it hide the entire page don't do wrong practise
                this.getView().byId("idtext").setVisible(false);
                this.getView().byId("idtext1").setVisible(false);
                this.getView().byId("idLabel").setVisible(false);
                this.getView().byId("idinput").setVisible(false);
                this.getView().byId("idLabel1").setVisible(false);
                this.getView().byId("idinput1").setVisible(false);//hide all the ui elements 
                this.getView().byId("changebtn").setVisible(false);
                this.getView().byId("second").setVisible(false);

                this.getView().byId("Hide").setText("show");
                }else{
                    // this.getView().byId("page").setVisible(true);// you will get the show button after hiding once

                    this.getView().byId("idtext").setVisible(true);
                    this.getView().byId("idtext1").setVisible(true);//showing all ui elements
                    this.getView().byId("idLabel").setVisible(true);
                    this.getView().byId("idinput").setVisible(true);
                    this.getView().byId("idLabel1").setVisible(true);
                    this.getView().byId("idinput1").setVisible(true);
                    this.getView().byId("changebtn").setVisible(true);
                    this.getView().byId("second").setVisible(true);
                    
                    this.getView().byId("Hide").setText("Hide");


                }
            },
            layout:function(){
                this.getOwnerComponent().getRouter().navTo("layoutroot");
            },
            simpleform:function(){
                this.getOwnerComponent().getRouter().navTo("simpleformroot");
            },
            onbinding:function(){
                this.getOwnerComponent().getRouter().navTo("bindingroot");
            }
        });
    });
