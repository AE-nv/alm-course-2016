'use strict';

exports.sum = function(a,b) {
   if (b === undefined) {
      return a;
   } else {
      return a + b;
   }
};
