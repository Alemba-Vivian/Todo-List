/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/pexels-polina-kovaleva-5717411.jpg */ "./src/Assets/pexels-polina-kovaleva-5717411.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --header--backgroun-clr:#9e7bb5;
    --sidebar--background-clr:#d67229 ;
    --main--background-clr:white;
 
  
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    min-height: 100vh;
    line-height: 1.3;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   
}
#grid-container{
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 100vh;
}

/* styling header section */

.header-container{
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center;
    padding: 40px;
    color: white;
}

/* styling sidebar section */

.sidebar-container{
    background-color: var(--sidebar--background-clr);
    padding: 40px;
    color: white;
   

}
.grid-row-span{
    grid-row: span 2;
}

.sidebar-content{
    padding-bottom: 30px;
    color: black;
}
.my-name{
    padding-bottom: 5px;
}


/* working with the user details */
.user-profile{
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    border: 1px solid orange;
    border-radius: 10px;
   
}
.projects{
    padding-top: 40px;
    color: black;
}
#btn-new-project{padding: 10px 20px 10px 20px;
    background-color: orange;
    color: white;
    border-radius: 5px;
    border: none;
    font-size: 1.0rem;

}
.my-projects{
    padding-top: 40px;
    padding-bottom: 30px;
}
.project-buttons{
    padding-top: 40px;
}
#project{

}

#project>li{
    padding: 10px;
    list-style-type: none;
}
#project>li:hover{
    cursor: pointer;
    background-color: orange;
}

.grid-colum-span{

}

/* styling main section */

.main-container{
    background-color: var(--main--background-clr);
    padding: 40px;
}

.task-container{
    padding-top: 40px;
    padding-bottom: 20px;
}

.todos-container{
   
}
#todos{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    list-style-type: none;
    gap: 10px;

}
span{
    color: #d67229;

}
#todos>li{
    padding: 10px;
    background-color: lightblue;
    border-radius: 20px;

}
#todos>li:nth-child(even){
    background-color: lightpink;
    
}

#btn-new-task{
    padding: 10px 20px 10px 20px;
    background-color: #d67229;
    color: white;
    border-radius: 5px;
    border: none;
    font-size: 1.0rem;

}
#add-sign{
    margin-left: 10px;
}


/* styling the form */
.todos-form{
    display: none;
    border: 1px solid lightgrey;
    width: 300px;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 20px;
}
.form-controls{
 
}
input[type="text"]{
    padding: 10px;
    border: none;
    margin-bottom: 10px;
   
}

.my-priority{
    padding-top: 10px;
    padding-bottom: 10px;
}
.priority{
    padding-bottom: 10px;
}
.my-buttons{
    padding-top: 10px;
    padding-bottom: 10px;

 
}

#btn-close{
    padding: 10px;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 5px;
    border: none;
    background-color: #d67229;
    color: white;
    margin-right: 20px;
}
#btn-add{
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #d67229;
    color: white;
}
#plus-sign{
    margin-right: 5px;
}

button:hover{
    cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,kCAAkC;IAClC,4BAA4B;;;AAGhC;AACA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mJAAmJ;;AAEvJ;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB;;AAEA,2BAA2B;;AAE3B;IACI,mDAA+D;IAC/D,sBAAsB;IACtB,2BAA2B;IAC3B,aAAa;IACb,YAAY;AAChB;;AAEA,4BAA4B;;AAE5B;IACI,gDAAgD;IAChD,aAAa;IACb,YAAY;;;AAGhB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,YAAY;AAChB;AACA;IACI,mBAAmB;AACvB;;;AAGA,kCAAkC;AAClC;IACI,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,QAAQ;IACR,wBAAwB;IACxB,mBAAmB;;AAEvB;AACA;IACI,iBAAiB;IACjB,YAAY;AAChB;AACA,iBAAiB,4BAA4B;IACzC,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;;AAErB;AACA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;AACA;IACI,iBAAiB;AACrB;AACA;;AAEA;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,wBAAwB;AAC5B;;AAEA;;AAEA;;AAEA,yBAAyB;;AAEzB;IACI,6CAA6C;IAC7C,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;;AAEA;AACA;IACI,aAAa;IACb,2DAA2D;IAC3D,qBAAqB;IACrB,SAAS;;AAEb;AACA;IACI,cAAc;;AAElB;AACA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;;AAEvB;AACA;IACI,2BAA2B;;AAE/B;;AAEA;IACI,4BAA4B;IAC5B,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;;AAErB;AACA;IACI,iBAAiB;AACrB;;;AAGA,qBAAqB;AACrB;IACI,aAAa;IACb,2BAA2B;IAC3B,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,mBAAmB;AACvB;AACA;;AAEA;AACA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;;AAEvB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,iBAAiB;IACjB,oBAAoB;;;AAGxB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,YAAY;AAChB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB","sourcesContent":[":root{\n    --header--backgroun-clr:#9e7bb5;\n    --sidebar--background-clr:#d67229 ;\n    --main--background-clr:white;\n \n  \n}\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    min-height: 100vh;\n    line-height: 1.3;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n   \n}\n#grid-container{\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    height: 100vh;\n}\n\n/* styling header section */\n\n.header-container{\n    background: url('../Assets/pexels-polina-kovaleva-5717411.jpg');\n    background-size: cover;\n    background-position: center;\n    padding: 40px;\n    color: white;\n}\n\n/* styling sidebar section */\n\n.sidebar-container{\n    background-color: var(--sidebar--background-clr);\n    padding: 40px;\n    color: white;\n   \n\n}\n.grid-row-span{\n    grid-row: span 2;\n}\n\n.sidebar-content{\n    padding-bottom: 30px;\n    color: black;\n}\n.my-name{\n    padding-bottom: 5px;\n}\n\n\n/* working with the user details */\n.user-profile{\n    display: flex;\n    padding: 10px;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    border: 1px solid orange;\n    border-radius: 10px;\n   \n}\n.projects{\n    padding-top: 40px;\n    color: black;\n}\n#btn-new-project{padding: 10px 20px 10px 20px;\n    background-color: orange;\n    color: white;\n    border-radius: 5px;\n    border: none;\n    font-size: 1.0rem;\n\n}\n.my-projects{\n    padding-top: 40px;\n    padding-bottom: 30px;\n}\n.project-buttons{\n    padding-top: 40px;\n}\n#project{\n\n}\n\n#project>li{\n    padding: 10px;\n    list-style-type: none;\n}\n#project>li:hover{\n    cursor: pointer;\n    background-color: orange;\n}\n\n.grid-colum-span{\n\n}\n\n/* styling main section */\n\n.main-container{\n    background-color: var(--main--background-clr);\n    padding: 40px;\n}\n\n.task-container{\n    padding-top: 40px;\n    padding-bottom: 20px;\n}\n\n.todos-container{\n   \n}\n#todos{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    list-style-type: none;\n    gap: 10px;\n\n}\nspan{\n    color: #d67229;\n\n}\n#todos>li{\n    padding: 10px;\n    background-color: lightblue;\n    border-radius: 20px;\n\n}\n#todos>li:nth-child(even){\n    background-color: lightpink;\n    \n}\n\n#btn-new-task{\n    padding: 10px 20px 10px 20px;\n    background-color: #d67229;\n    color: white;\n    border-radius: 5px;\n    border: none;\n    font-size: 1.0rem;\n\n}\n#add-sign{\n    margin-left: 10px;\n}\n\n\n/* styling the form */\n.todos-form{\n    display: none;\n    border: 1px solid lightgrey;\n    width: 300px;\n    margin-bottom: 20px;\n    padding: 20px;\n    border-radius: 20px;\n}\n.form-controls{\n \n}\ninput[type=\"text\"]{\n    padding: 10px;\n    border: none;\n    margin-bottom: 10px;\n   \n}\n\n.my-priority{\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n.priority{\n    padding-bottom: 10px;\n}\n.my-buttons{\n    padding-top: 10px;\n    padding-bottom: 10px;\n\n \n}\n\n#btn-close{\n    padding: 10px;\n    font-weight: bold;\n    font-size: 1rem;\n    border-radius: 5px;\n    border: none;\n    background-color: #d67229;\n    color: white;\n    margin-right: 20px;\n}\n#btn-add{\n    padding: 10px;\n    border-radius: 5px;\n    border: none;\n    background-color: #d67229;\n    color: white;\n}\n#plus-sign{\n    margin-right: 5px;\n}\n\nbutton:hover{\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Components/default.js":
/*!***********************************!*\
  !*** ./src/Components/default.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mydefaultProjects: () => (/* binding */ mydefaultProjects)
/* harmony export */ });
/* harmony import */ var _Layout_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Layout/DOM */ "./src/Layout/DOM.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/Components/todos.js");






function mydefaultProjects(){
    const todos1= (0,_todos__WEBPACK_IMPORTED_MODULE_1__.todos)()
   if(_Layout_DOM__WEBPACK_IMPORTED_MODULE_0__.home ){
  
    _Layout_DOM__WEBPACK_IMPORTED_MODULE_0__.home.addEventListener('click',()=>{
        // todos1.getodos;
        // const container = document.querySelector('.todos-container');
        // container.replaceChild('#todos');

       

        //console.log(todos.getodos);

    } );  
  
   }else if(_Layout_DOM__WEBPACK_IMPORTED_MODULE_0__.work){
    _Layout_DOM__WEBPACK_IMPORTED_MODULE_0__.home.addEventListener('click', todos1.getodos); 

   }else if(_Layout_DOM__WEBPACK_IMPORTED_MODULE_0__.personal){
    _Layout_DOM__WEBPACK_IMPORTED_MODULE_0__.home.addEventListener('click', todos1.getodos); 

   }
}






/***/ }),

/***/ "./src/Components/todos.js":
/*!*********************************!*\
  !*** ./src/Components/todos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todos: () => (/* binding */ todos)
/* harmony export */ });
/* harmony import */ var _Modules_addTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modules/addTodo */ "./src/Modules/addTodo.js");


const todos=(title, description, dueDate, priority,notes)=>{
    const getDate=()=>{

    }

    const getodos=()=>{
        return (0,_Modules_addTodo__WEBPACK_IMPORTED_MODULE_0__.formSubmit)();
    }

    return{
        title, description, dueDate, priority, notes, getDate, getodos
    }

}
// const todos1 = todos("shopping", "go shopping", "04/09/2023","important", "add groceries");
// console.log(todos1.getodos());



/***/ }),

/***/ "./src/Layout/DOM.js":
/*!***************************!*\
  !*** ./src/Layout/DOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeForm: () => (/* binding */ closeForm),
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   home: () => (/* binding */ home),
/* harmony export */   listItems: () => (/* binding */ listItems),
/* harmony export */   personal: () => (/* binding */ personal),
/* harmony export */   projectItems: () => (/* binding */ projectItems),
/* harmony export */   showForm: () => (/* binding */ showForm),
/* harmony export */   taskDescription: () => (/* binding */ taskDescription),
/* harmony export */   taskDueDate: () => (/* binding */ taskDueDate),
/* harmony export */   taskNotes: () => (/* binding */ taskNotes),
/* harmony export */   taskPriority: () => (/* binding */ taskPriority),
/* harmony export */   taskTitle: () => (/* binding */ taskTitle),
/* harmony export */   work: () => (/* binding */ work)
/* harmony export */ });
//INPUT
const taskTitle = document.querySelector('#title');
const taskDescription = document.querySelector('#description');
const taskDueDate = document.querySelector('#dueDate');
const taskPriority = document.getElementsByName('priority');
const taskNotes = document.querySelector('#notes');

//<UL> LIST ITEM
const listItems = document.querySelector('#todos');
const projectItems = document.querySelector('#projects');

//<LI> PROJECTS iTEM
const personal = document.querySelector('#personal-project');
const home = document.querySelector('#home-project');
const work = document.querySelector('#work-project');

//FORM 
const form = document.querySelector('#formSubmit');

//BUTTON
const newTaskButton = document.querySelector('#btn-new-task');
const closeTaskButton = document.querySelector('#btn-close');

//EVENT LISTENERS TO BUTTONS
newTaskButton.addEventListener('click', showForm);
closeTaskButton.addEventListener('click', closeForm);

//FUNCTIONS
function showForm (){
    document.querySelector('.todos-form').style.display ="block";

}

function closeForm(){
    document.querySelector('.todos-form').style.display = "none";

}



/***/ }),

/***/ "./src/Modules/addTodo.js":
/*!********************************!*\
  !*** ./src/Modules/addTodo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formSubmit: () => (/* binding */ formSubmit)
/* harmony export */ });
/* harmony import */ var _Components_todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/todos */ "./src/Components/todos.js");
/* harmony import */ var _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout/DOM */ "./src/Layout/DOM.js");







//working with the priority functions
let taskPriorityValue;
function displayPriority(){
   for(let i =0; i < _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskPriority.length; i++){
        if(_Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskPriority[i].checked){
            taskPriorityValue = _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskPriority[i].value;
            console.log(taskPriorityValue = _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskPriority[i].value);
            console.log(_Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskPriority[i].value);
        }
    }

};

//submitting the form
function formSubmit(){

    _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.form.addEventListener('submit', (e)=>{
        e.preventDefault();
        addTodos();
     
    
        // if((taskTitle.value === "" || taskTitle.value === null) 
        //   || (taskDescription.value === ""|| taskDescription.value ===null)
        //   || (taskDueDate.value === "" || taskDueDate === null)
        // //   || (taskPriority.value === "" || taskPriority === null)
        //   || (taskNotes.value === "" || taskNotes.value === null)
        //   )
        //   {
        //         alert("Ensure you input all the values in the field")
    
        //   }else{
        //         alert("The form has been submitted successfully");
        //         addTodos();
        //   }
         _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskTitle.value = "";
         _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDescription.value = "";
         _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDueDate.value = "";
         _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskPriority.value = "";
         _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskNotes.value = ""; 
    })
    

}


// storing my objects in an array
let myTodos = [];

function addTodos(){

 const task =(0,_Components_todos__WEBPACK_IMPORTED_MODULE_0__.todos)();

 displayPriority();

 task.title = _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskTitle.value;
 task.description = _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDescription.value;
 task.dueDate = _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDueDate.value;
 task.priority = taskPriorityValue;
 task.notes = _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskNotes.value;


 //pushing my tasks/todos into the array
 myTodos.push(task);


 //looping through my todo lists
 myTodos.forEach((element, index)=>{

//clear the array once an object is pushed
myTodos = [];
  const list = document.createElement('li');
  list.innerHTML =`<span>Task Title:</span> ${element.title} <br>
                   <span>Task Description:</span> ${element.description} <br>
                   <span>Task DueDate:</span> ${element.dueDate} <br>
                   <span>Task Priority:</span> ${element.priority} <br>
                   <span>Task Notes:</span> ${element.notes} <br>`;

  _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.listItems.appendChild(list);
  console.log(_Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.listItems.appendChild(list));
 

console.log(myTodos);
  return myTodos[list];

 });
}




/***/ }),

/***/ "./src/Assets/pexels-polina-kovaleva-5717411.jpg":
/*!*******************************************************!*\
  !*** ./src/Assets/pexels-polina-kovaleva-5717411.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16808bd0588a71453ef0.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout/DOM */ "./src/Layout/DOM.js");
/* harmony import */ var _Modules_addTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/addTodo */ "./src/Modules/addTodo.js");
/* harmony import */ var _Components_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/default */ "./src/Components/default.js");






(0,_Modules_addTodo__WEBPACK_IMPORTED_MODULE_2__.formSubmit)();
(0,_Components_default__WEBPACK_IMPORTED_MODULE_3__.mydefaultProjects)();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLG9LQUErRDtBQUMzRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixZQUFZLGFBQWEsZUFBZSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxRQUFRLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxtQkFBbUIsYUFBYSxXQUFXLFlBQVksV0FBVyxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLGFBQWEsTUFBTSxLQUFLLFlBQVksUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFB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V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDWTtBQUNDO0FBQ007QUFDVTs7QUFFekQsNERBQVU7QUFDVixzRUFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Db21wb25lbnRzL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0xheW91dC9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL01vZHVsZXMvYWRkVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vQXNzZXRzL3BleGVscy1wb2xpbmEta292YWxldmEtNTcxNzQxMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0taGVhZGVyLS1iYWNrZ3JvdW4tY2xyOiM5ZTdiYjU7XG4gICAgLS1zaWRlYmFyLS1iYWNrZ3JvdW5kLWNscjojZDY3MjI5IDtcbiAgICAtLW1haW4tLWJhY2tncm91bmQtY2xyOndoaXRlO1xuIFxuICBcbn1cbip7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHl7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICBcbn1cbiNncmlkLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4vKiBzdHlsaW5nIGhlYWRlciBzZWN0aW9uICovXG5cbi5oZWFkZXItY29udGFpbmVye1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogc3R5bGluZyBzaWRlYmFyIHNlY3Rpb24gKi9cblxuLnNpZGViYXItY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItLWJhY2tncm91bmQtY2xyKTtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgIFxuXG59XG4uZ3JpZC1yb3ctc3BhbntcbiAgICBncmlkLXJvdzogc3BhbiAyO1xufVxuXG4uc2lkZWJhci1jb250ZW50e1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5teS1uYW1le1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cblxuLyogd29ya2luZyB3aXRoIHRoZSB1c2VyIGRldGFpbHMgKi9cbi51c2VyLXByb2ZpbGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgXG59XG4ucHJvamVjdHN7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuI2J0bi1uZXctcHJvamVjdHtwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcblxufVxuLm15LXByb2plY3Rze1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLnByb2plY3QtYnV0dG9uc3tcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbiNwcm9qZWN0e1xuXG59XG5cbiNwcm9qZWN0Pmxpe1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuI3Byb2plY3Q+bGk6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmdyaWQtY29sdW0tc3BhbntcblxufVxuXG4vKiBzdHlsaW5nIG1haW4gc2VjdGlvbiAqL1xuXG4ubWFpbi1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi0tYmFja2dyb3VuZC1jbHIpO1xuICAgIHBhZGRpbmc6IDQwcHg7XG59XG5cbi50YXNrLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnRvZG9zLWNvbnRhaW5lcntcbiAgIFxufVxuI3RvZG9ze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGdhcDogMTBweDtcblxufVxuc3BhbntcbiAgICBjb2xvcjogI2Q2NzIyOTtcblxufVxuI3RvZG9zPmxpe1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbn1cbiN0b2Rvcz5saTpudGgtY2hpbGQoZXZlbil7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xuICAgIFxufVxuXG4jYnRuLW5ldy10YXNre1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2NzIyOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcblxufVxuI2FkZC1zaWdue1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5cbi8qIHN0eWxpbmcgdGhlIGZvcm0gKi9cbi50b2Rvcy1mb3Jte1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5mb3JtLWNvbnRyb2xze1xuIFxufVxuaW5wdXRbdHlwZT1cInRleHRcIl17XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgIFxufVxuXG4ubXktcHJpb3JpdHl7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ucHJpb3JpdHl7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ubXktYnV0dG9uc3tcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuIFxufVxuXG4jYnRuLWNsb3Nle1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2NzIyOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuI2J0bi1hZGR7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjcyMjk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI3BsdXMtc2lnbntcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyw0QkFBNEI7OztBQUdoQztBQUNBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUpBQW1KOztBQUV2SjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCOztBQUVBLDJCQUEyQjs7QUFFM0I7SUFDSSxtREFBK0Q7SUFDL0Qsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQSw0QkFBNEI7O0FBRTVCO0lBQ0ksZ0RBQWdEO0lBQ2hELGFBQWE7SUFDYixZQUFZOzs7QUFHaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUdBLGtDQUFrQztBQUNsQztJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixRQUFRO0lBQ1Isd0JBQXdCO0lBQ3hCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0EsaUJBQWlCLDRCQUE0QjtJQUN6Qyx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7O0FBRUE7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUVBOztBQUVBOztBQUVBLHlCQUF5Qjs7QUFFekI7SUFDSSw2Q0FBNkM7SUFDN0MsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7O0FBRUE7QUFDQTtJQUNJLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QscUJBQXFCO0lBQ3JCLFNBQVM7O0FBRWI7QUFDQTtJQUNJLGNBQWM7O0FBRWxCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLDJCQUEyQjs7QUFFL0I7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBR0EscUJBQXFCO0FBQ3JCO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9COzs7QUFHeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1oZWFkZXItLWJhY2tncm91bi1jbHI6IzllN2JiNTtcXG4gICAgLS1zaWRlYmFyLS1iYWNrZ3JvdW5kLWNscjojZDY3MjI5IDtcXG4gICAgLS1tYWluLS1iYWNrZ3JvdW5kLWNscjp3aGl0ZTtcXG4gXFxuICBcXG59XFxuKntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5e1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgIFxcbn1cXG4jZ3JpZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogc3R5bGluZyBoZWFkZXIgc2VjdGlvbiAqL1xcblxcbi5oZWFkZXItY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL0Fzc2V0cy9wZXhlbHMtcG9saW5hLWtvdmFsZXZhLTU3MTc0MTEuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBzdHlsaW5nIHNpZGViYXIgc2VjdGlvbiAqL1xcblxcbi5zaWRlYmFyLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci0tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgXFxuXFxufVxcbi5ncmlkLXJvdy1zcGFue1xcbiAgICBncmlkLXJvdzogc3BhbiAyO1xcbn1cXG5cXG4uc2lkZWJhci1jb250ZW50e1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG4ubXktbmFtZXtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuXFxuLyogd29ya2luZyB3aXRoIHRoZSB1c2VyIGRldGFpbHMgKi9cXG4udXNlci1wcm9maWxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgXFxufVxcbi5wcm9qZWN0c3tcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuI2J0bi1uZXctcHJvamVjdHtwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xcblxcbn1cXG4ubXktcHJvamVjdHN7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuLnByb2plY3QtYnV0dG9uc3tcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxufVxcbiNwcm9qZWN0e1xcblxcbn1cXG5cXG4jcHJvamVjdD5saXtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4jcHJvamVjdD5saTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5ncmlkLWNvbHVtLXNwYW57XFxuXFxufVxcblxcbi8qIHN0eWxpbmcgbWFpbiBzZWN0aW9uICovXFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLS1iYWNrZ3JvdW5kLWNscik7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lcntcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udG9kb3MtY29udGFpbmVye1xcbiAgIFxcbn1cXG4jdG9kb3N7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGdhcDogMTBweDtcXG5cXG59XFxuc3BhbntcXG4gICAgY29sb3I6ICNkNjcyMjk7XFxuXFxufVxcbiN0b2Rvcz5saXtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcbn1cXG4jdG9kb3M+bGk6bnRoLWNoaWxkKGV2ZW4pe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XFxuICAgIFxcbn1cXG5cXG4jYnRuLW5ldy10YXNre1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDY3MjI5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMHJlbTtcXG5cXG59XFxuI2FkZC1zaWdue1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuXFxuLyogc3R5bGluZyB0aGUgZm9ybSAqL1xcbi50b2Rvcy1mb3Jte1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLmZvcm0tY29udHJvbHN7XFxuIFxcbn1cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl17XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICBcXG59XFxuXFxuLm15LXByaW9yaXR5e1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5wcmlvcml0eXtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5teS1idXR0b25ze1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuXFxuIFxcbn1cXG5cXG4jYnRuLWNsb3Nle1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2NzIyOTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcbiNidG4tYWRke1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2NzIyOTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jcGx1cy1zaWdue1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdEl0ZW1zIH0gZnJvbSBcIi4uL0xheW91dC9ET01cIjtcbmltcG9ydCB7IGhvbWUsIHBlcnNvbmFsLCB3b3JrIH0gZnJvbSBcIi4uL0xheW91dC9ET01cIjtcbmltcG9ydCB7IHRvZG9zIH0gZnJvbSBcIi4vdG9kb3NcIjtcblxuXG5cbmZ1bmN0aW9uIG15ZGVmYXVsdFByb2plY3RzKCl7XG4gICAgY29uc3QgdG9kb3MxPSB0b2RvcygpXG4gICBpZihob21lICl7XG4gIFxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIC8vIHRvZG9zMS5nZXRvZG9zO1xuICAgICAgICAvLyBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MtY29udGFpbmVyJyk7XG4gICAgICAgIC8vIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoJyN0b2RvcycpO1xuXG4gICAgICAgXG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyh0b2Rvcy5nZXRvZG9zKTtcblxuICAgIH0gKTsgIFxuICBcbiAgIH1lbHNlIGlmKHdvcmspe1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2RvczEuZ2V0b2Rvcyk7IFxuXG4gICB9ZWxzZSBpZihwZXJzb25hbCl7XG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZG9zMS5nZXRvZG9zKTsgXG5cbiAgIH1cbn1cblxuZXhwb3J0e215ZGVmYXVsdFByb2plY3RzfTtcblxuXG4iLCJpbXBvcnQgeyBmb3JtU3VibWl0IH0gZnJvbSBcIi4uL01vZHVsZXMvYWRkVG9kb1wiXG5cbmNvbnN0IHRvZG9zPSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LG5vdGVzKT0+e1xuICAgIGNvbnN0IGdldERhdGU9KCk9PntcblxuICAgIH1cblxuICAgIGNvbnN0IGdldG9kb3M9KCk9PntcbiAgICAgICAgcmV0dXJuIGZvcm1TdWJtaXQoKTtcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBnZXREYXRlLCBnZXRvZG9zXG4gICAgfVxuXG59XG4vLyBjb25zdCB0b2RvczEgPSB0b2RvcyhcInNob3BwaW5nXCIsIFwiZ28gc2hvcHBpbmdcIiwgXCIwNC8wOS8yMDIzXCIsXCJpbXBvcnRhbnRcIiwgXCJhZGQgZ3JvY2VyaWVzXCIpO1xuLy8gY29uc29sZS5sb2codG9kb3MxLmdldG9kb3MoKSk7XG5cbmV4cG9ydHt0b2Rvc307IiwiLy9JTlBVVFxuY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG5jb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbmNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcbmNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdwcmlvcml0eScpO1xuY29uc3QgdGFza05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVzJyk7XG5cbi8vPFVMPiBMSVNUIElURU1cbmNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvcycpO1xuY29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG5cbi8vPExJPiBQUk9KRUNUUyBpVEVNXG5jb25zdCBwZXJzb25hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXJzb25hbC1wcm9qZWN0Jyk7XG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtcHJvamVjdCcpO1xuY29uc3Qgd29yayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3b3JrLXByb2plY3QnKTtcblxuLy9GT1JNIFxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtU3VibWl0Jyk7XG5cbi8vQlVUVE9OXG5jb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1uZXctdGFzaycpO1xuY29uc3QgY2xvc2VUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1jbG9zZScpO1xuXG4vL0VWRU5UIExJU1RFTkVSUyBUTyBCVVRUT05TXG5uZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Zvcm0pO1xuY2xvc2VUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKTtcblxuLy9GVU5DVElPTlNcbmZ1bmN0aW9uIHNob3dGb3JtICgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1mb3JtJykuc3R5bGUuZGlzcGxheSA9XCJibG9ja1wiO1xuXG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybSgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1mb3JtJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59XG5cbmV4cG9ydHtcbiAgICBzaG93Rm9ybSwgY2xvc2VGb3JtLFxuICAgIGxpc3RJdGVtcyxwcm9qZWN0SXRlbXMsXG4gICAgZm9ybSwgdGFza1RpdGxlLFxuICAgIHRhc2tEZXNjcmlwdGlvbiwgXG4gICAgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSwgdGFza05vdGVzLFxuICAgIHBlcnNvbmFsLCBob21lLCB3b3JrXG4gICAgfTsiLCJpbXBvcnQgeyB0b2RvcyB9IGZyb20gXCIuLi9Db21wb25lbnRzL3RvZG9zXCI7XG5pbXBvcnQgeyB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSwgdGFza05vdGVzIH0gZnJvbSBcIi4uL0xheW91dC9ET01cIjtcbmltcG9ydCB7IGxpc3RJdGVtcywgZm9ybSB9IGZyb20gXCIuLi9MYXlvdXQvRE9NXCI7XG5cblxuXG5cbi8vd29ya2luZyB3aXRoIHRoZSBwcmlvcml0eSBmdW5jdGlvbnNcbmxldCB0YXNrUHJpb3JpdHlWYWx1ZTtcbmZ1bmN0aW9uIGRpc3BsYXlQcmlvcml0eSgpe1xuICAgZm9yKGxldCBpID0wOyBpIDwgdGFza1ByaW9yaXR5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYodGFza1ByaW9yaXR5W2ldLmNoZWNrZWQpe1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5VmFsdWUgPSB0YXNrUHJpb3JpdHlbaV0udmFsdWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrUHJpb3JpdHlWYWx1ZSA9IHRhc2tQcmlvcml0eVtpXS52YWx1ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrUHJpb3JpdHlbaV0udmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG4vL3N1Ym1pdHRpbmcgdGhlIGZvcm1cbmZ1bmN0aW9uIGZvcm1TdWJtaXQoKXtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWRkVG9kb3MoKTtcbiAgICAgXG4gICAgXG4gICAgICAgIC8vIGlmKCh0YXNrVGl0bGUudmFsdWUgPT09IFwiXCIgfHwgdGFza1RpdGxlLnZhbHVlID09PSBudWxsKSBcbiAgICAgICAgLy8gICB8fCAodGFza0Rlc2NyaXB0aW9uLnZhbHVlID09PSBcIlwifHwgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID09PW51bGwpXG4gICAgICAgIC8vICAgfHwgKHRhc2tEdWVEYXRlLnZhbHVlID09PSBcIlwiIHx8IHRhc2tEdWVEYXRlID09PSBudWxsKVxuICAgICAgICAvLyAvLyAgIHx8ICh0YXNrUHJpb3JpdHkudmFsdWUgPT09IFwiXCIgfHwgdGFza1ByaW9yaXR5ID09PSBudWxsKVxuICAgICAgICAvLyAgIHx8ICh0YXNrTm90ZXMudmFsdWUgPT09IFwiXCIgfHwgdGFza05vdGVzLnZhbHVlID09PSBudWxsKVxuICAgICAgICAvLyAgIClcbiAgICAgICAgLy8gICB7XG4gICAgICAgIC8vICAgICAgICAgYWxlcnQoXCJFbnN1cmUgeW91IGlucHV0IGFsbCB0aGUgdmFsdWVzIGluIHRoZSBmaWVsZFwiKVxuICAgIFxuICAgICAgICAvLyAgIH1lbHNle1xuICAgICAgICAvLyAgICAgICAgIGFsZXJ0KFwiVGhlIGZvcm0gaGFzIGJlZW4gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgLy8gICAgICAgICBhZGRUb2RvcygpO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgIHRhc2tUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICAgdGFza0R1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICAgdGFza1ByaW9yaXR5LnZhbHVlID0gXCJcIjtcbiAgICAgICAgIHRhc2tOb3Rlcy52YWx1ZSA9IFwiXCI7IFxuICAgIH0pXG4gICAgXG5cbn1cblxuXG4vLyBzdG9yaW5nIG15IG9iamVjdHMgaW4gYW4gYXJyYXlcbmxldCBteVRvZG9zID0gW107XG5cbmZ1bmN0aW9uIGFkZFRvZG9zKCl7XG5cbiBjb25zdCB0YXNrID10b2RvcygpO1xuXG4gZGlzcGxheVByaW9yaXR5KCk7XG5cbiB0YXNrLnRpdGxlID0gdGFza1RpdGxlLnZhbHVlO1xuIHRhc2suZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb24udmFsdWU7XG4gdGFzay5kdWVEYXRlID0gdGFza0R1ZURhdGUudmFsdWU7XG4gdGFzay5wcmlvcml0eSA9IHRhc2tQcmlvcml0eVZhbHVlO1xuIHRhc2subm90ZXMgPSB0YXNrTm90ZXMudmFsdWU7XG5cblxuIC8vcHVzaGluZyBteSB0YXNrcy90b2RvcyBpbnRvIHRoZSBhcnJheVxuIG15VG9kb3MucHVzaCh0YXNrKTtcblxuXG4gLy9sb29waW5nIHRocm91Z2ggbXkgdG9kbyBsaXN0c1xuIG15VG9kb3MuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpPT57XG5cbi8vY2xlYXIgdGhlIGFycmF5IG9uY2UgYW4gb2JqZWN0IGlzIHB1c2hlZFxubXlUb2RvcyA9IFtdO1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlzdC5pbm5lckhUTUwgPWA8c3Bhbj5UYXNrIFRpdGxlOjwvc3Bhbj4gJHtlbGVtZW50LnRpdGxlfSA8YnI+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4+VGFzayBEZXNjcmlwdGlvbjo8L3NwYW4+ICR7ZWxlbWVudC5kZXNjcmlwdGlvbn0gPGJyPlxuICAgICAgICAgICAgICAgICAgIDxzcGFuPlRhc2sgRHVlRGF0ZTo8L3NwYW4+ICR7ZWxlbWVudC5kdWVEYXRlfSA8YnI+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4+VGFzayBQcmlvcml0eTo8L3NwYW4+ICR7ZWxlbWVudC5wcmlvcml0eX0gPGJyPlxuICAgICAgICAgICAgICAgICAgIDxzcGFuPlRhc2sgTm90ZXM6PC9zcGFuPiAke2VsZW1lbnQubm90ZXN9IDxicj5gO1xuXG4gIGxpc3RJdGVtcy5hcHBlbmRDaGlsZChsaXN0KTtcbiAgY29uc29sZS5sb2cobGlzdEl0ZW1zLmFwcGVuZENoaWxkKGxpc3QpKTtcbiBcblxuY29uc29sZS5sb2cobXlUb2Rvcyk7XG4gIHJldHVybiBteVRvZG9zW2xpc3RdO1xuXG4gfSk7XG59XG5cblxuZXhwb3J0e2Zvcm1TdWJtaXR9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBzaG93Rm9ybSB9IGZyb20gJy4vTGF5b3V0L0RPTSc7XG5pbXBvcnQgeyBjbG9zZUZvcm0gfSBmcm9tICcuL0xheW91dC9ET00nO1xuaW1wb3J0IHsgZm9ybVN1Ym1pdCB9IGZyb20gJy4vTW9kdWxlcy9hZGRUb2RvJztcbmltcG9ydCB7IG15ZGVmYXVsdFByb2plY3RzIH0gZnJvbSAnLi9Db21wb25lbnRzL2RlZmF1bHQnO1xuXG5mb3JtU3VibWl0KCk7XG5teWRlZmF1bHRQcm9qZWN0cygpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==