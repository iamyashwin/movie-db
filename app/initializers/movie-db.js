export function initialize(application) {

  // injecting store service to all the components

  application.inject('component', 'store', 'service:store');
}

export default {
  name: 'movie-db',
  initialize
};
