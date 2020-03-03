require('dotenv').config();

const {MongoClient} = require('mongodb');
const uri = process.env.MONGOURL;

const client = new MongoClient(uri,{ useUnifiedTopology: true });

async function createListing(client, newListing){
    const result = await client.db("Notes").collection("Notes").insertOne(newListing);
  
}


async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 

async function Manden(){


try {

    await client.connect();
    await createListing(client,{
        title:"Python mergin two files in Pandas",
        description:`for i in python:
                            print(i)
                     function.exit()    `


    })

} catch (e) {

    console.error(e);

}finally{

    await client.close();
}

}


Manden().catch(console.error);