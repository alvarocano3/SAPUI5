/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/EntrepinaresUI5/MyFirstProject/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});