import mongodb from 'mongodb';

const { MongoClient } = mongodb;

const Config = {
  url: 'mongodb://localhost:27017',
  dbName: 'aws'
};



let MONGO = {
  connection: null,
  connect: async function() {
    const res = await MongoClient.connect(`${Config.url}/${Config.dbName}`);
    this.connection = res.db(Config.dbName);
  },
};

MONGO.connect();

// MongoClient.connect(`${Config.url}/${Config.dbName}`, (err, db) => {
//   if (err) console.log(err);

//   db = db;
// });

export default MONGO;