// helper to set active class

import Ember from 'ember';

export function paginateClass(params) {
  const [current, page] = params;
  if (current === page) {
    return "is-active";
  }
}

export default Ember.Helper.helper(paginateClass);
