import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya7.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya7.title'),
          children: [{
            link: 'i-i-s-kursovaya7-резервуар-l',
            caption: i18n.t('forms.application.sitemap.kursovaya7.i-i-s-kursovaya7-резервуар-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya7.i-i-s-kursovaya7-резервуар-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-kursovaya7-покупка-l',
            caption: i18n.t('forms.application.sitemap.kursovaya7.i-i-s-kursovaya7-покупка-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya7.i-i-s-kursovaya7-покупка-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-kursovaya7-остаток-l',
            caption: i18n.t('forms.application.sitemap.kursovaya7.i-i-s-kursovaya7-остаток-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya7.i-i-s-kursovaya7-остаток-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kursovaya7-база-клиента-l',
            caption: i18n.t('forms.application.sitemap.kursovaya7.i-i-s-kursovaya7-база-клиента-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya7.i-i-s-kursovaya7-база-клиента-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kursovaya7-ценновая-стела-l',
            caption: i18n.t('forms.application.sitemap.kursovaya7.i-i-s-kursovaya7-ценновая-стела-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya7.i-i-s-kursovaya7-ценновая-стела-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})