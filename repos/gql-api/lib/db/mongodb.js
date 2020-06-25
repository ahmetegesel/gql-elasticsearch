import R from 'ramda';
import { MongoClient, ObjectId } from 'mongodb';

const localUrl = 'mongodb://root:rootpassword@localhost:27017';

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

const useClient = R.curry((url) => createClient(url));

const useDatabase = R.curry((databasseName, client) => client.db(databasseName));

const useCollection = R.curry((collectionName, db) => db.collection(collectionName));

const useProductDatabase = useDatabase('products');

const useLocalProductDatabase = () => {
  return R.pipe(
    () => createClient(localUrl),
    R.andThen((client) => useProductDatabase(client))
  )();
};

const findBy = R.curry((predicate, collection) => collection.findOne(predicate));

const findById = (id, collection) => findBy({ _id: id }, collection);

const findByObjectId = (id, collection) => findById(new ObjectId(id), collection);

useLocalProductDatabase().then(async (db) => {
  const products = useCollection('products', db);

  await R.pipe(
    findBy,
    R.andThen((result) => console.log(result))
  )({ name: 'Product 1' }, products);
});

useLocalProductDatabase().then(async (db) => {
  const products = useCollection('products', db);

  await R.pipe(
    findByObjectId,
    R.andThen((result) => console.log(result))
  )('5ef2728266489fa0f8d1f18d', products);
});
