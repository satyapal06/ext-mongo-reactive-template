Ext.define('Demo.store.User', {
	extend : 'Ext.data.Store',
	requires : [ 'Demo.model.User' ],
	model : 'Demo.model.User',
	storeId : 'userStore',
	id : 'userstore',
	buffered : true,
	leadingBufferZone : 25,
	pageSize : 25,
	proxy : {
		type : 'ajax',
		url : '/users',
		reader : {
			root : 'users',
			totalProperty : 'totalCount'
		},
		simpleSortMode : true,
	},
	sorters : [ {
		property : 'firstName',
		direction : 'ASC'
	} ],
	autoLoad : true
});
