(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.AlpineClipboard = factory());
}(this, (function () { 'use strict';

    const AlpineElse = {
      start() {
        if (!window.Alpine) {
          throw new Error('Alpine is require for `x-else` to work.');
        }
      }

    };

    const deferrer = window.deferLoadingAlpine || (callback => callback());

    window.deferLoadingAlpine = function (callback) {
      AlpineElse.start();
      deferrer(callback);
    };

    return AlpineElse;

})));
//# sourceMappingURL=alpine-clipboard.js.map
