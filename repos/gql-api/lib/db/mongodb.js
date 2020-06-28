import R from 'ramda';
import { MongoClient, ObjectId } from 'mongodb';

const localUrl = process.env.MONGO_NODE;

export const createClient = R.memoizeWith(
  R.identity,
  R.curry((url) => {
    console.log('invoked');
    return MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  })
);

const useDatabase = R.curry((databaseName, client) => client.db(databaseName));

const useCollection = R.curry((collectionName, db) => db.collection(collectionName));

const useProductDatabase = useDatabase('products');

const useLocalProductDatabase = () => {
  return R.pipe(
    () => createClient(localUrl),
    R.andThen((client) => useProductDatabase(client))
  )();
};

const findByObjectId = (id, collection) => collection.findOne(new ObjectId(id));

useLocalProductDatabase().then(async (db) => {
  const products = useCollection('products', db);

  await R.pipe(
    findByObjectId,
    R.andThen((result) => console.log(result))
  )('5ef2728266489fa0f8d1f18d', products);
});
