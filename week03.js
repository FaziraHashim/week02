const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.gs1ed.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err){
        console.log(err.message)
        return
      }
      console.log("Connected to mongodb");
      
      client.db('MyDatabase').collection('people').insertOne({
        name: 'Edgardo Corkery',
        city: '武 志泽原市',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/265.jpg  ',
        pass: '$2a$10$bZUsxUAvOZWLO0mPSI.0jO7hcv9Wf45qAJGDD1kZpUBumQcjrNEHu',
      }).then(result => {
        console.log(result);
      //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
/*client.db('sample_training').collection('inspections').findOne().then(result => {
console.log(result);*/
  //})
});
});