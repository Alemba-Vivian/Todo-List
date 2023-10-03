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
    margin-left: 10px;

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

.strike{
    text-decoration: line-through;
   
}

p{
    padding: 5px;
}

`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --header--backgroun-clr:#9e7bb5;\n    --sidebar--background-clr:#d67229 ;\n    --main--background-clr:white;\n \n  \n}\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    min-height: 100vh;\n    line-height: 1.3;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n   \n}\n#grid-container{\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    height: 100vh;\n}\n\n/* styling header section */\n\n.header-container{\n    background: url('../Assets/pexels-polina-kovaleva-5717411.jpg');\n    background-size: cover;\n    background-position: center;\n    padding: 40px;\n    color: white;\n}\n\n/* styling sidebar section */\n\n.sidebar-container{\n    background-color: var(--sidebar--background-clr);\n    padding: 40px;\n    color: white;\n   \n\n}\n.grid-row-span{\n    grid-row: span 2;\n}\n\n.sidebar-content{\n    padding-bottom: 30px;\n    color: black;\n}\n.my-name{\n    padding-bottom: 5px;\n}\n\n\n/* working with the user details */\n.user-profile{\n    display: flex;\n    padding: 10px;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    border: 1px solid black;\n    border-radius: 10px;\n   \n}\n.projects{\n    padding-top: 40px;\n    color: black;\n}\n#btn-new-project{padding: 10px 20px 10px 20px;\n    background-color: orange;\n    color: white;\n    border-radius: 5px;\n    border: none;\n    font-size: 1.0rem;\n\n}\n.my-projects{\n    padding-top: 40px;\n    padding-bottom: 30px;\n}\n.project-buttons{\n    padding-top: 40px;\n}\n#project{\n\n}\n\n#project>li{\n    padding: 10px;\n    list-style-type: none;\n}\n#project>li:hover{\n    cursor: pointer;\n    background-color: orange;\n}\n\n.grid-colum-span{\n\n}\n\n/* styling main section */\n\n.main-container{\n    background-color: var(--main--background-clr);\n    padding: 40px;\n}\n\n.task-container{\n    padding-top: 40px;\n    padding-bottom: 20px;\n}\n\n#todos{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    list-style-type: none;\n    gap: 10px;\n  \n\n}\nspan{\n    color: #d67229;  \n    margin-left: 10px;\n\n}\n#todos>li{\n    padding: 10px;\n    background-color: lightblue;\n    border-radius: 20px;\n\n}\n#todos>li:nth-child(even){\n    background-color: lightpink;\n    \n}\n\n#btn-new-task{\n    padding: 10px 20px 10px 20px;\n    background-color: #d67229;\n    color: white;\n    border-radius: 5px;\n    border: none;\n    font-size: 1.0rem;\n\n}\n#add-sign{\n    margin-left: 10px;\n}\n\n\n/* styling the form */\n.todos-form{\n    display: none;\n    border: 1px solid lightgrey;\n    width: 300px;\n    margin-bottom: 20px;\n    padding: 20px;\n    border-radius: 20px;\n}\n.form-controls{\n \n}\ninput[type=\"text\"]{\n    padding: 10px;\n    border: none;\n    margin-bottom: 10px;\n   \n}\n\n.my-priority{\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n.priority{\n    padding-bottom: 10px;\n}\n.my-buttons{\n    padding-top: 10px;\n    padding-bottom: 10px;\n\n \n}\n\n#btn-close{\n    padding: 10px;\n    border-radius: 5px;\n    border: none;\n    background-color: #d67229;\n    color: white;\n    margin-right: 20px;\n}\n#btn-add{\n    padding: 10px;\n    border-radius: 5px;\n    border: none;\n    background-color: #d67229;\n    color: white;\n}\n#plus-sign{\n    margin-right: 5px;\n}\n\nbutton:hover{\n    cursor: pointer;\n}\n\n\n/* projects form */\n.project-form{\n    display: none;\n    border: 1px solid lightgray;\n    margin-bottom: 10px;\n    padding: 20px;\n    border-radius: 10px;\n    background-color: white;\n    margin-top: 20px;\n}\n\n#project-title{\n    border: 1px solid lightgray;\n}\n#btn-close-project{\n    padding: 10px;\n    font-weight: bold;\n    font-size: 1rem;\n    border-radius: 5px;\n    border: none;\n    background-color: #d67229;\n    color: white;\n    margin-right: 20px;\n\n}\n#btn-add-project{\n    padding: 10px;\n    border-radius: 5px;\n    border: none;\n    background-color: #d67229;\n    color: white;\n\n}\n\n/* Todos */\n#edit{\n    margin-left: 10px;\n    padding-top: 20px;\n}\n\n#trash{\n    color: red;\n    margin-left: 10px;\n    padding-top: 20px;\n \n    /* padding-left: 100px; */\n}\n#check{\n    padding-top: 20px;\n    color: green;\n    margin-left: 10px;\n  \n    /* float: right; */\n\n}\n#edit:hover{\n    cursor: pointer;\n}\n#check:hover{\n    cursor: pointer;\n}\n#trash:hover{\n    cursor: pointer;\n}\n#completed{\n    padding-top: 10px;\n    /* color: lightblue; */\n}\n\n.strike{\n    text-decoration: line-through;\n   \n}\n\np{\n    padding: 5px;\n}\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _Modules_addTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modules/addTodo */ "./src/Modules/addTodo.js");








function mydefaultProjects(){



      for(let i=0; i < _Layout_DOM__WEBPACK_IMPORTED_MODULE_0__.myDefaultProjects.length; i++){
            const defaultprojects = _Layout_DOM__WEBPACK_IMPORTED_MODULE_0__.myDefaultProjects[i];
           

            defaultprojects.addEventListener('click', ()=>{
                  console.log("hello there")
                  const container = document.querySelector('#todos');
                  container.replaceChildren();
                  (0,_Modules_addTodo__WEBPACK_IMPORTED_MODULE_2__.formSubmit)();    
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

//TODAY DATE
const todayDate = document.getElementById('today-date');
const today = document.getElementById('today');
const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const currentDate = `${day}/${month}/${year}`;
todayDate.textContent =currentDate;
today.textContent = currentDate;

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
/* harmony export */   formSubmit: () => (/* binding */ formSubmit),
/* harmony export */   myTodos: () => (/* binding */ myTodos),
/* harmony export */   taskPriorityValue: () => (/* binding */ taskPriorityValue),
/* harmony export */   validateTodos: () => (/* binding */ validateTodos)
/* harmony export */ });
/* harmony import */ var _Components_todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/todos */ "./src/Components/todos.js");
/* harmony import */ var _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout/DOM */ "./src/Layout/DOM.js");





//Dom
const closeModal = document.getElementById('btn-add');


//when the add button is clicked
//submitting the form
const formSubmit = () => {
  _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateTodos();
  });
};

//form validations
const validateTodos = () => {
  if (
    _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskTitle.value === "" ||
    _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDescription.value === "" ||
    _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDueDate.value === ""
  ) {
    alert("Ensure you input all the values in the field");
    console.log("Ensure you input all the values in the field");
  } else {
    acceptData();
    
    (0,_Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.closeForm)();
    closeModal.click();
      
    // IIEF Immediately Invoked Expression Functions
    (()=>{
        (0,_Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.closeForm)();
    })()


  }
  
};


//working with the priority functions
let taskPriorityValue;
function displayPriority() {
  for (let i = 0; i < _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskPriority.length; i++) {
    if (_Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskPriority[i].checked) {
      taskPriorityValue = _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskPriority[i].value;
      // console.log((taskPriorityValue = taskPriority[i].value));
    }
  }
}




//Accepting data
// storing my objects in an array
let myTodos = [];

const acceptData = () => {
  //  const task = todos();
    displayPriority();

    myTodos.push(
    (0,_Components_todos__WEBPACK_IMPORTED_MODULE_0__.todos)(
      _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskTitle.value,
      _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDescription.value,
      _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDueDate.value,
      taskPriorityValue, 
      _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskNotes.value)
    
  )

  // task.title = taskTitle.value;
  // task.description = taskDescription.value;
  // task.dueDate = taskDueDate.value;
  // task.priority = taskPriorityValue;
  // task.notes = taskNotes.value;

  //pushing my tasks/todos into the array
  // myTodos.push(task);
  console.log( myTodos);

  //storing my todos to the localstorage
  localStorage.setItem("myTodos", JSON.stringify(myTodos));
 

  addTodos(); 


 
};



const addTodos = () => {
    _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.listItems.innerHTML ="";
  //looping through my todo lists
   
    myTodos.forEach((element, index) => {
    //clear the array once an object is pushed
  
    const list = document.createElement("li")
    list.id = index;
        // //CREATING P TAG FOR THE INPUTS RECEIVED FROM THE USER
    const titleHTML = document.createElement("p");
    titleHTML.id = "title";
    titleHTML.textContent = `${element.title}`;

    const descriptionHTML = document.createElement("p");
    descriptionHTML.id = "description";
    descriptionHTML.textContent = `${element.description}`;

    const dueDateHTML = document.createElement("p");
    dueDateHTML.id = "dueDate";
    dueDateHTML.textContent = `${element.dueDate}`;

    const priorityHTML = document.createElement("p");
    priorityHTML.id = "priority";
    priorityHTML.textContent = ` ${element.priority}`;

    const notesHTML = document.createElement("p");
    notesHTML.id = "notes";
    notesHTML.textContent = ` ${element.notes}`;


    //creating the edit icon to edit each todos
    const editIcon = document.createElement("i");
    editIcon.className = "fa-regular fa-pen-to-square";
    editIcon.id = "edit";
    editIcon.classList.add("edit-me");


       //adding eventlistener to the edit con

      editIcon.addEventListener("click", () => {

      (0,_Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.showForm)();

      const selectedTodos = list;

      _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskTitle.value = selectedTodos.children[0].innerHTML;
      _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDescription.value = selectedTodos.children[1].innerHTML;
      _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDueDate.value = selectedTodos.children[2].innerHTML;
      _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskPriority.value = selectedTodos.children[3].innerHTML;
      _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskNotes.value = selectedTodos.children[4].innerHTML;
      console.log((_Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskTitle.value = selectedTodos.children[0].innerHTML));

      selectedTodos.remove();



      });

     //creating the done icon
     const completeIcon = document.createElement("i");
     completeIcon.className = "fa-solid fa-square-check";
     completeIcon.id = "check";


    //adding eventlistener to the complete icon
      completeIcon.addEventListener("click", () => {
    
      // completed.style.display ='block';
      list.classList.toggle("strike");
    });





    //creating the trash can to delete each todos
    const trashIcon = document.createElement("i");
    trashIcon.className = "fa-solid fa-trash";
    trashIcon.id = "trash";

   // //adding click to the trashIcon

    trashIcon.addEventListener("click", () => {
      _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.listItems.removeChild(list);
      console.log(list.id);

      //removing from the localstorage
      myTodos.splice(list.id, 1);
       //updating my todos in the localstorage
     localStorage.setItem("myTodos", JSON.stringify(myTodos))

      console.log(myTodos);
    });

 
   
    //APPENDING THE TAGS TO THE LIST
    list.appendChild(titleHTML);
    list.appendChild(descriptionHTML);
    list.appendChild(dueDateHTML);
    list.appendChild(priorityHTML);
    list.appendChild(notesHTML);

    list.appendChild(editIcon);
    list.appendChild(completeIcon);
    list.appendChild(trashIcon);
    _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.listItems.appendChild(list);


    // return myTodos[list];
    // console.log( myTodos);
   
   
  return myTodos[list];
    
})

  resetForm();

  
 
  };

const resetForm=()=>{
    _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskTitle.value = "";
    _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDescription.value = "";
    _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDueDate.value = "";
 

}

//IIEF
(()=>{
  myTodos =JSON.parse(localStorage.getItem("myTodos"));
  console.log(myTodos);
  addTodos();

})()




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
/* harmony import */ var _Modules_addProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/addProject */ "./src/Modules/addProject.js");









// console.log(formSubmit);
(0,_Modules_addTodo__WEBPACK_IMPORTED_MODULE_2__.formSubmit)();
(0,_Modules_addProject__WEBPACK_IMPORTED_MODULE_4__.submitProjects)();
// mydefaultProjects();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixhQUFhLFdBQVcsWUFBWSxXQUFXLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxLQUFLLEtBQUssVUFBVSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLGFBQWEsTUFBTSxLQUFLLFlBQVksUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGVBQWUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsYUFBYSxjQUFjLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsZ0NBQWdDLHNDQUFzQyx5Q0FB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b0RBQVc7QUFDZjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRWdFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RQakU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNZO0FBQ0M7QUFDTTtBQUNDO0FBQ0Q7QUFDVTtBQUNIOztBQUV0RDtBQUNBLDREQUFVO0FBQ1YsbUVBQWM7QUFDZCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvQ29tcG9uZW50cy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Db21wb25lbnRzL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9MYXlvdXQvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Nb2R1bGVzL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL01vZHVsZXMvYWRkVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vQXNzZXRzL3BleGVscy1wb2xpbmEta292YWxldmEtNTcxNzQxMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0taGVhZGVyLS1iYWNrZ3JvdW4tY2xyOiM5ZTdiYjU7XG4gICAgLS1zaWRlYmFyLS1iYWNrZ3JvdW5kLWNscjojZDY3MjI5IDtcbiAgICAtLW1haW4tLWJhY2tncm91bmQtY2xyOndoaXRlO1xuIFxuICBcbn1cbip7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHl7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICBcbn1cbiNncmlkLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4vKiBzdHlsaW5nIGhlYWRlciBzZWN0aW9uICovXG5cbi5oZWFkZXItY29udGFpbmVye1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogc3R5bGluZyBzaWRlYmFyIHNlY3Rpb24gKi9cblxuLnNpZGViYXItY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItLWJhY2tncm91bmQtY2xyKTtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgIFxuXG59XG4uZ3JpZC1yb3ctc3BhbntcbiAgICBncmlkLXJvdzogc3BhbiAyO1xufVxuXG4uc2lkZWJhci1jb250ZW50e1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5teS1uYW1le1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cblxuLyogd29ya2luZyB3aXRoIHRoZSB1c2VyIGRldGFpbHMgKi9cbi51c2VyLXByb2ZpbGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICBcbn1cbi5wcm9qZWN0c3tcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4jYnRuLW5ldy1wcm9qZWN0e3BhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuXG59XG4ubXktcHJvamVjdHN7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4ucHJvamVjdC1idXR0b25ze1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuI3Byb2plY3R7XG5cbn1cblxuI3Byb2plY3Q+bGl7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4jcHJvamVjdD5saTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4uZ3JpZC1jb2x1bS1zcGFue1xuXG59XG5cbi8qIHN0eWxpbmcgbWFpbiBzZWN0aW9uICovXG5cbi5tYWluLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLS1iYWNrZ3JvdW5kLWNscik7XG4gICAgcGFkZGluZzogNDBweDtcbn1cblxuLnRhc2stY29udGFpbmVye1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4jdG9kb3N7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZ2FwOiAxMHB4O1xuICBcblxufVxuc3BhbntcbiAgICBjb2xvcjogI2Q2NzIyOTsgIFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG59XG4jdG9kb3M+bGl7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxufVxuI3RvZG9zPmxpOm50aC1jaGlsZChldmVuKXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XG4gICAgXG59XG5cbiNidG4tbmV3LXRhc2t7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDY3MjI5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuXG59XG4jYWRkLXNpZ257XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cblxuLyogc3R5bGluZyB0aGUgZm9ybSAqL1xuLnRvZG9zLWZvcm17XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmZvcm0tY29udHJvbHN7XG4gXG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgXG59XG5cbi5teS1wcmlvcml0eXtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5wcmlvcml0eXtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5teS1idXR0b25ze1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gXG59XG5cbiNidG4tY2xvc2V7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjcyMjk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbiNidG4tYWRke1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDY3MjI5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNwbHVzLXNpZ257XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmJ1dHRvbjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLyogcHJvamVjdHMgZm9ybSAqL1xuLnByb2plY3QtZm9ybXtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4jcHJvamVjdC10aXRsZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4jYnRuLWNsb3NlLXByb2plY3R7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDY3MjI5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbn1cbiNidG4tYWRkLXByb2plY3R7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjcyMjk7XG4gICAgY29sb3I6IHdoaXRlO1xuXG59XG5cbi8qIFRvZG9zICovXG4jZWRpdHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuI3RyYXNoe1xuICAgIGNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gXG4gICAgLyogcGFkZGluZy1sZWZ0OiAxMDBweDsgKi9cbn1cbiNjaGVja3tcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIFxuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cblxufVxuI2VkaXQ6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2NoZWNrOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN0cmFzaDpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jY29tcGxldGVke1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIC8qIGNvbG9yOiBsaWdodGJsdWU7ICovXG59XG5cbi5zdHJpa2V7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICBcbn1cblxucHtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLDRCQUE0Qjs7O0FBR2hDO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtSkFBbUo7O0FBRXZKO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7O0FBRUEsMkJBQTJCOztBQUUzQjtJQUNJLG1EQUErRDtJQUMvRCxzQkFBc0I7SUFDdEIs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OztJQUVqQixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0taGVhZGVyLS1iYWNrZ3JvdW4tY2xyOiM5ZTdiYjU7XFxuICAgIC0tc2lkZWJhci0tYmFja2dyb3VuZC1jbHI6I2Q2NzIyOSA7XFxuICAgIC0tbWFpbi0tYmFja2dyb3VuZC1jbHI6d2hpdGU7XFxuIFxcbiAgXFxufVxcbip7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keXtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICBcXG59XFxuI2dyaWQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIHN0eWxpbmcgaGVhZGVyIHNlY3Rpb24gKi9cXG5cXG4uaGVhZGVyLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9Bc3NldHMvcGV4ZWxzLXBvbGluYS1rb3ZhbGV2YS01NzE3NDExLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogc3R5bGluZyBzaWRlYmFyIHNlY3Rpb24gKi9cXG5cXG4uc2lkZWJhci1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItLWJhY2tncm91bmQtY2xyKTtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgIFxcblxcbn1cXG4uZ3JpZC1yb3ctc3BhbntcXG4gICAgZ3JpZC1yb3c6IHNwYW4gMjtcXG59XFxuXFxuLnNpZGViYXItY29udGVudHtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuLm15LW5hbWV7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcblxcbi8qIHdvcmtpbmcgd2l0aCB0aGUgdXNlciBkZXRhaWxzICovXFxuLnVzZXItcHJvZmlsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgXFxufVxcbi5wcm9qZWN0c3tcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuI2J0bi1uZXctcHJvamVjdHtwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xcblxcbn1cXG4ubXktcHJvamVjdHN7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuLnByb2plY3QtYnV0dG9uc3tcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxufVxcbiNwcm9qZWN0e1xcblxcbn1cXG5cXG4jcHJvamVjdD5saXtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4jcHJvamVjdD5saTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5ncmlkLWNvbHVtLXNwYW57XFxuXFxufVxcblxcbi8qIHN0eWxpbmcgbWFpbiBzZWN0aW9uICovXFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLS1iYWNrZ3JvdW5kLWNscik7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lcntcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jdG9kb3N7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGdhcDogMTBweDtcXG4gIFxcblxcbn1cXG5zcGFue1xcbiAgICBjb2xvcjogI2Q2NzIyOTsgIFxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG5cXG59XFxuI3RvZG9zPmxpe1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFxufVxcbiN0b2Rvcz5saTpudGgtY2hpbGQoZXZlbil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0cGluaztcXG4gICAgXFxufVxcblxcbiNidG4tbmV3LXRhc2t7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjcyMjk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xcblxcbn1cXG4jYWRkLXNpZ257XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5cXG4vKiBzdHlsaW5nIHRoZSBmb3JtICovXFxuLnRvZG9zLWZvcm17XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uZm9ybS1jb250cm9sc3tcXG4gXFxufVxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXXtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgIFxcbn1cXG5cXG4ubXktcHJpb3JpdHl7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLnByaW9yaXR5e1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLm15LWJ1dHRvbnN7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG5cXG4gXFxufVxcblxcbiNidG4tY2xvc2V7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDY3MjI5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuI2J0bi1hZGR7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDY3MjI5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiNwbHVzLXNpZ257XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG5idXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLyogcHJvamVjdHMgZm9ybSAqL1xcbi5wcm9qZWN0LWZvcm17XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxle1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxufVxcbiNidG4tY2xvc2UtcHJvamVjdHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjcyMjk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcblxcbn1cXG4jYnRuLWFkZC1wcm9qZWN0e1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2NzIyOTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG4vKiBUb2RvcyAqL1xcbiNlZGl0e1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbiN0cmFzaHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiBcXG4gICAgLyogcGFkZGluZy1sZWZ0OiAxMDBweDsgKi9cXG59XFxuI2NoZWNre1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIFxcbiAgICAvKiBmbG9hdDogcmlnaHQ7ICovXFxuXFxufVxcbiNlZGl0OmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNjaGVjazpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jdHJhc2g6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2NvbXBsZXRlZHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIC8qIGNvbG9yOiBsaWdodGJsdWU7ICovXFxufVxcblxcbi5zdHJpa2V7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgIFxcbn1cXG5cXG5we1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdEl0ZW1zIH0gZnJvbSBcIi4uL0xheW91dC9ET01cIjtcbmltcG9ydCB7IGhvbWUsIHBlcnNvbmFsLCB3b3JrIH0gZnJvbSBcIi4uL0xheW91dC9ET01cIjtcbmltcG9ydCB7IHRvZG9zIH0gZnJvbSBcIi4vdG9kb3NcIjtcbmltcG9ydCB7IGZvcm1TdWJtaXQgfSBmcm9tIFwiLi4vTW9kdWxlcy9hZGRUb2RvXCI7XG5pbXBvcnQgeyBteURlZmF1bHRQcm9qZWN0cyB9IGZyb20gXCIuLi9MYXlvdXQvRE9NXCI7XG5cblxuXG5mdW5jdGlvbiBteWRlZmF1bHRQcm9qZWN0cygpe1xuXG5cblxuICAgICAgZm9yKGxldCBpPTA7IGkgPCBteURlZmF1bHRQcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0cHJvamVjdHMgPSBteURlZmF1bHRQcm9qZWN0c1tpXTtcbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGRlZmF1bHRwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvIHRoZXJlXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb3MnKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICAgIGZvcm1TdWJtaXQoKTsgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgfVxuICAgICAgLy8gaWYoaG9tZSl7XG5cbiAgICAgIC8vICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgIC8vICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9zJyk7XG4gICAgICAvLyAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgIC8vICAgZm9ybVN1Ym1pdCgpO1xuICAgICAgLy8gIH0gKTsgIFxuICBcbiAgICAgIC8vIH1cbn1cblxuZXhwb3J0e215ZGVmYXVsdFByb2plY3RzfTtcblxuXG4iLCJcbmNvbnN0IHByb2plY3QgPShuYW1lKT0+e1xuICAgIFxuICAgIHJldHVybiB7bmFtZX1cblxufVxuZXhwb3J0e3Byb2plY3R9OyIsImltcG9ydCB7IGZvcm1TdWJtaXQgfSBmcm9tIFwiLi4vTW9kdWxlcy9hZGRUb2RvXCJcblxuY29uc3QgdG9kb3M9KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksbm90ZXMpPT57XG4gICAgY29uc3QgZ2V0RGF0ZT0oKT0+e1xuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0b2Rvcz0oKT0+e1xuICAgICAgICByZXR1cm4gZm9ybVN1Ym1pdCgpO1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGdldERhdGUsIGdldG9kb3NcbiAgICB9XG5cbn1cbi8vIGNvbnN0IHRvZG9zMSA9IHRvZG9zKFwic2hvcHBpbmdcIiwgXCJnbyBzaG9wcGluZ1wiLCBcIjA0LzA5LzIwMjNcIixcImltcG9ydGFudFwiLCBcImFkZCBncm9jZXJpZXNcIik7XG4vLyBjb25zb2xlLmxvZyh0b2RvczEuZ2V0b2RvcygpKTtcblxuZXhwb3J0e3RvZG9zfTsiLCIvL1RPRE8gSU5QVVRcbmNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG5jb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG5jb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncHJpb3JpdHknKTtcbmNvbnN0IHRhc2tOb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlcycpO1xuXG4vL1RPREFZIERBVEVcbmNvbnN0IHRvZGF5RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1kYXRlJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheScpO1xuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbmNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuY29uc3QgY3VycmVudERhdGUgPSBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xudG9kYXlEYXRlLnRleHRDb250ZW50ID1jdXJyZW50RGF0ZTtcbnRvZGF5LnRleHRDb250ZW50ID0gY3VycmVudERhdGU7XG5cbi8vUFJPSkVDVCBJTlBVVFxuY29uc3QgcHJvamVjdFRpdGxlID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpO1xuXG4vL0RFRkFVTFQgUFJPSkVDVFNcbmNvbnN0IG15RGVmYXVsdFByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVmYXVsdC1wcm9qZWN0cycpO1xuXG4vLzxVTD4gTElTVCBJVEVNXG5jb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb3MnKTtcbmNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XG5cbi8vPExJPiBQUk9KRUNUUyBpVEVNXG5jb25zdCBwZXJzb25hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXJzb25hbC1wcm9qZWN0Jyk7XG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtcHJvamVjdCcpO1xuY29uc3Qgd29yayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3b3JrLXByb2plY3QnKTtcblxuLy9GT1JNIFxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtU3VibWl0Jyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1Qcm9qZWN0U3VibWl0Jyk7XG5cbi8vQlVUVE9OXG5jb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1uZXctdGFzaycpO1xuY29uc3QgY2xvc2VUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1jbG9zZScpO1xuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tbmV3LXByb2plY3QnKTtcbmNvbnN0IGNsb3NlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tY2xvc2UtcHJvamVjdCcpO1xuXG5cbi8vRVZFTlQgTElTVEVORVJTIFRPIFRBU0sgQlVUVE9OU1xubmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dGb3JtKTtcbmNsb3NlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRm9ybSk7XG5cbi8vRVZFTlQgTElTVEVORVJTIFRPIFBST0pFQ1QgQlVUVE9OU1xubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsc2hvd1Byb2plY3RGb3JtKTtcbmNsb3NlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUHJvamVjdEZvcm0pO1xuXG5cbi8vRlVOQ1RJT05TXG5mdW5jdGlvbiBzaG93Rm9ybSAoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MtZm9ybScpLnN0eWxlLmRpc3BsYXkgPVwiYmxvY2tcIjtcblxufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MtZm9ybScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdEZvcm0oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJykuc3R5bGUuZGlzcGxheSA9XCJibG9ja1wiO1xuXG59XG5mdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpLnN0eWxlLmRpc3BsYXkgPVwibm9uZVwiO1xufVxuZXhwb3J0e1xuICAgIHNob3dGb3JtLCBjbG9zZUZvcm0sIHNob3dQcm9qZWN0Rm9ybSwgY2xvc2VQcm9qZWN0Rm9ybSxcbiAgICBsaXN0SXRlbXMscHJvamVjdEl0ZW1zLFxuICAgIGZvcm0sIHRhc2tUaXRsZSwgcHJvamVjdEZvcm0sXG4gICAgdGFza0Rlc2NyaXB0aW9uLCBcbiAgICB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5LCB0YXNrTm90ZXMsXG4gICAgcGVyc29uYWwsIGhvbWUsIHdvcmssXG4gICAgcHJvamVjdFRpdGxlLFxuICAgIG15RGVmYXVsdFByb2plY3RzXG4gICAgfTsiLCJpbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvcHJvamVjdFwiXG5pbXBvcnQgeyBwcm9qZWN0Rm9ybSwgcHJvamVjdEl0ZW1zLCBwcm9qZWN0VGl0bGUgfSBmcm9tIFwiLi4vTGF5b3V0L0RPTVwiO1xuXG4vLyBzdG9yaW5nIG15IHByb2plY3RzIGluIGFuIGFycmF5XG5sZXQgbXlQcm9qZWN0cyA9W107XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RzKCl7XG4gICAgXG4gLy9jcmVhdGluZyBhIG5ldyBpbnN0YW5jZSBvZiBhbiBvYmplY3RcbiAgICBjb25zdCBwcm9qZWN0MSA9IHByb2plY3QoKTtcbiAgICBwcm9qZWN0MS5uYW1lID0gcHJvamVjdFRpdGxlLnZhbHVlXG5cbiAgICAvL3B1c2hpbmcgdGhlIG9iamVjdCBpbnNpZGUgdGhlIGFycmF5XG4gICAgbXlQcm9qZWN0cy5wdXNoKHByb2plY3QxKTtcblxuICAgIC8vbG9vcGluZyB0aHJvdWdoIHRoZSBvYmplY3RzXG4gICAgbXlQcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCk9PntcbiAgICAgICAgbXlQcm9qZWN0cyA9IFtdO1xuXG5cbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKFwiZGVmYXVsdC1wcm9qZWN0c1wiKTtcbiAgICAgICAgcHJvamVjdExpc3QuaW5uZXJIVE1MID1gJHtlbGVtZW50Lm5hbWV9YDtcblxuICAgICAgICBwcm9qZWN0SXRlbXMuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xuXG4gICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhteVByb2plY3RzW3Byb2plY3RMaXN0XSk7XG5cbiAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG15UHJvamVjdHNbcHJvamVjdExpc3RdO1xuICAgICAgXG5cbiAgICB9KTtcbiAgICBcbn1cblxuXG4vL3N1Ym1pdCBidXR0b25cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3RzKCl7XG4gICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYocHJvamVjdFRpdGxlLnZhbHVlID09PSBcIlwiIHx8IHByb2plY3RUaXRsZS52YWx1ZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICBhbGVydChcIkVuc3VyZSB5b3UgZmlsbCBhbGwgdGhlIGlucHV0cyB2YWx1ZXNcIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIFxuICAgICAgICAgICAgYWxlcnQoXCJGb3JtIGlzIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHlcIik7XG4gICAgICAgICAgICAgYWRkUHJvamVjdHMoKTtcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID1cIlwiO1xuICAgICAgIFxuICAgIH0pXG5cbn1cblxuZXhwb3J0IHtzdWJtaXRQcm9qZWN0c31cblxuIiwiaW1wb3J0IHsgdG9kb3MgfSBmcm9tIFwiLi4vQ29tcG9uZW50cy90b2Rvc1wiO1xuaW1wb3J0IHtcbiAgdGFza1RpdGxlLFxuICB0YXNrRGVzY3JpcHRpb24sXG4gIHRhc2tEdWVEYXRlLFxuICB0YXNrUHJpb3JpdHksXG4gIHRhc2tOb3RlcyxcbiAgZm9ybSxcbiAgY2xvc2VGb3JtLFxufSBmcm9tIFwiLi4vTGF5b3V0L0RPTVwiO1xuaW1wb3J0IHsgbGlzdEl0ZW1zIH0gZnJvbSBcIi4uL0xheW91dC9ET01cIjtcbmltcG9ydCB7IHNob3dGb3JtIH0gZnJvbSBcIi4uL0xheW91dC9ET01cIjtcblxuLy9Eb21cbmNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWFkZCcpO1xuXG5cbi8vd2hlbiB0aGUgYWRkIGJ1dHRvbiBpcyBjbGlja2VkXG4vL3N1Ym1pdHRpbmcgdGhlIGZvcm1cbmNvbnN0IGZvcm1TdWJtaXQgPSAoKSA9PiB7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YWxpZGF0ZVRvZG9zKCk7XG4gIH0pO1xufTtcblxuLy9mb3JtIHZhbGlkYXRpb25zXG5jb25zdCB2YWxpZGF0ZVRvZG9zID0gKCkgPT4ge1xuICBpZiAoXG4gICAgdGFza1RpdGxlLnZhbHVlID09PSBcIlwiIHx8XG4gICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID09PSBcIlwiIHx8XG4gICAgdGFza0R1ZURhdGUudmFsdWUgPT09IFwiXCJcbiAgKSB7XG4gICAgYWxlcnQoXCJFbnN1cmUgeW91IGlucHV0IGFsbCB0aGUgdmFsdWVzIGluIHRoZSBmaWVsZFwiKTtcbiAgICBjb25zb2xlLmxvZyhcIkVuc3VyZSB5b3UgaW5wdXQgYWxsIHRoZSB2YWx1ZXMgaW4gdGhlIGZpZWxkXCIpO1xuICB9IGVsc2Uge1xuICAgIGFjY2VwdERhdGEoKTtcbiAgICBcbiAgICBjbG9zZUZvcm0oKTtcbiAgICBjbG9zZU1vZGFsLmNsaWNrKCk7XG4gICAgICBcbiAgICAvLyBJSUVGIEltbWVkaWF0ZWx5IEludm9rZWQgRXhwcmVzc2lvbiBGdW5jdGlvbnNcbiAgICAoKCk9PntcbiAgICAgICAgY2xvc2VGb3JtKCk7XG4gICAgfSkoKVxuXG5cbiAgfVxuICBcbn07XG5cblxuLy93b3JraW5nIHdpdGggdGhlIHByaW9yaXR5IGZ1bmN0aW9uc1xubGV0IHRhc2tQcmlvcml0eVZhbHVlO1xuZnVuY3Rpb24gZGlzcGxheVByaW9yaXR5KCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tQcmlvcml0eS5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0YXNrUHJpb3JpdHlbaV0uY2hlY2tlZCkge1xuICAgICAgdGFza1ByaW9yaXR5VmFsdWUgPSB0YXNrUHJpb3JpdHlbaV0udmFsdWU7XG4gICAgICAvLyBjb25zb2xlLmxvZygodGFza1ByaW9yaXR5VmFsdWUgPSB0YXNrUHJpb3JpdHlbaV0udmFsdWUpKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuLy9BY2NlcHRpbmcgZGF0YVxuLy8gc3RvcmluZyBteSBvYmplY3RzIGluIGFuIGFycmF5XG5sZXQgbXlUb2RvcyA9IFtdO1xuXG5jb25zdCBhY2NlcHREYXRhID0gKCkgPT4ge1xuICAvLyAgY29uc3QgdGFzayA9IHRvZG9zKCk7XG4gICAgZGlzcGxheVByaW9yaXR5KCk7XG5cbiAgICBteVRvZG9zLnB1c2goXG4gICAgdG9kb3MoXG4gICAgICB0YXNrVGl0bGUudmFsdWUsXG4gICAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUsXG4gICAgICB0YXNrRHVlRGF0ZS52YWx1ZSxcbiAgICAgIHRhc2tQcmlvcml0eVZhbHVlLCBcbiAgICAgIHRhc2tOb3Rlcy52YWx1ZSlcbiAgICBcbiAgKVxuXG4gIC8vIHRhc2sudGl0bGUgPSB0YXNrVGl0bGUudmFsdWU7XG4gIC8vIHRhc2suZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb24udmFsdWU7XG4gIC8vIHRhc2suZHVlRGF0ZSA9IHRhc2tEdWVEYXRlLnZhbHVlO1xuICAvLyB0YXNrLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5VmFsdWU7XG4gIC8vIHRhc2subm90ZXMgPSB0YXNrTm90ZXMudmFsdWU7XG5cbiAgLy9wdXNoaW5nIG15IHRhc2tzL3RvZG9zIGludG8gdGhlIGFycmF5XG4gIC8vIG15VG9kb3MucHVzaCh0YXNrKTtcbiAgY29uc29sZS5sb2coIG15VG9kb3MpO1xuXG4gIC8vc3RvcmluZyBteSB0b2RvcyB0byB0aGUgbG9jYWxzdG9yYWdlXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlUb2Rvc1wiLCBKU09OLnN0cmluZ2lmeShteVRvZG9zKSk7XG4gXG5cbiAgYWRkVG9kb3MoKTsgXG5cblxuIFxufTtcblxuXG5cbmNvbnN0IGFkZFRvZG9zID0gKCkgPT4ge1xuICAgIGxpc3RJdGVtcy5pbm5lckhUTUwgPVwiXCI7XG4gIC8vbG9vcGluZyB0aHJvdWdoIG15IHRvZG8gbGlzdHNcbiAgIFxuICAgIG15VG9kb3MuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAvL2NsZWFyIHRoZSBhcnJheSBvbmNlIGFuIG9iamVjdCBpcyBwdXNoZWRcbiAgXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIGxpc3QuaWQgPSBpbmRleDtcbiAgICAgICAgLy8gLy9DUkVBVElORyBQIFRBRyBGT1IgVEhFIElOUFVUUyBSRUNFSVZFRCBGUk9NIFRIRSBVU0VSXG4gICAgY29uc3QgdGl0bGVIVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGVIVE1MLmlkID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlSFRNTC50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQudGl0bGV9YDtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uSFRNTC5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbkhUTUwudGV4dENvbnRlbnQgPSBgJHtlbGVtZW50LmRlc2NyaXB0aW9ufWA7XG5cbiAgICBjb25zdCBkdWVEYXRlSFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGR1ZURhdGVIVE1MLmlkID0gXCJkdWVEYXRlXCI7XG4gICAgZHVlRGF0ZUhUTUwudGV4dENvbnRlbnQgPSBgJHtlbGVtZW50LmR1ZURhdGV9YDtcblxuICAgIGNvbnN0IHByaW9yaXR5SFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaW9yaXR5SFRNTC5pZCA9IFwicHJpb3JpdHlcIjtcbiAgICBwcmlvcml0eUhUTUwudGV4dENvbnRlbnQgPSBgICR7ZWxlbWVudC5wcmlvcml0eX1gO1xuXG4gICAgY29uc3Qgbm90ZXNIVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbm90ZXNIVE1MLmlkID0gXCJub3Rlc1wiO1xuICAgIG5vdGVzSFRNTC50ZXh0Q29udGVudCA9IGAgJHtlbGVtZW50Lm5vdGVzfWA7XG5cblxuICAgIC8vY3JlYXRpbmcgdGhlIGVkaXQgaWNvbiB0byBlZGl0IGVhY2ggdG9kb3NcbiAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGVkaXRJY29uLmNsYXNzTmFtZSA9IFwiZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlXCI7XG4gICAgZWRpdEljb24uaWQgPSBcImVkaXRcIjtcbiAgICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1tZVwiKTtcblxuXG4gICAgICAgLy9hZGRpbmcgZXZlbnRsaXN0ZW5lciB0byB0aGUgZWRpdCBjb25cblxuICAgICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuICAgICAgc2hvd0Zvcm0oKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRUb2RvcyA9IGxpc3Q7XG5cbiAgICAgIHRhc2tUaXRsZS52YWx1ZSA9IHNlbGVjdGVkVG9kb3MuY2hpbGRyZW5bMF0uaW5uZXJIVE1MO1xuICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gc2VsZWN0ZWRUb2Rvcy5jaGlsZHJlblsxXS5pbm5lckhUTUw7XG4gICAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IHNlbGVjdGVkVG9kb3MuY2hpbGRyZW5bMl0uaW5uZXJIVE1MO1xuICAgICAgdGFza1ByaW9yaXR5LnZhbHVlID0gc2VsZWN0ZWRUb2Rvcy5jaGlsZHJlblszXS5pbm5lckhUTUw7XG4gICAgICB0YXNrTm90ZXMudmFsdWUgPSBzZWxlY3RlZFRvZG9zLmNoaWxkcmVuWzRdLmlubmVySFRNTDtcbiAgICAgIGNvbnNvbGUubG9nKCh0YXNrVGl0bGUudmFsdWUgPSBzZWxlY3RlZFRvZG9zLmNoaWxkcmVuWzBdLmlubmVySFRNTCkpO1xuXG4gICAgICBzZWxlY3RlZFRvZG9zLnJlbW92ZSgpO1xuXG5cblxuICAgICAgfSk7XG5cbiAgICAgLy9jcmVhdGluZyB0aGUgZG9uZSBpY29uXG4gICAgIGNvbnN0IGNvbXBsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICBjb21wbGV0ZUljb24uY2xhc3NOYW1lID0gXCJmYS1zb2xpZCBmYS1zcXVhcmUtY2hlY2tcIjtcbiAgICAgY29tcGxldGVJY29uLmlkID0gXCJjaGVja1wiO1xuXG5cbiAgICAvL2FkZGluZyBldmVudGxpc3RlbmVyIHRvIHRoZSBjb21wbGV0ZSBpY29uXG4gICAgICBjb21wbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBcbiAgICAgIC8vIGNvbXBsZXRlZC5zdHlsZS5kaXNwbGF5ID0nYmxvY2snO1xuICAgICAgbGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwic3RyaWtlXCIpO1xuICAgIH0pO1xuXG5cblxuXG5cbiAgICAvL2NyZWF0aW5nIHRoZSB0cmFzaCBjYW4gdG8gZGVsZXRlIGVhY2ggdG9kb3NcbiAgICBjb25zdCB0cmFzaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICB0cmFzaEljb24uY2xhc3NOYW1lID0gXCJmYS1zb2xpZCBmYS10cmFzaFwiO1xuICAgIHRyYXNoSWNvbi5pZCA9IFwidHJhc2hcIjtcblxuICAgLy8gLy9hZGRpbmcgY2xpY2sgdG8gdGhlIHRyYXNoSWNvblxuXG4gICAgdHJhc2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsaXN0SXRlbXMucmVtb3ZlQ2hpbGQobGlzdCk7XG4gICAgICBjb25zb2xlLmxvZyhsaXN0LmlkKTtcblxuICAgICAgLy9yZW1vdmluZyBmcm9tIHRoZSBsb2NhbHN0b3JhZ2VcbiAgICAgIG15VG9kb3Muc3BsaWNlKGxpc3QuaWQsIDEpO1xuICAgICAgIC8vdXBkYXRpbmcgbXkgdG9kb3MgaW4gdGhlIGxvY2Fsc3RvcmFnZVxuICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15VG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkobXlUb2RvcykpXG5cbiAgICAgIGNvbnNvbGUubG9nKG15VG9kb3MpO1xuICAgIH0pO1xuXG4gXG4gICBcbiAgICAvL0FQUEVORElORyBUSEUgVEFHUyBUTyBUSEUgTElTVFxuICAgIGxpc3QuYXBwZW5kQ2hpbGQodGl0bGVIVE1MKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSFRNTCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChkdWVEYXRlSFRNTCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChwcmlvcml0eUhUTUwpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobm90ZXNIVE1MKTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY29tcGxldGVJY29uKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKHRyYXNoSWNvbik7XG4gICAgbGlzdEl0ZW1zLmFwcGVuZENoaWxkKGxpc3QpO1xuXG5cbiAgICAvLyByZXR1cm4gbXlUb2Rvc1tsaXN0XTtcbiAgICAvLyBjb25zb2xlLmxvZyggbXlUb2Rvcyk7XG4gICBcbiAgIFxuICByZXR1cm4gbXlUb2Rvc1tsaXN0XTtcbiAgICBcbn0pXG5cbiAgcmVzZXRGb3JtKCk7XG5cbiAgXG4gXG4gIH07XG5cbmNvbnN0IHJlc2V0Rm9ybT0oKT0+e1xuICAgIHRhc2tUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gXG5cbn1cblxuLy9JSUVGXG4oKCk9PntcbiAgbXlUb2RvcyA9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15VG9kb3NcIikpO1xuICBjb25zb2xlLmxvZyhteVRvZG9zKTtcbiAgYWRkVG9kb3MoKTtcblxufSkoKVxuXG5leHBvcnQgeyB0YXNrUHJpb3JpdHlWYWx1ZSwgbXlUb2RvcywgdmFsaWRhdGVUb2RvcywgZm9ybVN1Ym1pdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBzaG93Rm9ybSB9IGZyb20gJy4vTGF5b3V0L0RPTSc7XG5pbXBvcnQgeyBjbG9zZUZvcm0gfSBmcm9tICcuL0xheW91dC9ET00nO1xuaW1wb3J0IHsgc2hvd1Byb2plY3RGb3JtIH0gZnJvbSAnLi9MYXlvdXQvRE9NJztcbmltcG9ydCB7IGNsb3NlUHJvamVjdEZvcm0gfSBmcm9tICcuL0xheW91dC9ET00nO1xuaW1wb3J0IHsgZm9ybVN1Ym1pdCB9IGZyb20gJy4vTW9kdWxlcy9hZGRUb2RvJztcbmltcG9ydCB7IG15ZGVmYXVsdFByb2plY3RzIH0gZnJvbSAnLi9Db21wb25lbnRzL2RlZmF1bHQnO1xuaW1wb3J0IHsgc3VibWl0UHJvamVjdHMgfSBmcm9tICcuL01vZHVsZXMvYWRkUHJvamVjdCc7XG5cbi8vIGNvbnNvbGUubG9nKGZvcm1TdWJtaXQpO1xuZm9ybVN1Ym1pdCgpO1xuc3VibWl0UHJvamVjdHMoKTtcbi8vIG15ZGVmYXVsdFByb2plY3RzKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==