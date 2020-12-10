sap.ui.define([
		"kpmg/home/exercise4/controller/BaseController"
	],
	function (BaseController) {
		"use strict";
		return BaseController.extend("kpmg.home.exercise4.controller.Albums", {
			onInit: function () {
			var router = this.getRouter();
			router.getRoute("AlbumDetails").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched : function (event) {
			var args, view;
			args = event.getParameter("arguments");
			view = this.getView();

			view.bindElement({
				path : "/AlbumSet(" + args.AlTitle + ")",
				events : {
					change: this._onBindingChange.bind(this),
					dataRequested: function (event) {
						view.setBusy(true);
					},
					dataReceived: function (event) {
						view.setBusy(false);
					}
				}
			});
		},
	
			onItemPress : function(event){
			
			var item, ctx;
			item = event.getSource();
			ctx = item.getBindingContext();
			this.getRouter().navTo("AlbumDetails",{
				AlTitle : ctx.getProperty("AlTitle")
			});
		}
		});

	});