const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

const url = "DB Connection String"
const client = new MongoClient(url);

module.exports = async function (context, req) {
 
  await client.connect();
  const database = client.db('warehouse');
  const collection = database.collection('operations');

  let operation = await collection.deleteOne({ _id : req.params.id })
  
  if (!operation){
      return context.res = {
          status:400,
          body: "Couldnt find that operation"
      }
  }
 
   return (context.res = {
        // status: 200, /* Defaults to 200 */
        body: "removed operation"
    });
};
