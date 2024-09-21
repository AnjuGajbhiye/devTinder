const mongoose = require('mongoose');

const dbConnection = async () => {
    const url = "mongodb+srv://gajbhiyeanju:CX8zgyIhNbzREpQk@namaste-node.hlubm.mongodb.net/devTinder";
    await mongoose.connect(url)
}

module.exports={
    dbConnection
}




// Database Name
// const dbName = 'HelloWorld';

// async function main() {
//     // Use connect method to connect to the server
//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     const collection = db.collection('MyCollection');

//     // the following code examples can be pasted here...
//     const data = {
//         name: "dipika",
//         email: "dipika@gmail.com",
//         address: "Mumbai"
//     }
//     const insertResult = await collection.insertMany([data]);
//     console.log('Inserted documents =>', insertResult);


//     const findResult = await collection.find({}).toArray();
//     console.log('Found documents =>', findResult);
//     return 'done.';
// }

// main()
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => client.close());