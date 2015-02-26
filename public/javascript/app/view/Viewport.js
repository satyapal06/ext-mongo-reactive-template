Ext.define('Demo.view.Viewport', {
	extend : 'Ext.container.Viewport',
	requires : [ 'Demo.view.Main' ],

	layout : {
		type : 'fit'
	},

	items : [ {
		xtype : 'app-main'
	} ]
});
