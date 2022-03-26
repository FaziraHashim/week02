const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.gs1ed.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect( err => {
	if (err) {
		console.log(err.message)
		return
	}
	console.log('Connected to MongoDB');
		const collection=client.db("test").collection("devices");
		client.close();
});


	// client.db().admin().listDatabases().then(result => {
	// 	console.log(result['databases'][7]['name']);	
	// })

	// client.db('sample_training').listCollections().toArray().then(result => {
	// 	console.log(result[4]);	
	// })

	// client.db('sample_training').collection('companies').find({name: 'Zenfolio'}).toArray().then(result => {
	// 	console.log(result);
	// })