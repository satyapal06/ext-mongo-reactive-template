Ext.define('Demo.view.content.GridForm', {
	extend : 'Ext.form.Panel',
	alias : [ 'widget.gridform' ],
	flex : 3,
	fieldDefaults: {
        labelAlign: 'left',
        msgTarget: 'side'
    },
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	margin : '0 0 0 5',
	title : 'Details',
	items : [ {
		margin : '5',
		xtype : 'fieldset',
		flex : 1,
		title : 'User details',
		defaults : {
			width : 240,
			labelWidth : 90,
			disabled : true,
			maxValue : 100,
			minValue : 0,
			enforceMaxLength : true,
			maxLength : 5,
			bubbleEvents : [ 'change' ]
		},
		defaultType : 'numberfield',
		items : [ {
			fieldLabel : 'First Name',
			name : 'firstName',
			xtype : 'textfield',
			enforceMaxLength : false
		}, {
			fieldLabel : 'Last Name',
			name : 'lastName',
			xtype : 'textfield',
			enforceMaxLength : false
		}, {
			fieldLabel : 'Age',
			name : 'age'
		}, {
			fieldLabel : 'Active',
			xtype : 'checkbox',
			name : 'active'
		} ]
	} ]
});