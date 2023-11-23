import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya7-ценновая-стела', 'Unit | Serializer | i-i-s-kursovaya7-ценновая-стела', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya7-ценновая-стела',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya7-состояния',

    'model:i-i-s-kursovaya7-автоматизация',
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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
