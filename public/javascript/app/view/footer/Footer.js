Ext.define('Demo.view.footer.Footer', {
	extend : 'Ext.Container',
	xtype : 'appFooter',
	height : 40,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	initComponent : function() {
		this.items = [ {
			xtype : 'panel',
			height : 40,
			width : '100%',
			cls : 'noBorder',
			layout : 'hbox',
			items : [ {
				flex : 1,
				height : 75,
				html : '<div class="footer">'
						+ '<p>Copyright © TechFerry 2013</p>'
						+ '</div>'
			} ]
		} ];
		this.callParent();
	}
});