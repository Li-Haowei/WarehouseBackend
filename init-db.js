const {MongoClient} = require('mongodb')
const {v4:uuidv4} = require('uuid')

const url = "DB Connection String"
const client = new MongoClient(url)

let operations = [
    
    {
        _id: uuidv4(),
        ProductId:"1", 
        Product:"One", 
        Operation:"Shipped", 
        ShipmentId:"11", 
        Date:"09/29/2022", 
        Count:100, 
        InvoiceId:"111", 
        Recipient:"Mr.One", 
        Address:"America", 
        Phone:"111-111-1111"
    },
    {
        _id: uuidv4(),
        ProductId:"1", 
        Product:"One", 
        Operation:"Received", 
        ShipmentId:"11", 
        Date:"09/29/2022", 
        Count:100, 
        Phone:"111-111-1111"
    },
    {
        _id: uuidv4(),
        ProductId:"1", 
        Product:"One", 
        Operation:"Received", 
        ShipmentId:"11", 
        Date:"09/29/2022", 
        Count:100, 
        Phone:"111-111-1111"
    },
    {
        _id: uuidv4(),
        ProductId:"1", 
        Product:"One", 
        Operation:"Returned", 
        ShipmentId:"11", 
        Date:"09/30/2022", 
        Count:100, 
        InvoiceId:"111"
    },
    {
        _id: uuidv4(),
        ProductId:"1", 
        Product:"One", 
        Operation:"Shipped", 
        ShipmentId:"11", 
        Date:"09/29/2022", 
        Count:100, 
        InvoiceId:"111", 
        Recipient:"Mr.One", 
        Addres:"America", 
        Phone:"111-111-1111"
    },
    {
        _id: uuidv4(),
        ProductId:"2", 
        Product:"Two", 
        Operation:"Shipped", 
        ShipmentId:"22", 
        Date:"09/29/2022", 
        Count:200, 
        InvoiceId:"222", 
        Recipient:"Mr.Two", 
        Address:"America", 
        Phone:"222-222-2222"
    },
    {
        _id: uuidv4(),
        ProductId :"2", 
        Product :"Two", 
        Operation :"Received", 
        ShipmentId :"22", 
        Date :"09/29/2022", 
        Count :200, 
        Phone :"222-222-2222"
    },
    {
        _id: uuidv4(),
        ProductId:"2", 
        Product:"Two", 
        Operation:"Received", 
        ShipmentId:"22", 
        Date:"09/29/2022", 
        Count:200, 
        Phone:"222-222-2222"
    },
    {
        _id: uuidv4(),
        ProductId:"2", 
        Product:"Two", 
        Operation:"Returned", 
        ShipmentId:"22", 
        Date:"09/30/2022", 
        Count:200, 
        InvoiceId:"222"
    },
    {
        _id: uuidv4(),
        ProductId:"2", 
        Product:"Two", 
        Operation:"Shipped", 
        ShipmentId:"22", 
        Date:"09/29/2022", 
        Count:200, 
        InvoiceId:"222", 
        Recipient:"Mr.Two", 
        Address:"America", 
        Phone:"222-222-2222"
    },
    {
        _id: uuidv4(),
        ProductId:"3", 
        Product:"Three", 
        Operation:"Shipped", 
        ShipmentId:"33", 
        Date:"09/39/3033", 
        Count:300, 
        InvoiceId:"333", 
        Recipient:"Mr.Three", 
        Address:"America", 
        Phone:"333-333-3333"
    },
    {
        _id: uuidv4(),
        ProductId :"3", 
        Product :"Three", 
        Operation :"Received", 
        ShipmentId :"33", 
        Date :"09/39/3033", 
        Count :300, 
        Phone :"333-333-3333"
    },
    {
        _id: uuidv4(),
        ProductId:"3", 
        Product:"Three", 
        Operation:"Received", 
        ShipmentId:"33", 
        Date:"09/39/3033", 
        Count:300, 
        Phone:"333-333-3333"
    },
    {
        _id: uuidv4(),
        ProductId:"3", 
        Product:"Three", 
        Operation:"Returned", 
        ShipmentId:"33", 
        Date:"09/30/3033", 
        Count:300, 
        InvoiceId:"333"
    },
    {
        _id: uuidv4(),
        ProductId:"3", 
        Product:"Three", 
        Operation:"Shipped", 
        ShipmentId:"33", 
        Date:"09/39/3033", 
        Count:300, 
        InvoiceId:"333", 
        Recipient:"Mr.Three", 
        Address:"America", 
        Phone:"333-333-3333"
    },
    {
        _id: uuidv4(),
        ProductId:"5", 
        Product:"Five", 
        Operation:"Shipped", 
        ShipmentId:"55", 
        Date:"09/29/2022", 
        Count:500, 
        InvoiceId:"555", 
        Recipient:"Mr.Five", 
        Address:"America", 
        Phone:"555-555-5555"
    },
    {
        _id: uuidv4(),
        ProductId:"5", 
        Product:"Five", 
        Operation:"Received", 
        ShipmentId:"55", 
        Date:"09/29/2022", 
        Count:500, 
        Phone:"555-555-5555"
    },
    {
        _id: uuidv4(),
        ProductId:"5", 
        Product:"Five", 
        Operation:"Received", 
        ShipmentId:"55", 
        Date:"09/29/2022", 
        Count:500, 
        Phone:"555-555-5555"
    },
    {
        _id: uuidv4(),
        ProductId:"5", 
        Product:"Five", 
        Operation:"Returned", 
        ShipmentId:"55", 
        Date:"09/30/2022", 
        Count:500, 
        InvoiceId:"555"
    },
    {
        _id: uuidv4(),
        ProductId:"5", 
        Product:"Five", 
        Operation:"Shipped", 
        ShipmentId:"55", 
        Date:"09/29/2022", 
        Count:500, 
        InvoiceId:"555", 
        Recipient:"Mr.Five", 
        Addres:"America", 
        Phone:"555-555-5555"
    }]

module.exports = async function (context, req) {
    
    await client.connect();
    const database = client.db('warehouse');
    const collection = database.collection('operations')
    await collection.deleteMany({})
    await collection.insertMany(operations)
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "init is done"
    };
}
