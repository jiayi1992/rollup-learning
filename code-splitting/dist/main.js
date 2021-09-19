System.register([], function (exports, module) {
  'use strict';
  return {
    execute: function () {

      exports('default', main);

      function main () {
        module.import('./foo-feee68b6.js').then(({ default: foo }) => console.log(foo));
      }

    }
  };
});
