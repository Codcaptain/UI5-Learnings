/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/incture/project1/model/models",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, Device, models,JSONModel) {
        "use strict";

        return UIComponent.extend("com.incture.project1.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                var omodel=new JSONModel({
                    empid:"",
                    empname:"",
                    empdesg:"",
                    empskill:"",
                    empemail:""
                })
                this.setModel(omodel);
                // enable routing
                var odata=new JSONModel("model/data.json");
                this.setModel(odata);
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);