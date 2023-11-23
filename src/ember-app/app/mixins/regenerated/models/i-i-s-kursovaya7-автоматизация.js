import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  покупка: DS.hasMany('i-i-s-kursovaya7-покупка', { inverse: 'автоматизация', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-kursovaya7-автоматизация.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  покупка: {
    descriptionKey: 'models.i-i-s-kursovaya7-автоматизация.validations.покупка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};
