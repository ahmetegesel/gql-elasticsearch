import DotObject from 'dot-object';

import { pipe } from './fp';

export const freeze = (obj) => Object.freeze(obj);

export const seal = (obj) => Object.seal(obj);

export const freezeAndSeal = (obj) => pipe(freeze, seal)(obj);

export const eachField = (fn) => (obj) =>
  Object.entries(obj).reduce((prev, next) => {
    const [nextKey, nextObject] = next;
    return { ...prev, ...{ [nextKey]: fn(nextObject) } };
  }, {});

export const transformToDotted = (obj, separator = '_') => {
  return new DotObject(separator).object(obj);
};

export const transformArrayToDoted = (array, separator = '_') => {
  return array.map((obj) => transformToDotted(obj, separator));
};
