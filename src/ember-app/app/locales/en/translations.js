import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya7БазаКлиентаLForm from './forms/i-i-s-kursovaya7-база-клиента-l';
import IISKursovaya7ОстатокLForm from './forms/i-i-s-kursovaya7-остаток-l';
import IISKursovaya7ПокупкаLForm from './forms/i-i-s-kursovaya7-покупка-l';
import IISKursovaya7РезервуарLForm from './forms/i-i-s-kursovaya7-резервуар-l';
import IISKursovaya7ЦенноваяСтелаLForm from './forms/i-i-s-kursovaya7-ценновая-стела-l';
import IISKursovaya7БазаКлиентаEForm from './forms/i-i-s-kursovaya7-база-клиента-e';
import IISKursovaya7ОстатокEForm from './forms/i-i-s-kursovaya7-остаток-e';
import IISKursovaya7ПокупкаEForm from './forms/i-i-s-kursovaya7-покупка-e';
import IISKursovaya7РезервуарEForm from './forms/i-i-s-kursovaya7-резервуар-e';
import IISKursovaya7ЦенноваяСтелаEForm from './forms/i-i-s-kursovaya7-ценновая-стела-e';
import IISKursovaya7АвтоматизацияModel from './models/i-i-s-kursovaya7-автоматизация';
import IISKursovaya7БазаКлиентаModel from './models/i-i-s-kursovaya7-база-клиента';
import IISKursovaya7ОстатокModel from './models/i-i-s-kursovaya7-остаток';
import IISKursovaya7ПокупкаModel from './models/i-i-s-kursovaya7-покупка';
import IISKursovaya7РезервуарModel from './models/i-i-s-kursovaya7-резервуар';
import IISKursovaya7ЦенноваяСтелаModel from './models/i-i-s-kursovaya7-ценновая-стела';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya7-автоматизация': IISKursovaya7АвтоматизацияModel,
    'i-i-s-kursovaya7-база-клиента': IISKursovaya7БазаКлиентаModel,
    'i-i-s-kursovaya7-остаток': IISKursovaya7ОстатокModel,
    'i-i-s-kursovaya7-покупка': IISKursovaya7ПокупкаModel,
    'i-i-s-kursovaya7-резервуар': IISKursovaya7РезервуарModel,
    'i-i-s-kursovaya7-ценновая-стела': IISKursovaya7ЦенноваяСтелаModel
  },

  'application-name': 'Kursovaya7',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya7',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya7',
          title: 'Kursovaya7'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kursovaya7: {
          caption: 'Kursovaya7',
          title: 'Kursovaya7',
          'i-i-s-kursovaya7-резервуар-l': {
            caption: 'Резервуар',
            title: ''
          },
          'i-i-s-kursovaya7-покупка-l': {
            caption: 'Покупка',
            title: ''
          },
          'i-i-s-kursovaya7-остаток-l': {
            caption: 'Остаток',
            title: ''
          },
          'i-i-s-kursovaya7-база-клиента-l': {
            caption: 'База клиента',
            title: ''
          },
          'i-i-s-kursovaya7-ценновая-стела-l': {
            caption: 'Ценновая стела',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya7-база-клиента-l': IISKursovaya7БазаКлиентаLForm,
    'i-i-s-kursovaya7-остаток-l': IISKursovaya7ОстатокLForm,
    'i-i-s-kursovaya7-покупка-l': IISKursovaya7ПокупкаLForm,
    'i-i-s-kursovaya7-резервуар-l': IISKursovaya7РезервуарLForm,
    'i-i-s-kursovaya7-ценновая-стела-l': IISKursovaya7ЦенноваяСтелаLForm,
    'i-i-s-kursovaya7-база-клиента-e': IISKursovaya7БазаКлиентаEForm,
    'i-i-s-kursovaya7-остаток-e': IISKursovaya7ОстатокEForm,
    'i-i-s-kursovaya7-покупка-e': IISKursovaya7ПокупкаEForm,
    'i-i-s-kursovaya7-резервуар-e': IISKursovaya7РезервуарEForm,
    'i-i-s-kursovaya7-ценновая-стела-e': IISKursovaya7ЦенноваяСтелаEForm
  },

});

export default translations;
