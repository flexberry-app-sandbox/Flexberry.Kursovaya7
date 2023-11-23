import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya7-покупка', 'Unit | Model | i-i-s-kursovaya7-покупка', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya7-база-клиента',
    'model:i-i-s-kursovaya7-остаток',
    'model:i-i-s-kursovaya7-покупка',
    'model:i-i-s-kursovaya7-резервуар',
    'model:i-i-s-kursovaya7-ценновая-стела',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
