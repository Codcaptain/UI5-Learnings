sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/ui/model/Sorter"
    ],
    function(BaseController,Filter,FilterOperator,Sorter) {
      "use strict";
  
      return BaseController.extend("com.incture.project1.controller.binding", {
        onInit: function() {
        },
        onsubmit:function(){
          this.getOwnerComponent().getRouter().navTo("bindingresultroot")
        },
        onselect:function(oEvent){
          var box=oEvent.getParameter("selectedItem").getText();
          console.log(box);
        },
        oncombo:function(oEvent){
          var data2=oEvent.getParameter("selectedItem").getText();
          console.log(data2);
        },
        onmulticombo:function(oEvent){
          var data3=oEvent.getParameter("selectedItems");
          for(var i=0;i<data3.length;i++){
            console.log(data3[i].getText());
          }
        },
        ongender:function(oEvent){
          var data4=oEvent.getParameter("selectedIndex");
          if(data4===0){
            console.log("you r male");
          }else{
            console.log("u r female");
          }
          
        },
        onselect:function(oEvent){
          var dta=oEvent.getParameter("selected");
          if(dta===true){
            console.log("u selected the box");
          }else{
            console.log("u didn't slect the box")
          }
        },
        onchanging:function(oEvent){
          // var dt=oEvent.getParameter("listItem").getBindingContext().getProperty("empid");
          // console.log(dt);
          var spath=oEvent.getParameter("listItem").getBindingContext().getPath();
          
          var index=spath.split("/")[2];
          // alert(index);
          this.getOwnerComponent().getRouter().navTo("bindingresultroot",{
            Index:index
          });
          
        },
        onsearch:function(oEvent){
          var value=oEvent.getParameter("newValue");
          var aFilters=[];
          if(value!==""){
            var oFilter= new Filter("empname",FilterOperator.Contains,value);
            aFilters.push(oFilter);
          }
          this.getView().byId("idlist").getBinding("items").filter(aFilters);
        },
        sortasc:function(){
          var osorter=new Sorter("empname",false);
          this.getView().byId("idlist").getBinding("items").sort(osorter);
        },
        sortdes:function(){
          var osorter=new Sorter("empname",true);
          this.getView().byId("idlist").getBinding("items").sort(osorter);

        }
      });
    }
  );
  