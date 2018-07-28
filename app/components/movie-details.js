import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    // upvote a movie

    upVote() {
      let upvote = localStorage.getItem(`upvote-${this.get("movie.id")}`);
      upvote = parseInt(upvote) || 0;
      upvote = upvote + 1;
      localStorage.setItem(`upvote-${this.get("movie.id")}`, upvote);
      this.set("upvote", upvote);
    },

    // downvote a movie

    downVote() {
      let downvote = localStorage.getItem(`downvote-${this.get("movie.id")}`);
      downvote = parseInt(downvote) || 0;
      downvote = downvote + 1;
      localStorage.setItem(`downvote-${this.get("movie.id")}`, downvote);
      this.set("downvote", downvote);
    }
  }

});
