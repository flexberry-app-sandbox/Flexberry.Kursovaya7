import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya7-база-клиента-l');
  this.route('i-i-s-kursovaya7-база-клиента-e',
  { path: 'i-i-s-kursovaya7-база-клиента-e/:id' });
  this.route('i-i-s-kursovaya7-база-клиента-e.new',
  { path: 'i-i-s-kursovaya7-база-клиента-e/new' });
  this.route('i-i-s-kursovaya7-остаток-l');
  this.route('i-i-s-kursovaya7-остаток-e',
  { path: 'i-i-s-kursovaya7-остаток-e/:id' });
  this.route('i-i-s-kursovaya7-остаток-e.new',
  { path: 'i-i-s-kursovaya7-остаток-e/new' });
  this.route('i-i-s-kursovaya7-покупка-l');
  this.route('i-i-s-kursovaya7-покупка-e',
  { path: 'i-i-s-kursovaya7-покупка-e/:id' });
  this.route('i-i-s-kursovaya7-покупка-e.new',
  { path: 'i-i-s-kursovaya7-покупка-e/new' });
  this.route('i-i-s-kursovaya7-резервуар-l');
  this.route('i-i-s-kursovaya7-резервуар-e',
  { path: 'i-i-s-kursovaya7-резервуар-e/:id' });
  this.route('i-i-s-kursovaya7-резервуар-e.new',
  { path: 'i-i-s-kursovaya7-резервуар-e/new' });
  this.route('i-i-s-kursovaya7-ценновая-стела-l');
  this.route('i-i-s-kursovaya7-ценновая-стела-e',
  { path: 'i-i-s-kursovaya7-ценновая-стела-e/:id' });
  this.route('i-i-s-kursovaya7-ценновая-стела-e.new',
  { path: 'i-i-s-kursovaya7-ценновая-стела-e/new' });
});

export default Router;
