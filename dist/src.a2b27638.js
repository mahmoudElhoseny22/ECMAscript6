// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
//Template literals / Template Strings----------------
//(1) backtek ``  &  round bracket()
//(2) تم تغير عملية الربط فى الاصدار الاخير من خلال دولار ساين بدلا من الربط بال بالبلس
//  ex
// var name = "mahmoud";
// var age = "27" ;
// // var output = 'I\'\am '+name+' , and '+age+' years old';
// console.log(output);

// hgmodern version
// var name = "mahmoud";
// var age = 27;

// var outPut = `I'am ${name} , and I have ${age+2}  ... I'am ${age > 20 ? "too old" : "steill Young"}` ;

// console.log(outPut);

// ************************************************

// Var, Let and Const ----------------------------------
// ==========================
// // var is function scope
// ==========================

// function Person() {
//   var namex = "ahmed";
// }
// Person()
// console. log(namex)
// not block scope
// var nameScope = "ahned"
// var time = 5;
// if (time === 5){
//   var nameScope = "kareen"
// }
// console.log(nameScope)

// for(var i = 0; i <= 10; i++){

// }
// console.log(i)

// console.log(window)
// ================================
// // var  not support BlockScope
// ================================

// re-declared (إعادة تصريح )
// var myName = "ahmedAli" //re assign (إعادة إدخال)
// var myName = "ahmedMahmoud"
// var myName = "ahmed"
// console.log(myName);

// Hoising  (هي عملية ارسال البيانات لحين التعرف عليها داخل الذاكرة )

// Variable problems
// 1- var  not support BlockScope
//2-  does not support Scope  if  and for and while loop
//3- Take a place in the global ( ياخذ مكان فى السيستم وده بيعمل مشكلات كثير)
//4- Define more than one variable with the same name and it works normally  (تعريف اكثر من متغير بنفس الاسم ويشتغل عادي )

//=========== const = consten = يعني ثوابت =================
//defrant betwen let and const
//reject re-declard  //  reject re-declard (يعني مينفعش اعمل اكتر من متغير بنفس الاسم مع بعض ولكن عادي لو متغيرين بنفس الاسم مثلا فنكشن وواحد بره الفانكشن او متغير عادي وبنفس الاسم بتاع المتغير يكون فى الويندو اى جلوبل)
//enable re-assign  //  reject re-assign (معناها انى ادمر ةانشئ من جديد  )
// both support  function   //  block scope
// reject globally scoped
// ==========================
// re-declard (يعني اعمل متغير من اول وجديد )
// =========================
//************************************************************************************************************* */
//===================================
//Primitive Types vs Reference Types
//====================================
//(يعني البرمتف تايب ملهاش ميسود )
//Primitive type/prop: (immutabl types(غير قابلة للتعديل)) working: (pass by valu)
//undefined
//Boolean
//Number
//Strting
//Biglnt
//Symbol
// ===== ex ====
// let name = "mahmoud"
// name.push("s")
// console.log(name);

//reference type/ prop: (mutatbl type( قابلة للتعديل)) working: (pass by object)
//array, object, function, date
// ===== ex ====
// const name1 = ["mahmoud" , "ali"];
// name1 = ["mahmoud" , "ali"]; (اسمها ري اسيلن وده كده غلط مليون المية )(بمعني انى بعمل ديستروي (المتغير الاول )يعني بدمرها خالص من الميموري وبحط مكانها القيمة الجديدة )
// name.push("ali")
// name[0] = "mahmmoud"
// console.log(name)
// علشان ادخل قيمة للريفرنس هنا لكم انفذ الكود ده
// const name2 = object.assign([],name1);
// names.push("test")
// console.log(name2)
//***************************************************************************************** */

//=========================================
//Const & Objects (Array, Function & object) (استخدام ال const من الثلاثة دول )
//=========================================
//***************************************************** */
//=========================================
// Arrow function
//=========================================
//ex

// const myName = (parametr) => {
// }
// const myName = name or (name) =>{
//   console.log(name)
//    };

//********** (او بالشكل دة)***********/
// const myName = (name) =>{
//  return (name)
// };
// let x  = myName ("Ahmed")
// console.log(x);
//********** طالما هي ريتارن ممكن استخدم الشكل ده واشيل الكاري براكت واشيل كلمة ريتارن ***********/
// const myName = (name) => (name === "mahmoud" ? "hallo worlad" : "i dont no"); //or  name
// let x = myName("mahmoud");
// console.log(x);
// function person() {
// this.age = 0;

//   setInterval( growUp = () => {
//     var newAge = this.age++;
//     console.log(newAge)
//   },1000);
// }
// var growUp = new person();

//***************************************************** */

//=========================================
//Spread Operator (شغال مع الاراي ومع الاوبجكت)
//=========================================
//spread operator  {....}  [....] مهمته انه بيسحب نسخه بحيث انه كل نسخه لا تؤثر على التانية
//Array & object literals (safe clone / concat )
//ex
// const names1 = ["amhmoud", "ali"];
// // const names2 = Object.assign([], names1);
// const names2 = ["ahmed" , ...names1 , "zaki" ]
// console.log(names2);

//concat ex  array
// const array1 = ['a', 'b', 'c'];
// const array2 = ['a', 'b', 'c'];
// // const array3 = array1.concat(array2) (الاستخدام القديم)
// const array3 = [...array1 , ...array2 , "aa" , "dd"]
// console.log(array3)

//ex  object
// const obj1 = { name: "ahmed", age: 50 };
// const obj2 = { addres: "Giza" };
// const obj3 = { ...obj1, ...obj2, status: true };
// console.log(obj3);

//ex funcation call
//max & min

var number = [1, 2, 3, 4, 5, 6, 4];
var maxNum = Math.max.apply(Math, number);
console.log(maxNum);

//ex funcation arguments
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37465" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map