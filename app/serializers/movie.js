import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse: function (store, primaryModelClass, payload) {
    return {
      data: payload.results.map((item)=> {
        return {
          id: item.id,
          type: 'movie',
          attributes: {
            title: item.title,
            date: item.release_date,
            overview: item.overview,
            rating: item.vote_average,
            count: item.vote_count,
            poster: `https://image.tmdb.org/t/p/w300/${item.poster_path}`,
            thumbnail: `https://image.tmdb.org/t/p/w92/${item.poster_path}`,
          }
        };
      }),
      meta: {
        page: payload.page,
        totalPages: payload.total_pages,
        totalResults: payload.total_results
      }
    };
  }
});
