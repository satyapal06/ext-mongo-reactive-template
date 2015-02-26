Ext.define('Demo.view.Main', {
	extend : 'Ext.container.Container',
	requires : [ 'Demo.view.content.Content', 'Demo.view.header.Header',
			'Demo.view.footer.Footer' ],

	xtype : 'app-main',

	layout : {
		type : 'border'
	},

	items : [ {
		region : 'north',
		xtype : 'appHeader'
	}, {
		region : 'center',
		xtype : 'content'
	}, {
		region : 'south',
		xtype : 'appFooter'
	} ]
});