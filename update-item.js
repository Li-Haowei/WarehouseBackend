const {MongoClient} = require('mongodb')
const {v4:uuidv4} = require('uuid')

const url = "DB COnnection String"
const client = new MongoClient(url)


module.exports = async function (context, req) {
    
    await client.connect();
    const database = client.db('warehouse');
    const collection = database.collection('operations');
    
    let data = {...req.body}
    let query = {_id:req.params.id}
    let newdata = {$set:data}
    
    let update = await collection.findOneAndUpdate(query, newdata, {returnOriginal: false});
    
    if(!update){
        return context.res = {
            status:400,
            body: "Could not find that operation"
        }
    }
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: update.value
    };
}
