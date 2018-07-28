import DS from 'ember-data';
import ENV from 'movie-db/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.host,
  apiKey: ENV.apiKey,

  // getting the movie list -- query request

  query: function query(store, type, query) {
    let url = `${this.get('host')}/search/movie?api_key=${this.get('apiKey')}&query=${query.query}&page=${query.page}`;
    return this.ajax(url, 'GET');
  }

});
