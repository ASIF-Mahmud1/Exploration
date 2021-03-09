// // Load the full build.
var _ = require('lodash')

var a = {prop1: {prop1_1: 'text 1', prop1_2: 'text 2', prop1_3: [1, 2, 3]}, prop2: 2, prop3: 3};
var b = {prop1: {prop1_1: 'text 1', prop1_3: [1, 2]}, prop2: 2, prop3: 4};

var diff = function(obj1, obj2) {
  return _.reduce(obj1, function(result, value, key) {
    if (_.isPlainObject(value)) {
      result[key] = diff(value, obj2[key]);
    } else if (!_.isEqual(value, obj2[key])) {
      result[key] = value;
    }
    return result;
  }, {});
};

var res1 = diff(a, b);
var res2 = diff(b, a);
console.log("First ",res1, );
console.log("Second ",res2);
// /////////////////////////////////////////////////////////////////////////////////
