
const util = {};

util.createError = (code, placeholderValue, data, status, message) => {
  const errObj = {
    status,
    message,
    code
  };

  if (placeholderValue) {
    if (util.isObject(placeholderValue) || Array.isArray(placeholderValue)) {
      errObj.placeholderValue = placeholderValue;
    } else {
      errObj.placeholderValue = [placeholderValue];
    }
  }

  if (data) errObj.data = data;

  return new Error(JSON.stringify(errObj));
};

util.isObject = (obj) => {
  return !(Object.prototype.toString.call(obj) !== '[object Object]' || Object.getOwnPropertyNames(obj).indexOf('_bsontype') >= 0 || moment.isMoment(obj));
};

export default util;
