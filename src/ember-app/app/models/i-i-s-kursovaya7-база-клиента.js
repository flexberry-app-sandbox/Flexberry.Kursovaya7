import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as БазаКлиентаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya7-база-клиента';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(БазаКлиентаMixin, Validations, {
});

defineProjections(Model);

export default Model;
