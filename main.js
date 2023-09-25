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
    border: 1px solid black;
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
}


/* projects form */
.project-form{
    display: none;
    border: 1px solid lightgray;
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    margin-top: 20px;
}

#project-title{
    border: 1px solid lightgray;
}
#btn-close-project{
    padding: 10px;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 5px;
    border: none;
    background-color: #d67229;
    color: white;
    margin-right: 20px;

}
#btn-add-project{
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #d67229;
    color: white;

}

/* Todos */
#edit{
    margin-left: 10px;
    padding-top: 20px;
}

#trash{
    color: red;
    margin-left: 10px;
    padding-top: 20px;
 
    /* padding-left: 100px; */
}
#check{
    padding-top: 20px;
    color: green;
    margin-left: 10px;
  
    /* float: right; */

}
#edit:hover{
    cursor: pointer;
}
#check:hover{
    cursor: pointer;
}
#trash:hover{
    cursor: pointer;
}
#completed{
    padding-top: 10px;
    /* color: lightblue; */
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --header--backgroun-clr:#9e7bb5;\n    --sidebar--background-clr:#d67229 ;\n    --main--background-clr:white;\n \n  \n}\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    min-height: 100vh;\n    line-height: 1.3;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n   \n}\n#grid-container{\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    height: 100vh;\n}\n\n/* styling header section */\n\n.header-container{\n    background: url('../Assets/pexels-polina-kovaleva-5717411.jpg');\n    background-size: cover;\n    background-position: center;\n    padding: 40px;\n    color: white;\n}\n\n/* styling sidebar section */\n\n.sidebar-container{\n    background-color: var(--sidebar--background-clr);\n    padding: 40px;\n    color: white;\n   \n\n}\n.grid-row-span{\n    grid-row: span 2;\n}\n\n.sidebar-content{\n    padding-bottom: 30px;\n    color: black;\n}\n.my-name{\n    padding-bottom: 5px;\n}\n\n\n/* working with the user details */\n.user-profile{\n    display: flex;\n    padding: 10px;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    border: 1px solid black;\n    border-radius: 10px;\n   \n}\n.projects{\n    padding-top: 40px;\n    color: black;\n}\n#btn-new-project{padding: 10px 20px 10px 20px;\n    background-color: orange;\n    color: white;\n    border-radius: 5px;\n    border: none;\n    font-size: 1.0rem;\n\n}\n.my-projects{\n    padding-top: 40px;\n    padding-bottom: 30px;\n}\n.project-buttons{\n    padding-top: 40px;\n}\n#project{\n\n}\n\n#project>li{\n    padding: 10px;\n    list-style-type: none;\n}\n#project>li:hover{\n    cursor: pointer;\n    background-color: orange;\n}\n\n.grid-colum-span{\n\n}\n\n/* styling main section */\n\n.main-container{\n    background-color: var(--main--background-clr);\n    padding: 40px;\n}\n\n.task-container{\n    padding-top: 40px;\n    padding-bottom: 20px;\n}\n\n#todos{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    list-style-type: none;\n    gap: 10px;\n\n}\nspan{\n    color: #d67229;\n\n}\n#todos>li{\n    padding: 10px;\n    background-color: lightblue;\n    border-radius: 20px;\n\n}\n#todos>li:nth-child(even){\n    background-color: lightpink;\n    \n}\n\n#btn-new-task{\n    padding: 10px 20px 10px 20px;\n    background-color: #d67229;\n    color: white;\n    border-radius: 5px;\n    border: none;\n    font-size: 1.0rem;\n\n}\n#add-sign{\n    margin-left: 10px;\n}\n\n\n/* styling the form */\n.todos-form{\n    display: none;\n    border: 1px solid lightgrey;\n    width: 300px;\n    margin-bottom: 20px;\n    padding: 20px;\n    border-radius: 20px;\n}\n.form-controls{\n \n}\ninput[type=\"text\"]{\n    padding: 10px;\n    border: none;\n    margin-bottom: 10px;\n   \n}\n\n.my-priority{\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n.priority{\n    padding-bottom: 10px;\n}\n.my-buttons{\n    padding-top: 10px;\n    padding-bottom: 10px;\n\n \n}\n\n#btn-close{\n    padding: 10px;\n    font-weight: bold;\n    font-size: 1rem;\n    border-radius: 5px;\n    border: none;\n    background-color: #d67229;\n    color: white;\n    margin-right: 20px;\n}\n#btn-add{\n    padding: 10px;\n    border-radius: 5px;\n    border: none;\n    background-color: #d67229;\n    color: white;\n}\n#plus-sign{\n    margin-right: 5px;\n}\n\nbutton:hover{\n    cursor: pointer;\n}\n\n\n/* projects form */\n.project-form{\n    display: none;\n    border: 1px solid lightgray;\n    margin-bottom: 10px;\n    padding: 20px;\n    border-radius: 10px;\n    background-color: white;\n    margin-top: 20px;\n}\n\n#project-title{\n    border: 1px solid lightgray;\n}\n#btn-close-project{\n    padding: 10px;\n    font-weight: bold;\n    font-size: 1rem;\n    border-radius: 5px;\n    border: none;\n    background-color: #d67229;\n    color: white;\n    margin-right: 20px;\n\n}\n#btn-add-project{\n    padding: 10px;\n    border-radius: 5px;\n    border: none;\n    background-color: #d67229;\n    color: white;\n\n}\n\n/* Todos */\n#edit{\n    margin-left: 10px;\n    padding-top: 20px;\n}\n\n#trash{\n    color: red;\n    margin-left: 10px;\n    padding-top: 20px;\n \n    /* padding-left: 100px; */\n}\n#check{\n    padding-top: 20px;\n    color: green;\n    margin-left: 10px;\n  \n    /* float: right; */\n\n}\n#edit:hover{\n    cursor: pointer;\n}\n#check:hover{\n    cursor: pointer;\n}\n#trash:hover{\n    cursor: pointer;\n}\n#completed{\n    padding-top: 10px;\n    /* color: lightblue; */\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _Modules_todoFormSubmit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modules/todoFormSubmit */ "./src/Modules/todoFormSubmit.js");








function mydefaultProjects(){



      for(let i=0; i < _Layout_DOM__WEBPACK_IMPORTED_MODULE_0__.myDefaultProjects.length; i++){
            const defaultprojects = _Layout_DOM__WEBPACK_IMPORTED_MODULE_0__.myDefaultProjects[i];
           

            defaultprojects.addEventListener('click', ()=>{
                  console.log("hello there")
                  const container = document.querySelector('#todos');
                  container.replaceChildren();
                  (0,_Modules_todoFormSubmit__WEBPACK_IMPORTED_MODULE_2__.formSubmit)();    
            })
      }
      // if(home){

      //   home.addEventListener('click',()=>{
      //   const container = document.querySelector('#todos');
      //   container.replaceChildren();
      //   formSubmit();
      //  } );  
  
      // }
}






/***/ }),

/***/ "./src/Components/project.js":
/*!***********************************!*\
  !*** ./src/Components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   project: () => (/* binding */ project)
/* harmony export */ });

const project =(name)=>{
    
    return {name}

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
/* harmony export */   closeProjectForm: () => (/* binding */ closeProjectForm),
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   home: () => (/* binding */ home),
/* harmony export */   listItems: () => (/* binding */ listItems),
/* harmony export */   myDefaultProjects: () => (/* binding */ myDefaultProjects),
/* harmony export */   personal: () => (/* binding */ personal),
/* harmony export */   projectForm: () => (/* binding */ projectForm),
/* harmony export */   projectItems: () => (/* binding */ projectItems),
/* harmony export */   projectTitle: () => (/* binding */ projectTitle),
/* harmony export */   showForm: () => (/* binding */ showForm),
/* harmony export */   showProjectForm: () => (/* binding */ showProjectForm),
/* harmony export */   taskDescription: () => (/* binding */ taskDescription),
/* harmony export */   taskDueDate: () => (/* binding */ taskDueDate),
/* harmony export */   taskNotes: () => (/* binding */ taskNotes),
/* harmony export */   taskPriority: () => (/* binding */ taskPriority),
/* harmony export */   taskTitle: () => (/* binding */ taskTitle),
/* harmony export */   work: () => (/* binding */ work)
/* harmony export */ });
//TODO INPUT
const taskTitle = document.querySelector('#title');
const taskDescription = document.querySelector('#description');
const taskDueDate = document.querySelector('#dueDate');
const taskPriority = document.getElementsByName('priority');
const taskNotes = document.querySelector('#notes');

//PROJECT INPUT
const projectTitle =document.querySelector('#project-title');

//DEFAULT PROJECTS
const myDefaultProjects = document.getElementsByClassName('default-projects');

//<UL> LIST ITEM
const listItems = document.querySelector('#todos');
const projectItems = document.querySelector('#project');

//<LI> PROJECTS iTEM
const personal = document.querySelector('#personal-project');
const home = document.querySelector('#home-project');
const work = document.querySelector('#work-project');

//FORM 
const form = document.querySelector('#formSubmit');
const projectForm =document.querySelector('#formProjectSubmit');

//BUTTON
const newTaskButton = document.querySelector('#btn-new-task');
const closeTaskButton = document.querySelector('#btn-close');
const newProjectButton = document.querySelector('#btn-new-project');
const closeProjectButton = document.querySelector('#btn-close-project');


//EVENT LISTENERS TO TASK BUTTONS
newTaskButton.addEventListener('click', showForm);
closeTaskButton.addEventListener('click', closeForm);

//EVENT LISTENERS TO PROJECT BUTTONS
newProjectButton.addEventListener('click',showProjectForm);
closeProjectButton.addEventListener('click', closeProjectForm);


//FUNCTIONS
function showForm (){
    document.querySelector('.todos-form').style.display ="block";

}

function closeForm(){
    document.querySelector('.todos-form').style.display = "none";

}

function showProjectForm(){
    document.querySelector('.project-form').style.display ="block";

}
function closeProjectForm(){
    document.querySelector('.project-form').style.display ="none";
}


/***/ }),

/***/ "./src/Modules/addProject.js":
/*!***********************************!*\
  !*** ./src/Modules/addProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   submitProjects: () => (/* binding */ submitProjects)
/* harmony export */ });
/* harmony import */ var _Components_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/project */ "./src/Components/project.js");
/* harmony import */ var _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout/DOM */ "./src/Layout/DOM.js");



// storing my projects in an array
let myProjects =[];

function addProjects(){
    
 //creating a new instance of an object
    const project1 = (0,_Components_project__WEBPACK_IMPORTED_MODULE_0__.project)();
    project1.name = _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.projectTitle.value

    //pushing the object inside the array
    myProjects.push(project1);

    //looping through the objects
    myProjects.forEach((element, index)=>{
        myProjects = [];


        const projectList = document.createElement('li');
        projectList.classList.add("default-projects");
        projectList.innerHTML =`${element.name}`;

        _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.projectItems.appendChild(projectList);

    
            console.log(myProjects[projectList]);

      
            return myProjects[projectList];
      

    });
    
}


//submit button
function submitProjects(){
    _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.projectForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        if(_Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.projectTitle.value === "" || _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.projectTitle.value === null){
            alert("Ensure you fill all the inputs values");
        }else{
          
            alert("Form is submitted successfully");
             addProjects();
           
        }
        _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.projectTitle.value ="";
       
    })

}





/***/ }),

/***/ "./src/Modules/addTodo.js":
/*!********************************!*\
  !*** ./src/Modules/addTodo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   myTodos: () => (/* binding */ myTodos),
/* harmony export */   taskPriorityValue: () => (/* binding */ taskPriorityValue),
/* harmony export */   validateTodos: () => (/* binding */ validateTodos)
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
        }
    }

};


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

   //creating the edit icon to edit each todos
   const editIcon = document.createElement('i');
   editIcon.className ='fa-regular fa-pen-to-square';
   editIcon.id ='edit'

  //creating the trash can to delete each todos
   const trashIcon = document.createElement('i');
   trashIcon.className ='fa-solid fa-trash';
   trashIcon.id ='trash';


   //creating the done icon
   const completeIcon = document.createElement('i');
   completeIcon.className ='fa-solid fa-square-check';
   completeIcon.id = 'check';

   //completed message
   const completed = document.createElement('h4');
   completed.id = 'completed';
   completed.innerHTML =`COMPLETED TASKS`;
   completed.style.display ='none'
   
   //adding eventlistener to the edit con
   editIcon.addEventListener('click', ()=>{
    
   })

   //adding eventlistener to the complete icon
   completeIcon.addEventListener('click', ()=>{
    console.log("i am done");
    completed.style.display ='block';
     
   });

   //adding click to the trashIcon
   trashIcon.addEventListener('click', ()=>{
   _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.listItems.removeChild(list);
   })

  list.innerHTML =`<span>Task Title:</span> ${element.title} <br>
                   <span>Task Description:</span> ${element.description} <br>
                   <span>Task DueDate:</span> ${element.dueDate} <br>
                   <span>Task Priority:</span> ${element.priority} <br>
                   <span>Task Notes:</span> ${element.notes} <br>`;

             
  list.appendChild(completed);
  list.appendChild(editIcon);       
  list.appendChild(completeIcon);           
  list.appendChild(trashIcon);                
  _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.listItems.appendChild(list);
 
  
  console.log(list.appendChild(trashIcon));
  console.log(_Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.listItems.appendChild(list));
 
  return myTodos[list];

 });
}


function validateTodos(){
    if(_Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskTitle.value ==="" || _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDescription.value === "" || _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDueDate.value === "")
          {
              alert("Ensure you input all the values in the field")
              console.log("Ensure you input all the values in the field")
    
          }else{
                alert("The form has been submitted successfully");
                addTodos();
          }
         _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskTitle.value = "";
         _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDescription.value = "";
         _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDueDate.value = "";
        //taskPriority.value = "";

}





/***/ }),

/***/ "./src/Modules/todoFormSubmit.js":
/*!***************************************!*\
  !*** ./src/Modules/todoFormSubmit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formSubmit: () => (/* binding */ formSubmit)
/* harmony export */ });
/* harmony import */ var _addTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodo */ "./src/Modules/addTodo.js");
/* harmony import */ var _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout/DOM */ "./src/Layout/DOM.js");




//submitting the form
function formSubmit(){

    _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.form.addEventListener('submit', (e)=>{
        e.preventDefault();
        (0,_addTodo__WEBPACK_IMPORTED_MODULE_0__.validateTodos)();
    
    })
    

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
/* harmony import */ var _Modules_todoFormSubmit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/todoFormSubmit */ "./src/Modules/todoFormSubmit.js");
/* harmony import */ var _Components_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/default */ "./src/Components/default.js");
/* harmony import */ var _Modules_addProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/addProject */ "./src/Modules/addProject.js");









// console.log(formSubmit);
(0,_Modules_todoFormSubmit__WEBPACK_IMPORTED_MODULE_2__.formSubmit)();
(0,_Modules_addProject__WEBPACK_IMPORTED_MODULE_4__.submitProjects)();
(0,_Components_default__WEBPACK_IMPORTED_MODULE_3__.mydefaultProjects)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ1k7QUFDQztBQUNNO0FBQ0M7QUFDTTtBQUNHO0FBQ0g7O0FBRXREO0FBQ0EsbUVBQVU7QUFDVixtRUFBYztBQUNkLHNFQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvQ29tcG9uZW50cy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Db21wb25lbnRzL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9MYXlvdXQvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Nb2R1bGVzL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL01vZHVsZXMvYWRkVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvTW9kdWxlcy90b2RvRm9ybVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vQXNzZXRzL3BleGVscy1wb2xpbmEta292YWxldmEtNTcxNzQxMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0taGVhZGVyLS1iYWNrZ3JvdW4tY2xyOiM5ZTdiYjU7XG4gICAgLS1zaWRlYmFyLS1iYWNrZ3JvdW5kLWNscjojZDY3MjI5IDtcbiAgICAtLW1haW4tLWJhY2tncm91bmQtY2xyOndoaXRlO1xuIFxuICBcbn1cbip7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHl7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICBcbn1cbiNncmlkLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4vKiBzdHlsaW5nIGhlYWRlciBzZWN0aW9uICovXG5cbi5oZWFkZXItY29udGFpbmVye1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogc3R5bGluZyBzaWRlYmFyIHNlY3Rpb24gKi9cblxuLnNpZGViYXItY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItLWJhY2tncm91bmQtY2xyKTtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgIFxuXG59XG4uZ3JpZC1yb3ctc3BhbntcbiAgICBncmlkLXJvdzogc3BhbiAyO1xufVxuXG4uc2lkZWJhci1jb250ZW50e1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5teS1uYW1le1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cblxuLyogd29ya2luZyB3aXRoIHRoZSB1c2VyIGRldGFpbHMgKi9cbi51c2VyLXByb2ZpbGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICBcbn1cbi5wcm9qZWN0c3tcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4jYnRuLW5ldy1wcm9qZWN0e3BhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuXG59XG4ubXktcHJvamVjdHN7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4ucHJvamVjdC1idXR0b25ze1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuI3Byb2plY3R7XG5cbn1cblxuI3Byb2plY3Q+bGl7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4jcHJvamVjdD5saTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4uZ3JpZC1jb2x1bS1zcGFue1xuXG59XG5cbi8qIHN0eWxpbmcgbWFpbiBzZWN0aW9uICovXG5cbi5tYWluLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLS1iYWNrZ3JvdW5kLWNscik7XG4gICAgcGFkZGluZzogNDBweDtcbn1cblxuLnRhc2stY29udGFpbmVye1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4jdG9kb3N7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZ2FwOiAxMHB4O1xuXG59XG5zcGFue1xuICAgIGNvbG9yOiAjZDY3MjI5O1xuXG59XG4jdG9kb3M+bGl7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxufVxuI3RvZG9zPmxpOm50aC1jaGlsZChldmVuKXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XG4gICAgXG59XG5cbiNidG4tbmV3LXRhc2t7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDY3MjI5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuXG59XG4jYWRkLXNpZ257XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cblxuLyogc3R5bGluZyB0aGUgZm9ybSAqL1xuLnRvZG9zLWZvcm17XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmZvcm0tY29udHJvbHN7XG4gXG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgXG59XG5cbi5teS1wcmlvcml0eXtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5wcmlvcml0eXtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5teS1idXR0b25ze1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gXG59XG5cbiNidG4tY2xvc2V7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDY3MjI5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4jYnRuLWFkZHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2NzIyOTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jcGx1cy1zaWdue1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5idXR0b246aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi8qIHByb2plY3RzIGZvcm0gKi9cbi5wcm9qZWN0LWZvcm17XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuI3Byb2plY3QtdGl0bGV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuI2J0bi1jbG9zZS1wcm9qZWN0e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2NzIyOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG59XG4jYnRuLWFkZC1wcm9qZWN0e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDY3MjI5O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxufVxuXG4vKiBUb2RvcyAqL1xuI2VkaXR7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbiN0cmFzaHtcbiAgICBjb2xvcjogcmVkO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuIFxuICAgIC8qIHBhZGRpbmctbGVmdDogMTAwcHg7ICovXG59XG4jY2hlY2t7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBcbiAgICAvKiBmbG9hdDogcmlnaHQ7ICovXG5cbn1cbiNlZGl0OmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjaGVjazpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jdHJhc2g6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2NvbXBsZXRlZHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAvKiBjb2xvcjogbGlnaHRibHVlOyAqL1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0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akIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTs7QUFFaEI7O0FBRUEsVUFBVTtBQUNWO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCOztJQUVqQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCOztJQUVqQixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWhlYWRlci0tYmFja2dyb3VuLWNscjojOWU3YmI1O1xcbiAgICAtLXNpZGViYXItLWJhY2tncm91bmQtY2xyOiNkNjcyMjkgO1xcbiAgICAtLW1haW4tLWJhY2tncm91bmQtY2xyOndoaXRlO1xcbiBcXG4gIFxcbn1cXG4qe1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHl7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBsaW5lLWhlaWdodDogMS4zO1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgXFxufVxcbiNncmlkLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBzdHlsaW5nIGhlYWRlciBzZWN0aW9uICovXFxuXFxuLmhlYWRlci1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vQXNzZXRzL3BleGVscy1wb2xpbmEta292YWxldmEtNTcxNzQxMS5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIHN0eWxpbmcgc2lkZWJhciBzZWN0aW9uICovXFxuXFxuLnNpZGViYXItY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLS1iYWNrZ3JvdW5kLWNscik7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICBcXG5cXG59XFxuLmdyaWQtcm93LXNwYW57XFxuICAgIGdyaWQtcm93OiBzcGFuIDI7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRlbnR7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbi5teS1uYW1le1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG5cXG4vKiB3b3JraW5nIHdpdGggdGhlIHVzZXIgZGV0YWlscyAqL1xcbi51c2VyLXByb2ZpbGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgIFxcbn1cXG4ucHJvamVjdHN7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbiNidG4tbmV3LXByb2plY3R7cGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMHJlbTtcXG5cXG59XFxuLm15LXByb2plY3Rze1xcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcbi5wcm9qZWN0LWJ1dHRvbnN7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbn1cXG4jcHJvamVjdHtcXG5cXG59XFxuXFxuI3Byb2plY3Q+bGl7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuI3Byb2plY3Q+bGk6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4uZ3JpZC1jb2x1bS1zcGFue1xcblxcbn1cXG5cXG4vKiBzdHlsaW5nIG1haW4gc2VjdGlvbiAqL1xcblxcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi0tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI3RvZG9ze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxufVxcbnNwYW57XFxuICAgIGNvbG9yOiAjZDY3MjI5O1xcblxcbn1cXG4jdG9kb3M+bGl7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG5cXG59XFxuI3RvZG9zPmxpOm50aC1jaGlsZChldmVuKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xcbiAgICBcXG59XFxuXFxuI2J0bi1uZXctdGFza3tcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2NzIyOTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjByZW07XFxuXFxufVxcbiNhZGQtc2lnbntcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcblxcbi8qIHN0eWxpbmcgdGhlIGZvcm0gKi9cXG4udG9kb3MtZm9ybXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5mb3JtLWNvbnRyb2xze1xcbiBcXG59XFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJde1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgXFxufVxcblxcbi5teS1wcmlvcml0eXtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ucHJpb3JpdHl7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ubXktYnV0dG9uc3tcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcblxcbiBcXG59XFxuXFxuI2J0bi1jbG9zZXtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjcyMjk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG4jYnRuLWFkZHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjcyMjk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI3BsdXMtc2lnbntcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4vKiBwcm9qZWN0cyBmb3JtICovXFxuLnByb2plY3QtZm9ybXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuI3Byb2plY3QtdGl0bGV7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG59XFxuI2J0bi1jbG9zZS1wcm9qZWN0e1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2NzIyOTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuXFxufVxcbiNidG4tYWRkLXByb2plY3R7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDY3MjI5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbi8qIFRvZG9zICovXFxuI2VkaXR7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuI3RyYXNoe1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuIFxcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDEwMHB4OyAqL1xcbn1cXG4jY2hlY2t7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgXFxuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cXG5cXG59XFxuI2VkaXQ6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2NoZWNrOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiN0cmFzaDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jY29tcGxldGVke1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgLyogY29sb3I6IGxpZ2h0Ymx1ZTsgKi9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0SXRlbXMgfSBmcm9tIFwiLi4vTGF5b3V0L0RPTVwiO1xuaW1wb3J0IHsgaG9tZSwgcGVyc29uYWwsIHdvcmsgfSBmcm9tIFwiLi4vTGF5b3V0L0RPTVwiO1xuaW1wb3J0IHsgdG9kb3MgfSBmcm9tIFwiLi90b2Rvc1wiO1xuaW1wb3J0IHsgZm9ybVN1Ym1pdCB9IGZyb20gXCIuLi9Nb2R1bGVzL3RvZG9Gb3JtU3VibWl0XCI7XG5pbXBvcnQgeyBteURlZmF1bHRQcm9qZWN0cyB9IGZyb20gXCIuLi9MYXlvdXQvRE9NXCI7XG5cblxuXG5mdW5jdGlvbiBteWRlZmF1bHRQcm9qZWN0cygpe1xuXG5cblxuICAgICAgZm9yKGxldCBpPTA7IGkgPCBteURlZmF1bHRQcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0cHJvamVjdHMgPSBteURlZmF1bHRQcm9qZWN0c1tpXTtcbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGRlZmF1bHRwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvIHRoZXJlXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb3MnKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICAgIGZvcm1TdWJtaXQoKTsgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgfVxuICAgICAgLy8gaWYoaG9tZSl7XG5cbiAgICAgIC8vICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgIC8vICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9zJyk7XG4gICAgICAvLyAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgIC8vICAgZm9ybVN1Ym1pdCgpO1xuICAgICAgLy8gIH0gKTsgIFxuICBcbiAgICAgIC8vIH1cbn1cblxuZXhwb3J0e215ZGVmYXVsdFByb2plY3RzfTtcblxuXG4iLCJcbmNvbnN0IHByb2plY3QgPShuYW1lKT0+e1xuICAgIFxuICAgIHJldHVybiB7bmFtZX1cblxufVxuZXhwb3J0e3Byb2plY3R9OyIsImltcG9ydCB7IGZvcm1TdWJtaXQgfSBmcm9tIFwiLi4vTW9kdWxlcy9hZGRUb2RvXCJcblxuY29uc3QgdG9kb3M9KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksbm90ZXMpPT57XG4gICAgY29uc3QgZ2V0RGF0ZT0oKT0+e1xuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0b2Rvcz0oKT0+e1xuICAgICAgICByZXR1cm4gZm9ybVN1Ym1pdCgpO1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGdldERhdGUsIGdldG9kb3NcbiAgICB9XG5cbn1cbi8vIGNvbnN0IHRvZG9zMSA9IHRvZG9zKFwic2hvcHBpbmdcIiwgXCJnbyBzaG9wcGluZ1wiLCBcIjA0LzA5LzIwMjNcIixcImltcG9ydGFudFwiLCBcImFkZCBncm9jZXJpZXNcIik7XG4vLyBjb25zb2xlLmxvZyh0b2RvczEuZ2V0b2RvcygpKTtcblxuZXhwb3J0e3RvZG9zfTsiLCIvL1RPRE8gSU5QVVRcbmNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG5jb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG5jb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncHJpb3JpdHknKTtcbmNvbnN0IHRhc2tOb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlcycpO1xuXG4vL1BST0pFQ1QgSU5QVVRcbmNvbnN0IHByb2plY3RUaXRsZSA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKTtcblxuLy9ERUZBVUxUIFBST0pFQ1RTXG5jb25zdCBteURlZmF1bHRQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlZmF1bHQtcHJvamVjdHMnKTtcblxuLy88VUw+IExJU1QgSVRFTVxuY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9zJyk7XG5jb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuXG4vLzxMST4gUFJPSkVDVFMgaVRFTVxuY29uc3QgcGVyc29uYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVyc29uYWwtcHJvamVjdCcpO1xuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLXByb2plY3QnKTtcbmNvbnN0IHdvcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd29yay1wcm9qZWN0Jyk7XG5cbi8vRk9STSBcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybVN1Ym1pdCcpO1xuY29uc3QgcHJvamVjdEZvcm0gPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtUHJvamVjdFN1Ym1pdCcpO1xuXG4vL0JVVFRPTlxuY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tbmV3LXRhc2snKTtcbmNvbnN0IGNsb3NlVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tY2xvc2UnKTtcbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLW5ldy1wcm9qZWN0Jyk7XG5jb25zdCBjbG9zZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLWNsb3NlLXByb2plY3QnKTtcblxuXG4vL0VWRU5UIExJU1RFTkVSUyBUTyBUQVNLIEJVVFRPTlNcbm5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Rm9ybSk7XG5jbG9zZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0pO1xuXG4vL0VWRU5UIExJU1RFTkVSUyBUTyBQUk9KRUNUIEJVVFRPTlNcbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHNob3dQcm9qZWN0Rm9ybSk7XG5jbG9zZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVByb2plY3RGb3JtKTtcblxuXG4vL0ZVTkNUSU9OU1xuZnVuY3Rpb24gc2hvd0Zvcm0gKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWZvcm0nKS5zdHlsZS5kaXNwbGF5ID1cImJsb2NrXCI7XG5cbn1cblxuZnVuY3Rpb24gY2xvc2VGb3JtKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3RGb3JtKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpLnN0eWxlLmRpc3BsYXkgPVwiYmxvY2tcIjtcblxufVxuZnVuY3Rpb24gY2xvc2VQcm9qZWN0Rm9ybSgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKS5zdHlsZS5kaXNwbGF5ID1cIm5vbmVcIjtcbn1cbmV4cG9ydHtcbiAgICBzaG93Rm9ybSwgY2xvc2VGb3JtLCBzaG93UHJvamVjdEZvcm0sIGNsb3NlUHJvamVjdEZvcm0sXG4gICAgbGlzdEl0ZW1zLHByb2plY3RJdGVtcyxcbiAgICBmb3JtLCB0YXNrVGl0bGUsIHByb2plY3RGb3JtLFxuICAgIHRhc2tEZXNjcmlwdGlvbiwgXG4gICAgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSwgdGFza05vdGVzLFxuICAgIHBlcnNvbmFsLCBob21lLCB3b3JrLFxuICAgIHByb2plY3RUaXRsZSxcbiAgICBteURlZmF1bHRQcm9qZWN0c1xuICAgIH07IiwiaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuLi9Db21wb25lbnRzL3Byb2plY3RcIlxuaW1wb3J0IHsgcHJvamVjdEZvcm0sIHByb2plY3RJdGVtcywgcHJvamVjdFRpdGxlIH0gZnJvbSBcIi4uL0xheW91dC9ET01cIjtcblxuLy8gc3RvcmluZyBteSBwcm9qZWN0cyBpbiBhbiBhcnJheVxubGV0IG15UHJvamVjdHMgPVtdO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0cygpe1xuICAgIFxuIC8vY3JlYXRpbmcgYSBuZXcgaW5zdGFuY2Ugb2YgYW4gb2JqZWN0XG4gICAgY29uc3QgcHJvamVjdDEgPSBwcm9qZWN0KCk7XG4gICAgcHJvamVjdDEubmFtZSA9IHByb2plY3RUaXRsZS52YWx1ZVxuXG4gICAgLy9wdXNoaW5nIHRoZSBvYmplY3QgaW5zaWRlIHRoZSBhcnJheVxuICAgIG15UHJvamVjdHMucHVzaChwcm9qZWN0MSk7XG5cbiAgICAvL2xvb3BpbmcgdGhyb3VnaCB0aGUgb2JqZWN0c1xuICAgIG15UHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpPT57XG4gICAgICAgIG15UHJvamVjdHMgPSBbXTtcblxuXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZChcImRlZmF1bHQtcHJvamVjdHNcIik7XG4gICAgICAgIHByb2plY3RMaXN0LmlubmVySFRNTCA9YCR7ZWxlbWVudC5uYW1lfWA7XG5cbiAgICAgICAgcHJvamVjdEl0ZW1zLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcblxuICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2cobXlQcm9qZWN0c1twcm9qZWN0TGlzdF0pO1xuXG4gICAgICBcbiAgICAgICAgICAgIHJldHVybiBteVByb2plY3RzW3Byb2plY3RMaXN0XTtcbiAgICAgIFxuXG4gICAgfSk7XG4gICAgXG59XG5cblxuLy9zdWJtaXQgYnV0dG9uXG5mdW5jdGlvbiBzdWJtaXRQcm9qZWN0cygpe1xuICAgIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKHByb2plY3RUaXRsZS52YWx1ZSA9PT0gXCJcIiB8fCBwcm9qZWN0VGl0bGUudmFsdWUgPT09IG51bGwpe1xuICAgICAgICAgICAgYWxlcnQoXCJFbnN1cmUgeW91IGZpbGwgYWxsIHRoZSBpbnB1dHMgdmFsdWVzXCIpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBcbiAgICAgICAgICAgIGFsZXJ0KFwiRm9ybSBpcyBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICAgICAgIGFkZFByb2plY3RzKCk7XG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RUaXRsZS52YWx1ZSA9XCJcIjtcbiAgICAgICBcbiAgICB9KVxuXG59XG5cbmV4cG9ydCB7c3VibWl0UHJvamVjdHN9XG5cbiIsImltcG9ydCB7IHRvZG9zIH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvdG9kb3NcIjtcbmltcG9ydCB7IHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5LCB0YXNrTm90ZXMgfSBmcm9tIFwiLi4vTGF5b3V0L0RPTVwiO1xuaW1wb3J0IHsgbGlzdEl0ZW1zfSBmcm9tIFwiLi4vTGF5b3V0L0RPTVwiO1xuXG5cblxuXG4vL3dvcmtpbmcgd2l0aCB0aGUgcHJpb3JpdHkgZnVuY3Rpb25zXG5sZXQgdGFza1ByaW9yaXR5VmFsdWU7XG5mdW5jdGlvbiBkaXNwbGF5UHJpb3JpdHkoKXtcbiAgIGZvcihsZXQgaSA9MDsgaSA8IHRhc2tQcmlvcml0eS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKHRhc2tQcmlvcml0eVtpXS5jaGVja2VkKXtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eVZhbHVlID0gdGFza1ByaW9yaXR5W2ldLnZhbHVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFza1ByaW9yaXR5VmFsdWUgPSB0YXNrUHJpb3JpdHlbaV0udmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5cbi8vIHN0b3JpbmcgbXkgb2JqZWN0cyBpbiBhbiBhcnJheVxubGV0IG15VG9kb3MgPSBbXTtcblxuIGZ1bmN0aW9uIGFkZFRvZG9zKCl7XG5cbiBjb25zdCB0YXNrID10b2RvcygpO1xuXG4gZGlzcGxheVByaW9yaXR5KCk7XG5cbiB0YXNrLnRpdGxlID0gdGFza1RpdGxlLnZhbHVlO1xuIHRhc2suZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb24udmFsdWU7XG4gdGFzay5kdWVEYXRlID0gdGFza0R1ZURhdGUudmFsdWU7XG4gdGFzay5wcmlvcml0eSA9IHRhc2tQcmlvcml0eVZhbHVlO1xuIHRhc2subm90ZXMgPSB0YXNrTm90ZXMudmFsdWU7XG5cblxuIC8vcHVzaGluZyBteSB0YXNrcy90b2RvcyBpbnRvIHRoZSBhcnJheVxuIG15VG9kb3MucHVzaCh0YXNrKTtcblxuXG4gLy9sb29waW5nIHRocm91Z2ggbXkgdG9kbyBsaXN0c1xuIG15VG9kb3MuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpPT57XG5cbi8vY2xlYXIgdGhlIGFycmF5IG9uY2UgYW4gb2JqZWN0IGlzIHB1c2hlZFxubXlUb2RvcyA9IFtdO1xuICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgIC8vY3JlYXRpbmcgdGhlIGVkaXQgaWNvbiB0byBlZGl0IGVhY2ggdG9kb3NcbiAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgZWRpdEljb24uY2xhc3NOYW1lID0nZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlJztcbiAgIGVkaXRJY29uLmlkID0nZWRpdCdcblxuICAvL2NyZWF0aW5nIHRoZSB0cmFzaCBjYW4gdG8gZGVsZXRlIGVhY2ggdG9kb3NcbiAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgIHRyYXNoSWNvbi5jbGFzc05hbWUgPSdmYS1zb2xpZCBmYS10cmFzaCc7XG4gICB0cmFzaEljb24uaWQgPSd0cmFzaCc7XG5cblxuICAgLy9jcmVhdGluZyB0aGUgZG9uZSBpY29uXG4gICBjb25zdCBjb21wbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICBjb21wbGV0ZUljb24uY2xhc3NOYW1lID0nZmEtc29saWQgZmEtc3F1YXJlLWNoZWNrJztcbiAgIGNvbXBsZXRlSWNvbi5pZCA9ICdjaGVjayc7XG5cbiAgIC8vY29tcGxldGVkIG1lc3NhZ2VcbiAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICBjb21wbGV0ZWQuaWQgPSAnY29tcGxldGVkJztcbiAgIGNvbXBsZXRlZC5pbm5lckhUTUwgPWBDT01QTEVURUQgVEFTS1NgO1xuICAgY29tcGxldGVkLnN0eWxlLmRpc3BsYXkgPSdub25lJ1xuICAgXG4gICAvL2FkZGluZyBldmVudGxpc3RlbmVyIHRvIHRoZSBlZGl0IGNvblxuICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIFxuICAgfSlcblxuICAgLy9hZGRpbmcgZXZlbnRsaXN0ZW5lciB0byB0aGUgY29tcGxldGUgaWNvblxuICAgY29tcGxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBjb25zb2xlLmxvZyhcImkgYW0gZG9uZVwiKTtcbiAgICBjb21wbGV0ZWQuc3R5bGUuZGlzcGxheSA9J2Jsb2NrJztcbiAgICAgXG4gICB9KTtcblxuICAgLy9hZGRpbmcgY2xpY2sgdG8gdGhlIHRyYXNoSWNvblxuICAgdHJhc2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgIGxpc3RJdGVtcy5yZW1vdmVDaGlsZChsaXN0KTtcbiAgIH0pXG5cbiAgbGlzdC5pbm5lckhUTUwgPWA8c3Bhbj5UYXNrIFRpdGxlOjwvc3Bhbj4gJHtlbGVtZW50LnRpdGxlfSA8YnI+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4+VGFzayBEZXNjcmlwdGlvbjo8L3NwYW4+ICR7ZWxlbWVudC5kZXNjcmlwdGlvbn0gPGJyPlxuICAgICAgICAgICAgICAgICAgIDxzcGFuPlRhc2sgRHVlRGF0ZTo8L3NwYW4+ICR7ZWxlbWVudC5kdWVEYXRlfSA8YnI+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4+VGFzayBQcmlvcml0eTo8L3NwYW4+ICR7ZWxlbWVudC5wcmlvcml0eX0gPGJyPlxuICAgICAgICAgICAgICAgICAgIDxzcGFuPlRhc2sgTm90ZXM6PC9zcGFuPiAke2VsZW1lbnQubm90ZXN9IDxicj5gO1xuXG4gICAgICAgICAgICAgXG4gIGxpc3QuYXBwZW5kQ2hpbGQoY29tcGxldGVkKTtcbiAgbGlzdC5hcHBlbmRDaGlsZChlZGl0SWNvbik7ICAgICAgIFxuICBsaXN0LmFwcGVuZENoaWxkKGNvbXBsZXRlSWNvbik7ICAgICAgICAgICBcbiAgbGlzdC5hcHBlbmRDaGlsZCh0cmFzaEljb24pOyAgICAgICAgICAgICAgICBcbiAgbGlzdEl0ZW1zLmFwcGVuZENoaWxkKGxpc3QpO1xuIFxuICBcbiAgY29uc29sZS5sb2cobGlzdC5hcHBlbmRDaGlsZCh0cmFzaEljb24pKTtcbiAgY29uc29sZS5sb2cobGlzdEl0ZW1zLmFwcGVuZENoaWxkKGxpc3QpKTtcbiBcbiAgcmV0dXJuIG15VG9kb3NbbGlzdF07XG5cbiB9KTtcbn1cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRvZG9zKCl7XG4gICAgaWYodGFza1RpdGxlLnZhbHVlID09PVwiXCIgfHwgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID09PSBcIlwiIHx8IHRhc2tEdWVEYXRlLnZhbHVlID09PSBcIlwiKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYWxlcnQoXCJFbnN1cmUgeW91IGlucHV0IGFsbCB0aGUgdmFsdWVzIGluIHRoZSBmaWVsZFwiKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVuc3VyZSB5b3UgaW5wdXQgYWxsIHRoZSB2YWx1ZXMgaW4gdGhlIGZpZWxkXCIpXG4gICAgXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJUaGUgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICAgICAgICAgIGFkZFRvZG9zKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgdGFza1RpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIC8vdGFza1ByaW9yaXR5LnZhbHVlID0gXCJcIjtcblxufVxuXG5cblxuZXhwb3J0e3Rhc2tQcmlvcml0eVZhbHVlLCBteVRvZG9zLCB2YWxpZGF0ZVRvZG9zfSIsImltcG9ydCB7IHZhbGlkYXRlVG9kb3MgfSBmcm9tIFwiLi9hZGRUb2RvXCI7XG5pbXBvcnQgeyBmb3JtIH0gZnJvbSBcIi4uL0xheW91dC9ET01cIjtcblxuXG4vL3N1Ym1pdHRpbmcgdGhlIGZvcm1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtU3VibWl0KCl7XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhbGlkYXRlVG9kb3MoKTtcbiAgICBcbiAgICB9KVxuICAgIFxuXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCB7IHNob3dGb3JtIH0gZnJvbSAnLi9MYXlvdXQvRE9NJztcbmltcG9ydCB7IGNsb3NlRm9ybSB9IGZyb20gJy4vTGF5b3V0L0RPTSc7XG5pbXBvcnQgeyBzaG93UHJvamVjdEZvcm0gfSBmcm9tICcuL0xheW91dC9ET00nO1xuaW1wb3J0IHsgY2xvc2VQcm9qZWN0Rm9ybSB9IGZyb20gJy4vTGF5b3V0L0RPTSc7XG5pbXBvcnQgeyBmb3JtU3VibWl0IH0gZnJvbSAnLi9Nb2R1bGVzL3RvZG9Gb3JtU3VibWl0JztcbmltcG9ydCB7IG15ZGVmYXVsdFByb2plY3RzIH0gZnJvbSAnLi9Db21wb25lbnRzL2RlZmF1bHQnO1xuaW1wb3J0IHsgc3VibWl0UHJvamVjdHMgfSBmcm9tICcuL01vZHVsZXMvYWRkUHJvamVjdCc7XG5cbi8vIGNvbnNvbGUubG9nKGZvcm1TdWJtaXQpO1xuZm9ybVN1Ym1pdCgpO1xuc3VibWl0UHJvamVjdHMoKTtcbm15ZGVmYXVsdFByb2plY3RzKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==