import Ember from 'ember';

export default Ember.Component.extend({

  query: "",
  page: 1,
  maxOffset: 5,

  postDot: true,
  preDot: false,

  // checking if not first page
  isNotFirstPage: Ember.computed.gt('page', 1),

  // checking if not last page
  isNotLastPage: (function() {
    const totalPages = this.get("totalPages");
    const page = this.get("page");
    return page !== totalPages;
  }).property("page", "totalPages"),

  // getting page numbers
  pages: (function() {
    const totalPages = this.get("totalPages");
    const maxOffset = this.get("maxOffset");
    let page = this.get("page");
    let count = page + maxOffset;

    // show maxOffset+1(total page numbers) pages if totalPages is equal to maxOffset+1

    if(totalPages === maxOffset+1) {
      count = maxOffset+1;
    }

    // show the no of pages available if totalPages is less than maxOffset+1

    else if(totalPages < maxOffset+1) {
      count = totalPages;
    }

    // hide page numbers if there is only 1 page

    if(totalPages === 1) {
      count = 0;
    }

    // set page to 1

    if(totalPages <= maxOffset+1) {
      page = 1;
    }
    var pages = [];
    for(var value = page; value <= count; value++) {
      pages.push(value);
    }
    return pages;
  }).property("page", "totalPages"),

  actions: {

    // jump to specific page number
    jumpToPage(page) {
      this.set("page", page);
      this.send("searchMovie");
    },

    // load next page data
    nextPage() {
      let page = this.get("page");
      page = page + 1;
      this.set("page", page);
      this.send("searchMovie");
    },

    // load previous page data
    previousPage() {
      let page = this.get("page");
      page = page - 1;
      this.set("page", page);
      this.send("searchMovie");
    },

    // search movie
    searchMovie() {
      this.set("isSearching", true);
      const query = this.get("query");
      const page = this.get("page");
      const movies = this.get("store").query('movie', {query: query, page: page});
      this.set("movies", movies);
      this.set("searchQuery", query);
      movies.then((data) => {
        this.set("isSearching", false);
        this.set("totalPages", data.meta.totalPages);
        this.set("totalResults", data.meta.totalResults);
        this.set("noResult", false);
        if(data.meta.totalResults === 0) {
          this.set("noResult", true);
        }
        this.set("page", data.meta.page);
        this.set("current", data.meta.page);
      });
    }
  }
});
