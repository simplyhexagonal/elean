var elean = (() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default,
    version: () => version
  });

  // package.json
  var version = "1.0.0";

  // src/index.ts
  var src_default = (envVar) => {
    const strVar = String(envVar).toLowerCase();
    if (strVar === "" || strVar === "false" || strVar === "0" || strVar === "null" || strVar === "undefined") {
      return false;
    }
    return true;
  };
  return src_exports;
})();
//# sourceMappingURL=elean.js.map
'undefined'!=typeof module&&(module.exports=elean.default),'undefined'!=typeof window&&(elean=elean.default);