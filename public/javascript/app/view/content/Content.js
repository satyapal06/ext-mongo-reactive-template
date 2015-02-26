Ext.define('Demo.view.content.Content', {
	extend : 'Ext.container.Container',
	alias : [ 'widget.content' ],
	requires : [ 'Demo.view.content.GridPanel', 'Demo.view.content.GridForm' ],

	layout : {
		type : 'hbox',
		align : 'stretch'
	},

	items : [ {
		xtype : 'usergrid',
		form : false
	}, {
		xtype : 'gridform'
	} ]
});