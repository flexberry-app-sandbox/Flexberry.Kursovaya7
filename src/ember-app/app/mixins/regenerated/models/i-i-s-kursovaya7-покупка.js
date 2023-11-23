import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('decimal'),
  сумма: DS.attr('decimal'),
  базаКлиента: DS.belongsTo('i-i-s-kursovaya7-база-клиента', { inverse: null, async: false }),
  остаток: DS.belongsTo('i-i-s-kursovaya7-остаток', { inverse: null, async: false }),
  ценноваяСтела: DS.belongsTo('i-i-s-kursovaya7-ценновая-стела', { inverse: null, async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-kursovaya7-покупка.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-kursovaya7-покупка.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  базаКлиента: {
    descriptionKey: 'models.i-i-s-kursovaya7-покупка.validations.базаКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  остаток: {
    descriptionKey: 'models.i-i-s-kursovaya7-покупка.validations.остаток.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ценноваяСтела: {
    descriptionKey: 'models.i-i-s-kursovaya7-покупка.validations.ценноваяСтела.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПокупкаE', 'i-i-s-kursovaya7-покупка', {
    сумма: attr('Сумма', { index: 0 }),
    количество: attr('Количество', { index: 1 })
  });

  modelClass.defineProjection('ПокупкаL', 'i-i-s-kursovaya7-покупка', {
    сумма: attr('Сумма', { index: 0 }),
    количество: attr('Количество', { index: 1 })
  });
};
