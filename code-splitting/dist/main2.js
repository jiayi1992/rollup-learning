System.register(['./foo-feee68b6.js'], function (exports) {
  'use strict';
  var foo;
  return {
    setters: [function (module) {
      foo = module.default;
    }],
    execute: function () {

      exports('default', main2);

      function main2 () {
        console.log(foo);
      }

    }
  };
});
