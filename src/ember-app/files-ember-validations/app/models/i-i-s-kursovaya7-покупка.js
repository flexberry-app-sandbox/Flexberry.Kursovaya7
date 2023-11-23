import {
  defineNamespace,
  defineProjections,
  Model as ПокупкаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya7-покупка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПокупкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
