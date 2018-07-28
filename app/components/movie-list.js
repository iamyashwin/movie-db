import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    // action to show more details on click
    showDetails(movie) {
      this.set("movie", movie);
      this.set("upvote", localStorage.getItem(`upvote-${this.get("movie.id")}`));
      this.set("downvote", localStorage.getItem(`downvote-${this.get("movie.id")}`));
      this.set("showDetails", true);
    }
  }
});
