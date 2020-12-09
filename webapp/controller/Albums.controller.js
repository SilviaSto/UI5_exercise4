sap.ui.define([
		"kpmg/home/exercise4/controller/BaseController"
	],
	function (BaseController) {
		"use strict";
		return BaseController.extend("kpmg.home.exercise4.controller.Albums", {
			onItemPress: function (event) {
				this.navTo("PhotoDetails");
			}
		});

	});