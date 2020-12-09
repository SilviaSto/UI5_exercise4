sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function (Controller, History, UIComponent) {
	"use strict";

	return Controller.extend("kpmg.home.exercise4.controller.BaseController", {
		navTo: function (psTarget, pmParameters, pbReplace) {
			this.getRouter().navTo(psTarget, pmParameters, pbReplace);
		},
		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},
		onNavBack: function () {
			var sPreviousHash = History.getInstance().getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.back();
			} else {
				this.getRouter().navTo("Albums", {}, true /*no history*/ );
			}
		}
	});
});