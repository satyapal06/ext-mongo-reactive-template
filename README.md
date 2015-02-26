Ext JS with Reactive Mongo Web Template
===========

**Ext JS - Scala - Play - WebJars - PlayReactiveMongo**

A full application stack for a Modern Web application, lets review the components:

* **ExtJS** - client side javascript framework for creating complex MVC applications in Ext JS,
fronted with Ext JS framework,
  * Take a look at what the sencha organization are upto here : [ExtJS](http://docs.sencha.com/extjs/4.2.0/)

* **PlayFramework** - currently using 2.3.4 with the scala API
  *  [PlayFramework Docs](http://www.playframework.com/documentation/2.3.x/Home)

* **PlayReactiveMongo** gives interaction with MongoDB providing a non-blocking driver as well as some useful additions for handling JSON.
  * Check out their GitHub: [Play-ReactiveMongo](https://github.com/ReactiveMongo/Play-ReactiveMongo)

* **WebJars** Accessing Ext JS & CSS libraries by [WebJars](http://www.webjars.org/)

Getting Started
----------

Your development environment will require:
* The Github code for the project is at : [ext-mongo-reactive-template](https://github.com/satyapal06/ext-mongo-reactive-template)
* Clone the project into local system
* To run the Play framework 2.3.0, you need JDK 6 or later
* Install Typesafe Activator if you do not have it already. You can get it from here: [download](http://www.playframework.com/download)
*  MongoDB see [here](http://docs.mongodb.org/manual/tutorial/install-mongodb-enterprise-on-windows/) for installation instructions.

Once the prerequisites have been installed, you will be able to execute the following from a terminal.

```
../ext-mongo-reactive-template >  activator clean compile
../ext-mongo-reactive-template >  activator run
```

This should fetch all the dependencies and start a Web Server listening on *localhost:9000*

```
[info] Loading project definition from ../ext-mongo-reactive-template/project
[info] Set current project to ext-mongo-reactive-template
[info] Updating ext-mongo-reactive-template...
...
[info] Done updating.

--- (Running the application from SBT, auto-reloading is enabled) ---

[info] play - Listening for HTTP on /0:0:0:0:0:0:0:0:9000

(Server started, use Ctrl+D to stop and go back to the console...)

```

Note: This will create a MongoDB Collection for you automatically, a freebie from the Driver!

Genarate sample data by executing the following script in mongo console.
```
> use ext-mongo-reactive-template
switched to db ext-mongo-reactive-template
> db.createCollection("users");
{ "ok" : 1 }
> for (var i = 1; i <= 10000; i++) {
	db.users.insert( { 
		firstName: "UserFirstName"+i, 
		lastName: "UserLastName"+i, 
		age: 60, active: true 
	})
}

WriteResult({ "nInserted" : 1 })
> db.users.find();
{ "_id" : ObjectId("54eef174b304e99c0edb1215"), "firstName" : "UserFirstName1", "lastName" : "UserLastName1", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb1216"), "firstName" : "UserFirstName2", "lastName" : "UserLastName2", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb1217"), "firstName" : "UserFirstName3", "lastName" : "UserLastName3", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb1218"), "firstName" : "UserFirstName4", "lastName" : "UserLastName4", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb1219"), "firstName" : "UserFirstName5", "lastName" : "UserLastName5", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb121a"), "firstName" : "UserFirstName6", "lastName" : "UserLastName6", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb121b"), "firstName" : "UserFirstName7", "lastName" : "UserLastName7", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb121c"), "firstName" : "UserFirstName8", "lastName" : "UserLastName8", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb121d"), "firstName" : "UserFirstName9", "lastName" : "UserLastName9", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb121e"), "firstName" : "UserFirstName10", "lastName" : "UserLastName10", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb121f"), "firstName" : "UserFirstName11", "lastName" : "UserLastName11", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb1220"), "firstName" : "UserFirstName12", "lastName" : "UserLastName12", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb1221"), "firstName" : "UserFirstName13", "lastName" : "UserLastName13", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb1222"), "firstName" : "UserFirstName14", "lastName" : "UserLastName14", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb1223"), "firstName" : "UserFirstName15", "lastName" : "UserLastName15", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb1224"), "firstName" : "UserFirstName16", "lastName" : "UserLastName16", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb1225"), "firstName" : "UserFirstName17", "lastName" : "UserLastName17", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb1226"), "firstName" : "UserFirstName18", "lastName" : "UserLastName18", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb1227"), "firstName" : "UserFirstName19", "lastName" : "UserLastName19", "age" : 60, "active" : true }
{ "_id" : ObjectId("54eef175b304e99c0edb1228"), "firstName" : "UserFirstName20", "lastName" : "UserLastName20", "age" : 60, "active" : true }
Type "it" for more
>
```
