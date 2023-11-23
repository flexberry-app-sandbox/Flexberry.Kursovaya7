import { Serializer as РезервуарSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya7-резервуар';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РезервуарSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
