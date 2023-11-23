import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостоянияEnum from '../enums/i-i-s-kursovaya7-состояния';

export default FlexberryEnum.extend({
  enum: СостоянияEnum,
  sourceType: 'IIS.Kursovaya7.Состояния'
});
