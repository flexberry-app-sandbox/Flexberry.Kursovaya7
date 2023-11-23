import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as АвтоматизацияMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya7-автоматизация';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АвтоматизацияMixin, Validations, {
});

export default Model;
