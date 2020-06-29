import R from 'ramda';
import { MongoClient, ObjectId } from 'mongodb';

const defaultToEmptyObject = R.defaultTo({});

const localUrl = 'mongodb://root:rootpassword@localhost:27017';

export const DEFAULT_CLIENT_OPTIONS = {
  url: localUrl,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const createClient = R.memoizeWith(R.identity, (options) => {
  const finalOptions = R.mergeDeepRight(DEFAULT_CLIENT_OPTIONS, defaultToEmptyObject(options));
  const { url } = finalOptions;

  return MongoClient.connect(url, R.omit(['url'], finalOptions));
});

const useDatabaseOn = R.curry((clientOptions, databaseName) =>
  R.pipe(
    () => createClient(clientOptions),
    R.andThen((client) => client.db(databaseName))
  )()
);

const useDatabase = useDatabaseOn(undefined); // will use default clientOptions, which means local

const useCollection = R.curry((clientOptions, databaseName, collectionName) =>
  R.pipe(
    () => useDatabaseOn(clientOptions, databaseName),
    R.andThen((db) => db.collection(collectionName))
  )()
);

const useProductsCollection = useCollection(R.__, 'products', 'products');

const useProductsCollectionOnLocal = () => useProductsCollection(undefined); // if undefined, will use default options

const useCollectionOnLocalProducts = useCollection(undefined, 'products');

const findByObjectId = (id, collection) => collection.findOne(new ObjectId(id));

useProductsCollectionOnLocal().then(async (products) => {
  const result = await findByObjectId('5ef2728266489fa0f8d1f18d', products);

  console.log(result);
});

useCollectionOnLocalProducts('products').then(async (products) => {
  const result = await findByObjectId('5ef2728266489fa0f8d1f18d', products);

  console.log(result);
});

useDatabase('products').then(async (db) => {
  const result = await findByObjectId('5ef2728266489fa0f8d1f18d', db.collection('products'));

  console.log(result);
});
