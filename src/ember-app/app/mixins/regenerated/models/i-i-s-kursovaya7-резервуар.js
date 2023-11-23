import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  idР: DS.attr('number'),
  колвоТоп: DS.attr('decimal'),
  состояние: DS.attr('i-i-s-kursovaya7-состояния'),
  остаток: DS.belongsTo('i-i-s-kursovaya7-остаток', { inverse: null, async: false })
});

export let ValidationRules = {
  idР: {
    descriptionKey: 'models.i-i-s-kursovaya7-резервуар.validations.idР.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колвоТоп: {
    descriptionKey: 'models.i-i-s-kursovaya7-резервуар.validations.колвоТоп.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-kursovaya7-резервуар.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  остаток: {
    descriptionKey: 'models.i-i-s-kursovaya7-резервуар.validations.остаток.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РезервуарE', 'i-i-s-kursovaya7-резервуар', {
    колвоТоп: attr('Колво топ', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    idР: attr('Id Р', { index: 2 }),
    остаток: belongsTo('i-i-s-kursovaya7-остаток', 'Остаток', {
      номер: attr('Номер', { index: 4, hidden: true }),
      колво: attr('Колво', { index: 5 })
    }, { index: 3, displayMemberPath: 'номер' })
  });

  modelClass.defineProjection('РезервуарL', 'i-i-s-kursovaya7-резервуар', {
    колвоТоп: attr('Колво топ', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    idР: attr('Id Р', { index: 2 }),
    остаток: belongsTo('i-i-s-kursovaya7-остаток', 'Номер', {
      номер: attr('Номер', { index: 3 }),
      колво: attr('Колво', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
