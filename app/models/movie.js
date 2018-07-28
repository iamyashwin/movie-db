import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('date'),
  overview: DS.attr('string'),
  rating: DS.attr('string'),
  count: DS.attr('number'),
  poster: DS.attr(),
  thumbnail: DS.attr()
});
