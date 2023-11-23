import {
  defineNamespace,
  Model as АвтоматизацияMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya7-автоматизация';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АвтоматизацияMixin, {
});

defineNamespace(Model);

export default Model;
