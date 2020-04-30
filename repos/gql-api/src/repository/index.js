import { freezeAndSeal, eachField } from '../../lib/object';

import brand from './brand';
import product from './product';
import category from './category';

const repositories = {
  brand,
  product,
  category,
};

export default eachField(freezeAndSeal)(repositories);
