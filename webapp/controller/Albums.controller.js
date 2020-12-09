sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	function (Controller) {
		"use strict";

		return Controller.extend("kpmg.home.exercise4.controller.Albums", {

			onItemPress: function () {
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("PhotoDetails");
			}
		});

	});