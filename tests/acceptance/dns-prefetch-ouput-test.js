import Ember from 'ember';
import startApp from '../helpers/start-app';

QUnit.module('Acceptance: DnsPrefetchOuput');

QUnit.test('visiting /dns-prefetch-ouput', function(assert) {
  var prefetchLinks = Ember.$('[rel=dns-prefetch]');

  assert.equal(prefetchLinks.length, 2, 'two prefetch links are present');
  assert.equal(
    Ember.$(prefetchLinks[0]).attr('href'), '//google.com',
    'first URL is present');
  assert.equal(
    Ember.$(prefetchLinks[1]).attr('href'), '//yahoo.com',
    'second URL is present');
});
