Ext.define('Demo.view.content.GridPanel', {
	extend : 'Ext.grid.Panel',
	alias : [ 'widget.usergrid' ],
	flex : 7,
	requires : [ 'Demo.store.User' ],
	collapsible : true,
	iconCls : 'icon-grid',
	title : 'Asynchronoss User Grid - Infinite scrolling',
	loadMask : true,
	store : Ext.create('Demo.store.User'),
	emptyText : 'No Records found!',
	columns : [ {
		xtype : 'rownumberer',
		width : 50,
		sortable : false
	}, {
		text : 'First Name',
		dataIndex : 'firstName',
		flex : 4
	}, {
		text : 'Last Name',
		dataIndex : 'lastName',
		flex : 4
	}, {
		text : 'Age',
		dataIndex : 'age',
		flex : 2
	} ],
	
	listeners: {
        selectionchange: function(model, records) {
            var fields;
            if (records[0]) {
                selectedRec = records[0];
                if (!this.form) {
                    form = this.up('container').down('form').getForm();
                    fields = form.getFields();
                    fields.each(function(field){
                        if (field.name != 'company') {
                            field.setDisabled(false);
                        }
                    });
                } else {
                    fields = form.getFields();
                }
                
                // prevent change events from firing
                form.suspendEvents();
                form.loadRecord(selectedRec);
                form.resumeEvents();
            }
        }
    }
});