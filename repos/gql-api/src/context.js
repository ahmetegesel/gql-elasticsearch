import { freezeAndSeal } from '../lib/object';
import repositories from './repository';

export const initializeContext = async (/* options */) => {
  const context = {
    repositories,
  };

  return freezeAndSeal(context);
};
