(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/math.js
  function add(a, b) {
    return a + b;
  }
  var init_math = __esm({
    "src/math.js"() {
    }
  });

  // src/index.js
  var require_src = __commonJS({
    "src/index.js"() {
      init_math();
      console.log("1 + 2 =", add(1, 2));
    }
  });
  require_src();
})();
//# sourceMappingURL=bundle.js.map
