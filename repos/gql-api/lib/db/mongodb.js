import R from 'ramda';
import { MongoClient } from 'mongodb';

const localUrl = process.env.MONGO_NODE;

export const createDbObject = R.curry(async (client, dbName, collections) => {
  const clientInstance = await client;
  return collections.reduce(
    (dbObject, collection) => ({
      ...dbObject,
      [collection]: clientInstance.db(dbName).collection(collection),
    }),
    {}
  );
});

export const createClient = R.curry((url) => {
  return MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

const useDbCollection = (dbName, collection) =>
  R.pipe(
    createClient,
    R.andThen((client) => createDbObject(client, dbName, [collection])),
    R.andThen((db) => db[collection])
  );

const useLocalDbCollection = (dbName, collection) => useDbCollection(dbName, collection)(localUrl);

const useProductDbCollection = (collection) => useDbCollection('products', collection);

const useLocalProductDbCollection = (collection) => useLocalDbCollection('products', collection);

useLocalProductDbCollection('products').then(async (products) => {
  console.log(await products.findOne({ name: 'Product 1' }));
});
useProductDbCollection('products')(localUrl).then(async (products) => {
  console.log(await products.findOne({ name: 'Product 1' }));
});
