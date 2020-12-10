sap.ui.define([
	 "kpmg/home/exercise4/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("kpmg.home.exercise4.controller.PhotoDetails", {
		
		// onInit: function() {
		// 	this.getRouter("PhotoDetails").attachPatternMatched(this._onDetailMatched, this);
		// },

	// 	_onDetailMatched : function (event) {
	// 		var view = this.getView(),
	// 		albumIndex = event.getParameter("arguments");


	// 		view.bindElement({
	// 			path: "/photoDetails/" + albumIndex,
	// 			model: "albums",
	// 			events: {
	// 				change : this._onBindingChange.bind(this)
	// 			}
	// 		});
	// 	},

	// 	_onBindingChange : function () {
	// 		var view = this.getView(),
	// 			elementBinding = view.getElementBinding("albums"),
	// 			path = elementBinding.getPath();

	// }
	
	});
});
