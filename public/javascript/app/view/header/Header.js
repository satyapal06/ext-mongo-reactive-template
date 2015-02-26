Ext.define('Demo.view.header.Header', {
	extend : 'Ext.Container',
	xtype : 'appHeader',
	height : 80,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	initComponent : function() {
		this.items = [ {
			xtype : 'panel',
			style : 'background : url(assets/images/Ocean.png) no-repeat; background-size : 100% 80px; height: 80px; width: 100%;',
			height : 80,
			width : '100%',
			cls : 'noBorder',
			layout : 'hbox',
			items : [ {
				flex : 1,
				height : 75,
				html : '<div id="headerlogo" class="header-logo">'
						+ '<h2>Reactive Mongo with Ext JS</h2>'
						+ '<p>End to end asynchronoss request & response.</p>'
						+ '</div>'
			} ]
		} ];
		this.callParent();
	}
});