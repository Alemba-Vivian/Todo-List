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
    --sidebar--background-clr:#F8F8FF;
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
.sidebar-content h3{
    color: #d67229;
    font-weight: bold;
    font-size: 1.5rem;
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
    border: 1px solid lightgray;
    border-radius: 10px;
    color: black;
   
}
.user-details h6{
  color: gray;
}
.projects{
    padding-top: 40px;
    color: black;
}
#btn-new-project{
    padding: 10px;
    background-color: #d67229;
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
    color: black;
    font-weight: bold;
}
#project>li:hover{
    cursor: pointer;
    background-color: #d67229;
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
    padding: 50px;
    background-color: #F8F8FF;
    border-radius: 20px;
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
    font-weight: bold;
    color: #d67229;
}

#trash{
    color: #d67229;
    margin-left: 10px;
    padding-top: 20px;
    font-weight: bold;
 
    /* padding-left: 100px; */
}
#check{
    padding-top: 20px;
    color: #d67229;
    margin-left: 10px;
    font-weight: bold;
  
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

.fa-list-check, .fa-laptop , .fa-house{
    font-weight: bold;
    font-size: 1.3rem;
    margin-right: 20px;
    color: #d67229;
}

#priority{
    color:green;
    font-weight: bold;
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --header--backgroun-clr:#9e7bb5;\n    --sidebar--background-clr:#F8F8FF;\n    --main--background-clr:white;\n \n  \n}\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    min-height: 100vh;\n    line-height: 1.3;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n   \n}\n#grid-container{\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    height: 100vh;\n}\n\n/* styling header section */\n\n.header-container{\n    background: url('../Assets/pexels-polina-kovaleva-5717411.jpg');\n    background-size: cover;\n    background-position: center;\n    padding: 40px;\n    color: white;\n}\n\n/* styling sidebar section */\n\n.sidebar-container{\n    background-color: var(--sidebar--background-clr);\n    padding: 40px;\n    color: white;\n   \n\n}\n.grid-row-span{\n    grid-row: span 2;\n}\n\n.sidebar-content{\n    padding-bottom: 30px;\n    color: black;\n}\n.sidebar-content h3{\n    color: #d67229;\n    font-weight: bold;\n    font-size: 1.5rem;\n}\n.my-name{\n    padding-bottom: 5px;\n}\n\n\n/* working with the user details */\n.user-profile{\n    display: flex;\n    padding: 10px;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    border: 1px solid lightgray;\n    border-radius: 10px;\n    color: black;\n   \n}\n.user-details h6{\n  color: gray;\n}\n.projects{\n    padding-top: 40px;\n    color: black;\n}\n#btn-new-project{\n    padding: 10px;\n    background-color: #d67229;\n    color: white;\n    border-radius: 5px;\n    border: none;\n    font-size: 1.0rem;\n\n}\n.my-projects{\n    padding-top: 40px;\n    padding-bottom: 30px;\n}\n.project-buttons{\n    padding-top: 40px;\n}\n#project{\n\n}\n\n#project>li{\n    padding: 10px;\n    list-style-type: none;\n    color: black;\n    font-weight: bold;\n}\n#project>li:hover{\n    cursor: pointer;\n    background-color: #d67229;\n}\n\n.grid-colum-span{\n\n}\n\n/* styling main section */\n\n.main-container{\n    background-color: var(--main--background-clr);\n    padding: 40px;\n}\n\n.task-container{\n    padding-top: 40px;\n    padding-bottom: 20px;\n  \n}\n.todos-container{\n    padding: 50px;\n    background-color: #F8F8FF;\n    border-radius: 20px;\n}\n\n#todos{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    list-style-type: none;\n    gap: 10px;\n  \n\n}\nspan{\n    color: #d67229;  \n    margin-left: 10px;\n\n}\n#todos>li{\n    padding: 10px;\n    background-color: lightblue;\n    border-radius: 20px;\n\n}\n#todos>li:nth-child(even){\n    background-color: lightpink;\n    \n}\n\n#btn-new-task{\n    padding: 10px 20px 10px 20px;\n    background-color: #d67229;\n    color: white;\n    border-radius: 5px;\n    border: none;\n    font-size: 1.0rem;\n\n}\n#add-sign{\n    margin-left: 10px;\n}\n\n\n/* styling the form */\n.todos-form{\n    display: none;\n    border: 1px solid lightgrey;\n    width: 300px;\n    margin-bottom: 20px;\n    padding: 20px;\n    border-radius: 20px;\n}\n.form-controls{\n \n}\ninput[type=\"text\"]{\n    padding: 10px;\n    border: none;\n    margin-bottom: 10px;\n   \n}\n\n.my-priority{\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n.priority{\n    padding-bottom: 10px;\n}\n.my-buttons{\n    padding-top: 10px;\n    padding-bottom: 10px;\n\n \n}\n\n#btn-close{\n    padding: 10px;\n    border-radius: 5px;\n    border: none;\n    background-color: #d67229;\n    color: white;\n    margin-right: 20px;\n}\n#btn-add{\n    padding: 10px;\n    border-radius: 5px;\n    border: none;\n    background-color: #d67229;\n    color: white;\n}\n#plus-sign{\n    margin-right: 5px;\n}\n\nbutton:hover{\n    cursor: pointer;\n}\n\n\n/* projects form */\n.project-form{\n    display: none;\n    border: 1px solid lightgray;\n    margin-bottom: 10px;\n    padding: 20px;\n    border-radius: 10px;\n    background-color: white;\n    margin-top: 20px;\n}\n\n#project-title{\n    border: 1px solid lightgray;\n}\n#btn-close-project{\n    padding: 10px;\n    font-weight: bold;\n    font-size: 1rem;\n    border-radius: 5px;\n    border: none;\n    background-color: #d67229;\n    color: white;\n    margin-right: 20px;\n\n}\n#btn-add-project{\n    padding: 10px;\n    border-radius: 5px;\n    border: none;\n    background-color: #d67229;\n    color: white;\n\n}\n\n/* Todos */\n#edit{\n    margin-left: 10px;\n    padding-top: 20px;\n    font-weight: bold;\n    color: #d67229;\n}\n\n#trash{\n    color: #d67229;\n    margin-left: 10px;\n    padding-top: 20px;\n    font-weight: bold;\n \n    /* padding-left: 100px; */\n}\n#check{\n    padding-top: 20px;\n    color: #d67229;\n    margin-left: 10px;\n    font-weight: bold;\n  \n    /* float: right; */\n\n}\n#edit:hover{\n    cursor: pointer;\n}\n#check:hover{\n    cursor: pointer;\n}\n#trash:hover{\n    cursor: pointer;\n}\n#completed{\n    padding-top: 10px;\n    /* color: lightblue; */\n}\n\n.strike{\n    text-decoration: line-through;\n   \n}\n\np{\n    padding: 5px;\n}\n\n.fa-list-check, .fa-laptop , .fa-house{\n    font-weight: bold;\n    font-size: 1.3rem;\n    margin-right: 20px;\n    color: #d67229;\n}\n\n#priority{\n    color:green;\n    font-weight: bold;\n}\n"],"sourceRoot":""}]);
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
   const task = (0,_Components_todos__WEBPACK_IMPORTED_MODULE_0__.todos)();
 
  displayPriority();
  //   myTodos.push(
  //   todos(
  //     taskTitle.value,
  //     taskDescription.value,
  //     taskDueDate.value,
  //     taskPriorityValue, 
  //     taskNotes.value)
    
  // )


  task.title = _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskTitle.value;
  task.description = _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDescription.value;
  task.dueDate = _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDueDate.value;
  task.priority = taskPriorityValue;
  task.notes = _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskNotes.value;

  //pushing my tasks/todos into the array
  myTodos.push(task);
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

      editIcon.addEventListener("click", (e) => {

      (0,_Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.showForm)();

      const selectedTodos = list;
    

      _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskTitle.value = selectedTodos.children[0].innerHTML;
      _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDescription.value = selectedTodos.children[1].innerHTML;
      _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskDueDate.value = selectedTodos.children[2].innerHTML;
      taskPriorityValue = selectedTodos.children[3].innerHTML;
      _Layout_DOM__WEBPACK_IMPORTED_MODULE_1__.taskNotes.value = selectedTodos.children[4].innerHTML;
    

       //updating my todos in the localstorage
       localStorage.setItem("myTodos", JSON.stringify(myTodos));
         //removing from the localstorage
         myTodos.splice(selectedTodos.id, 1);
      // selectedTodos.remove();

      console.log(myTodos);

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
    trashIcon.className = "fa-solid fa-trash-can";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxRQUFRLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLEtBQUssS0FBSyxVQUFVLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxRQUFRLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksZUFBZSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxRQUFRLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLGFB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dURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ1k7QUFDQztBQUNNO0FBQ0M7QUFDRDtBQUNVO0FBQ0g7O0FBRXREO0FBQ0EsNERBQVU7QUFDVixtRUFBYztBQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvQ29tcG9uZW50cy9kZWZhdWx0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Db21wb25lbnRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0xheW91dC9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL01vZHVsZXMvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvTW9kdWxlcy9hZGRUb2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9Bc3NldHMvcGV4ZWxzLXBvbGluYS1rb3ZhbGV2YS01NzE3NDExLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1oZWFkZXItLWJhY2tncm91bi1jbHI6IzllN2JiNTtcbiAgICAtLXNpZGViYXItLWJhY2tncm91bmQtY2xyOiNGOEY4RkY7XG4gICAgLS1tYWluLS1iYWNrZ3JvdW5kLWNscjp3aGl0ZTtcbiBcbiAgXG59XG4qe1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5e1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgXG59XG4jZ3JpZC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLyogc3R5bGluZyBoZWFkZXIgc2VjdGlvbiAqL1xuXG4uaGVhZGVyLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIHN0eWxpbmcgc2lkZWJhciBzZWN0aW9uICovXG5cbi5zaWRlYmFyLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLS1iYWNrZ3JvdW5kLWNscik7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICBcblxufVxuLmdyaWQtcm93LXNwYW57XG4gICAgZ3JpZC1yb3c6IHNwYW4gMjtcbn1cblxuLnNpZGViYXItY29udGVudHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4uc2lkZWJhci1jb250ZW50IGgze1xuICAgIGNvbG9yOiAjZDY3MjI5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLm15LW5hbWV7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuXG4vKiB3b3JraW5nIHdpdGggdGhlIHVzZXIgZGV0YWlscyAqL1xuLnVzZXItcHJvZmlsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgXG59XG4udXNlci1kZXRhaWxzIGg2e1xuICBjb2xvcjogZ3JheTtcbn1cbi5wcm9qZWN0c3tcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4jYnRuLW5ldy1wcm9qZWN0e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2NzIyOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcblxufVxuLm15LXByb2plY3Rze1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLnByb2plY3QtYnV0dG9uc3tcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbiNwcm9qZWN0e1xuXG59XG5cbiNwcm9qZWN0Pmxpe1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNwcm9qZWN0PmxpOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDY3MjI5O1xufVxuXG4uZ3JpZC1jb2x1bS1zcGFue1xuXG59XG5cbi8qIHN0eWxpbmcgbWFpbiBzZWN0aW9uICovXG5cbi5tYWluLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLS1iYWNrZ3JvdW5kLWNscik7XG4gICAgcGFkZGluZzogNDBweDtcbn1cblxuLnRhc2stY29udGFpbmVye1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBcbn1cbi50b2Rvcy1jb250YWluZXJ7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbiN0b2Rvc3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBnYXA6IDEwcHg7XG4gIFxuXG59XG5zcGFue1xuICAgIGNvbG9yOiAjZDY3MjI5OyAgXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbn1cbiN0b2Rvcz5saXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG59XG4jdG9kb3M+bGk6bnRoLWNoaWxkKGV2ZW4pe1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0cGluaztcbiAgICBcbn1cblxuI2J0bi1uZXctdGFza3tcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjcyMjk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG5cbn1cbiNhZGQtc2lnbntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuXG4vKiBzdHlsaW5nIHRoZSBmb3JtICovXG4udG9kb3MtZm9ybXtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uZm9ybS1jb250cm9sc3tcbiBcbn1cbmlucHV0W3R5cGU9XCJ0ZXh0XCJde1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICBcbn1cblxuLm15LXByaW9yaXR5e1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnByaW9yaXR5e1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLm15LWJ1dHRvbnN7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiBcbn1cblxuI2J0bi1jbG9zZXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2NzIyOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuI2J0bi1hZGR7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjcyMjk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI3BsdXMtc2lnbntcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4vKiBwcm9qZWN0cyBmb3JtICovXG4ucHJvamVjdC1mb3Jte1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbiNwcm9qZWN0LXRpdGxle1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbiNidG4tY2xvc2UtcHJvamVjdHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjcyMjk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcblxufVxuI2J0bi1hZGQtcHJvamVjdHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2NzIyOTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cblxuLyogVG9kb3MgKi9cbiNlZGl0e1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZDY3MjI5O1xufVxuXG4jdHJhc2h7XG4gICAgY29sb3I6ICNkNjcyMjk7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gXG4gICAgLyogcGFkZGluZy1sZWZ0OiAxMDBweDsgKi9cbn1cbiNjaGVja3tcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBjb2xvcjogI2Q2NzIyOTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgXG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuXG59XG4jZWRpdDpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jY2hlY2s6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3RyYXNoOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjb21wbGV0ZWR7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgLyogY29sb3I6IGxpZ2h0Ymx1ZTsgKi9cbn1cblxuLnN0cmlrZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgIFxufVxuXG5we1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmZhLWxpc3QtY2hlY2ssIC5mYS1sYXB0b3AgLCAuZmEtaG91c2V7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjZDY3MjI5O1xufVxuXG4jcHJpb3JpdHl7XG4gICAgY29sb3I6Z3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLGlDQUFpQztJQUNqQyw0QkFBNEI7OztB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QUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZOztBQUVoQjs7QUFFQSxVQUFVO0FBQ1Y7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCOztJQUVqQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjs7SUFFakIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0taGVhZGVyLS1iYWNrZ3JvdW4tY2xyOiM5ZTdiYjU7XFxuICAgIC0tc2lkZWJhci0tYmFja2dyb3VuZC1jbHI6I0Y4RjhGRjtcXG4gICAgLS1tYWluLS1iYWNrZ3JvdW5kLWNscjp3aGl0ZTtcXG4gXFxuICBcXG59XFxuKntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5e1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgIFxcbn1cXG4jZ3JpZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogc3R5bGluZyBoZWFkZXIgc2VjdGlvbiAqL1xcblxcbi5oZWFkZXItY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL0Fzc2V0cy9wZXhlbHMtcG9saW5hLWtvdmFsZXZhLTU3MTc0MTEuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBzdHlsaW5nIHNpZGViYXIgc2VjdGlvbiAqL1xcblxcbi5zaWRlYmFyLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci0tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgXFxuXFxufVxcbi5ncmlkLXJvdy1zcGFue1xcbiAgICBncmlkLXJvdzogc3BhbiAyO1xcbn1cXG5cXG4uc2lkZWJhci1jb250ZW50e1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG4uc2lkZWJhci1jb250ZW50IGgze1xcbiAgICBjb2xvcjogI2Q2NzIyOTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ubXktbmFtZXtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuXFxuLyogd29ya2luZyB3aXRoIHRoZSB1c2VyIGRldGFpbHMgKi9cXG4udXNlci1wcm9maWxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICBcXG59XFxuLnVzZXItZGV0YWlscyBoNntcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG4ucHJvamVjdHN7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbiNidG4tbmV3LXByb2plY3R7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjcyMjk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xcblxcbn1cXG4ubXktcHJvamVjdHN7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuLnByb2plY3QtYnV0dG9uc3tcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxufVxcbiNwcm9qZWN0e1xcblxcbn1cXG5cXG4jcHJvamVjdD5saXtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jcHJvamVjdD5saTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDY3MjI5O1xcbn1cXG5cXG4uZ3JpZC1jb2x1bS1zcGFue1xcblxcbn1cXG5cXG4vKiBzdHlsaW5nIG1haW4gc2VjdGlvbiAqL1xcblxcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi0tYmFja2dyb3VuZC1jbHIpO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIFxcbn1cXG4udG9kb3MtY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEZGO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4jdG9kb3N7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGdhcDogMTBweDtcXG4gIFxcblxcbn1cXG5zcGFue1xcbiAgICBjb2xvcjogI2Q2NzIyOTsgIFxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG5cXG59XFxuI3RvZG9zPmxpe1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFxufVxcbiN0b2Rvcz5saTpudGgtY2hpbGQoZXZlbil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0cGluaztcXG4gICAgXFxufVxcblxcbiNidG4tbmV3LXRhc2t7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjcyMjk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xcblxcbn1cXG4jYWRkLXNpZ257XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5cXG4vKiBzdHlsaW5nIHRoZSBmb3JtICovXFxuLnRvZG9zLWZvcm17XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uZm9ybS1jb250cm9sc3tcXG4gXFxufVxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXXtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgIFxcbn1cXG5cXG4ubXktcHJpb3JpdHl7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLnByaW9yaXR5e1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLm15LWJ1dHRvbnN7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG5cXG4gXFxufVxcblxcbiNidG4tY2xvc2V7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDY3MjI5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuI2J0bi1hZGR7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDY3MjI5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiNwbHVzLXNpZ257XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG5idXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLyogcHJvamVjdHMgZm9ybSAqL1xcbi5wcm9qZWN0LWZvcm17XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxle1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxufVxcbiNidG4tY2xvc2UtcHJvamVjdHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjcyMjk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcblxcbn1cXG4jYnRuLWFkZC1wcm9qZWN0e1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2NzIyOTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG4vKiBUb2RvcyAqL1xcbiNlZGl0e1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI2Q2NzIyOTtcXG59XFxuXFxuI3RyYXNoe1xcbiAgICBjb2xvcjogI2Q2NzIyOTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gXFxuICAgIC8qIHBhZGRpbmctbGVmdDogMTAwcHg7ICovXFxufVxcbiNjaGVja3tcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIGNvbG9yOiAjZDY3MjI5O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBcXG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xcblxcbn1cXG4jZWRpdDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jY2hlY2s6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3RyYXNoOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNjb21wbGV0ZWR7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICAvKiBjb2xvcjogbGlnaHRibHVlOyAqL1xcbn1cXG5cXG4uc3RyaWtle1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICBcXG59XFxuXFxucHtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZmEtbGlzdC1jaGVjaywgLmZhLWxhcHRvcCAsIC5mYS1ob3VzZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIGNvbG9yOiAjZDY3MjI5O1xcbn1cXG5cXG4jcHJpb3JpdHl7XFxuICAgIGNvbG9yOmdyZWVuO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0SXRlbXMgfSBmcm9tIFwiLi4vTGF5b3V0L0RPTVwiO1xuaW1wb3J0IHsgaG9tZSwgcGVyc29uYWwsIHdvcmsgfSBmcm9tIFwiLi4vTGF5b3V0L0RPTVwiO1xuaW1wb3J0IHsgdG9kb3MgfSBmcm9tIFwiLi90b2Rvc1wiO1xuaW1wb3J0IHsgZm9ybVN1Ym1pdCB9IGZyb20gXCIuLi9Nb2R1bGVzL2FkZFRvZG9cIjtcbmltcG9ydCB7IG15RGVmYXVsdFByb2plY3RzIH0gZnJvbSBcIi4uL0xheW91dC9ET01cIjtcblxuXG5cbmZ1bmN0aW9uIG15ZGVmYXVsdFByb2plY3RzKCl7XG5cblxuXG4gICAgICBmb3IobGV0IGk9MDsgaSA8IG15RGVmYXVsdFByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRwcm9qZWN0cyA9IG15RGVmYXVsdFByb2plY3RzW2ldO1xuICAgICAgICAgICBcblxuICAgICAgICAgICAgZGVmYXVsdHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gdGhlcmVcIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvcycpO1xuICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgICAgZm9ybVN1Ym1pdCgpOyAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgICAvLyBpZihob21lKXtcblxuICAgICAgLy8gICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgLy8gICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb3MnKTtcbiAgICAgIC8vICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgLy8gICBmb3JtU3VibWl0KCk7XG4gICAgICAvLyAgfSApOyAgXG4gIFxuICAgICAgLy8gfVxufVxuXG5leHBvcnR7bXlkZWZhdWx0UHJvamVjdHN9O1xuXG5cbiIsIlxuY29uc3QgcHJvamVjdCA9KG5hbWUpPT57XG4gICAgXG4gICAgcmV0dXJuIHtuYW1lfVxuXG59XG5leHBvcnR7cHJvamVjdH07IiwiaW1wb3J0IHsgZm9ybVN1Ym1pdCB9IGZyb20gXCIuLi9Nb2R1bGVzL2FkZFRvZG9cIlxuXG5jb25zdCB0b2Rvcz0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSxub3Rlcyk9PntcbiAgICBjb25zdCBnZXREYXRlPSgpPT57XG5cbiAgICB9XG5cbiAgICBjb25zdCBnZXRvZG9zPSgpPT57XG4gICAgICAgIHJldHVybiBmb3JtU3VibWl0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgZ2V0RGF0ZSwgZ2V0b2Rvc1xuICAgIH1cblxufVxuLy8gY29uc3QgdG9kb3MxID0gdG9kb3MoXCJzaG9wcGluZ1wiLCBcImdvIHNob3BwaW5nXCIsIFwiMDQvMDkvMjAyM1wiLFwiaW1wb3J0YW50XCIsIFwiYWRkIGdyb2Nlcmllc1wiKTtcbi8vIGNvbnNvbGUubG9nKHRvZG9zMS5nZXRvZG9zKCkpO1xuXG5leHBvcnR7dG9kb3N9OyIsIi8vVE9ETyBJTlBVVFxuY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG5jb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbmNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcbmNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdwcmlvcml0eScpO1xuY29uc3QgdGFza05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVzJyk7XG5cbi8vVE9EQVkgREFURVxuY29uc3QgdG9kYXlEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LWRhdGUnKTtcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5Jyk7XG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblxuY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG5jb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG5jb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG5jb25zdCBjdXJyZW50RGF0ZSA9IGAke2RheX0vJHttb250aH0vJHt5ZWFyfWA7XG50b2RheURhdGUudGV4dENvbnRlbnQgPWN1cnJlbnREYXRlO1xudG9kYXkudGV4dENvbnRlbnQgPSBjdXJyZW50RGF0ZTtcblxuLy9QUk9KRUNUIElOUFVUXG5jb25zdCBwcm9qZWN0VGl0bGUgPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJyk7XG5cbi8vREVGQVVMVCBQUk9KRUNUU1xuY29uc3QgbXlEZWZhdWx0UHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWZhdWx0LXByb2plY3RzJyk7XG5cbi8vPFVMPiBMSVNUIElURU1cbmNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvcycpO1xuY29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcblxuLy88TEk+IFBST0pFQ1RTIGlURU1cbmNvbnN0IHBlcnNvbmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcnNvbmFsLXByb2plY3QnKTtcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1wcm9qZWN0Jyk7XG5jb25zdCB3b3JrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dvcmstcHJvamVjdCcpO1xuXG4vL0ZPUk0gXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1TdWJtaXQnKTtcbmNvbnN0IHByb2plY3RGb3JtID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybVByb2plY3RTdWJtaXQnKTtcblxuLy9CVVRUT05cbmNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLW5ldy10YXNrJyk7XG5jb25zdCBjbG9zZVRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLWNsb3NlJyk7XG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1uZXctcHJvamVjdCcpO1xuY29uc3QgY2xvc2VQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1jbG9zZS1wcm9qZWN0Jyk7XG5cblxuLy9FVkVOVCBMSVNURU5FUlMgVE8gVEFTSyBCVVRUT05TXG5uZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Zvcm0pO1xuY2xvc2VUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKTtcblxuLy9FVkVOVCBMSVNURU5FUlMgVE8gUFJPSkVDVCBCVVRUT05TXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxzaG93UHJvamVjdEZvcm0pO1xuY2xvc2VQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQcm9qZWN0Rm9ybSk7XG5cblxuLy9GVU5DVElPTlNcbmZ1bmN0aW9uIHNob3dGb3JtICgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1mb3JtJykuc3R5bGUuZGlzcGxheSA9XCJibG9ja1wiO1xuXG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybSgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1mb3JtJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0Rm9ybSgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKS5zdHlsZS5kaXNwbGF5ID1cImJsb2NrXCI7XG5cbn1cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdEZvcm0oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJykuc3R5bGUuZGlzcGxheSA9XCJub25lXCI7XG59XG5leHBvcnR7XG4gICAgc2hvd0Zvcm0sIGNsb3NlRm9ybSwgc2hvd1Byb2plY3RGb3JtLCBjbG9zZVByb2plY3RGb3JtLFxuICAgIGxpc3RJdGVtcyxwcm9qZWN0SXRlbXMsXG4gICAgZm9ybSwgdGFza1RpdGxlLCBwcm9qZWN0Rm9ybSxcbiAgICB0YXNrRGVzY3JpcHRpb24sIFxuICAgIHRhc2tEdWVEYXRlLCB0YXNrUHJpb3JpdHksIHRhc2tOb3RlcyxcbiAgICBwZXJzb25hbCwgaG9tZSwgd29yayxcbiAgICBwcm9qZWN0VGl0bGUsXG4gICAgbXlEZWZhdWx0UHJvamVjdHNcbiAgICB9OyIsImltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9wcm9qZWN0XCJcbmltcG9ydCB7IHByb2plY3RGb3JtLCBwcm9qZWN0SXRlbXMsIHByb2plY3RUaXRsZSB9IGZyb20gXCIuLi9MYXlvdXQvRE9NXCI7XG5cbi8vIHN0b3JpbmcgbXkgcHJvamVjdHMgaW4gYW4gYXJyYXlcbmxldCBteVByb2plY3RzID1bXTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdHMoKXtcbiAgICBcbiAvL2NyZWF0aW5nIGEgbmV3IGluc3RhbmNlIG9mIGFuIG9iamVjdFxuICAgIGNvbnN0IHByb2plY3QxID0gcHJvamVjdCgpO1xuICAgIHByb2plY3QxLm5hbWUgPSBwcm9qZWN0VGl0bGUudmFsdWVcblxuICAgIC8vcHVzaGluZyB0aGUgb2JqZWN0IGluc2lkZSB0aGUgYXJyYXlcbiAgICBteVByb2plY3RzLnB1c2gocHJvamVjdDEpO1xuXG4gICAgLy9sb29waW5nIHRocm91Z2ggdGhlIG9iamVjdHNcbiAgICBteVByb2plY3RzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KT0+e1xuICAgICAgICBteVByb2plY3RzID0gW107XG5cblxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJkZWZhdWx0LXByb2plY3RzXCIpO1xuICAgICAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPWAke2VsZW1lbnQubmFtZX1gO1xuXG4gICAgICAgIHByb2plY3RJdGVtcy5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG5cbiAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG15UHJvamVjdHNbcHJvamVjdExpc3RdKTtcblxuICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbXlQcm9qZWN0c1twcm9qZWN0TGlzdF07XG4gICAgICBcblxuICAgIH0pO1xuICAgIFxufVxuXG5cbi8vc3VibWl0IGJ1dHRvblxuZnVuY3Rpb24gc3VibWl0UHJvamVjdHMoKXtcbiAgICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihwcm9qZWN0VGl0bGUudmFsdWUgPT09IFwiXCIgfHwgcHJvamVjdFRpdGxlLnZhbHVlID09PSBudWxsKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiRW5zdXJlIHlvdSBmaWxsIGFsbCB0aGUgaW5wdXRzIHZhbHVlc1wiKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgXG4gICAgICAgICAgICBhbGVydChcIkZvcm0gaXMgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgICAgICBhZGRQcm9qZWN0cygpO1xuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0VGl0bGUudmFsdWUgPVwiXCI7XG4gICAgICAgXG4gICAgfSlcblxufVxuXG5leHBvcnQge3N1Ym1pdFByb2plY3RzfVxuXG4iLCJpbXBvcnQgeyB0b2RvcyB9IGZyb20gXCIuLi9Db21wb25lbnRzL3RvZG9zXCI7XG5pbXBvcnQge1xuICB0YXNrVGl0bGUsXG4gIHRhc2tEZXNjcmlwdGlvbixcbiAgdGFza0R1ZURhdGUsXG4gIHRhc2tQcmlvcml0eSxcbiAgdGFza05vdGVzLFxuICBmb3JtLFxuICBjbG9zZUZvcm0sXG59IGZyb20gXCIuLi9MYXlvdXQvRE9NXCI7XG5pbXBvcnQgeyBsaXN0SXRlbXMgfSBmcm9tIFwiLi4vTGF5b3V0L0RPTVwiO1xuaW1wb3J0IHsgc2hvd0Zvcm0gfSBmcm9tIFwiLi4vTGF5b3V0L0RPTVwiO1xuXG4vL0RvbVxuY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tYWRkJyk7XG5cblxuLy93aGVuIHRoZSBhZGQgYnV0dG9uIGlzIGNsaWNrZWRcbi8vc3VibWl0dGluZyB0aGUgZm9ybVxuY29uc3QgZm9ybVN1Ym1pdCA9ICgpID0+IHtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhbGlkYXRlVG9kb3MoKTtcbiAgfSk7XG59O1xuXG4vL2Zvcm0gdmFsaWRhdGlvbnNcbmNvbnN0IHZhbGlkYXRlVG9kb3MgPSAoKSA9PiB7XG4gIGlmIChcbiAgICB0YXNrVGl0bGUudmFsdWUgPT09IFwiXCIgfHxcbiAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPT09IFwiXCIgfHxcbiAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9PT0gXCJcIlxuICApIHtcbiAgICBhbGVydChcIkVuc3VyZSB5b3UgaW5wdXQgYWxsIHRoZSB2YWx1ZXMgaW4gdGhlIGZpZWxkXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiRW5zdXJlIHlvdSBpbnB1dCBhbGwgdGhlIHZhbHVlcyBpbiB0aGUgZmllbGRcIik7XG4gIH0gZWxzZSB7XG4gICAgYWNjZXB0RGF0YSgpO1xuICAgIFxuICAgIGNsb3NlRm9ybSgpO1xuICAgIGNsb3NlTW9kYWwuY2xpY2soKTtcbiAgICAgIFxuICAgIC8vIElJRUYgSW1tZWRpYXRlbHkgSW52b2tlZCBFeHByZXNzaW9uIEZ1bmN0aW9uc1xuICAgICgoKT0+e1xuICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICB9KSgpXG5cblxuICB9XG4gIFxufTtcblxuXG4vL3dvcmtpbmcgd2l0aCB0aGUgcHJpb3JpdHkgZnVuY3Rpb25zXG5sZXQgdGFza1ByaW9yaXR5VmFsdWU7XG5mdW5jdGlvbiBkaXNwbGF5UHJpb3JpdHkoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza1ByaW9yaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRhc2tQcmlvcml0eVtpXS5jaGVja2VkKSB7XG4gICAgICB0YXNrUHJpb3JpdHlWYWx1ZSA9IHRhc2tQcmlvcml0eVtpXS52YWx1ZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCh0YXNrUHJpb3JpdHlWYWx1ZSA9IHRhc2tQcmlvcml0eVtpXS52YWx1ZSkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG4vL0FjY2VwdGluZyBkYXRhXG4vLyBzdG9yaW5nIG15IG9iamVjdHMgaW4gYW4gYXJyYXlcbmxldCBteVRvZG9zID0gW107XG5cbmNvbnN0IGFjY2VwdERhdGEgPSAoKSA9PiB7XG4gICBjb25zdCB0YXNrID0gdG9kb3MoKTtcbiBcbiAgZGlzcGxheVByaW9yaXR5KCk7XG4gIC8vICAgbXlUb2Rvcy5wdXNoKFxuICAvLyAgIHRvZG9zKFxuICAvLyAgICAgdGFza1RpdGxlLnZhbHVlLFxuICAvLyAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAvLyAgICAgdGFza0R1ZURhdGUudmFsdWUsXG4gIC8vICAgICB0YXNrUHJpb3JpdHlWYWx1ZSwgXG4gIC8vICAgICB0YXNrTm90ZXMudmFsdWUpXG4gICAgXG4gIC8vIClcblxuXG4gIHRhc2sudGl0bGUgPSB0YXNrVGl0bGUudmFsdWU7XG4gIHRhc2suZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb24udmFsdWU7XG4gIHRhc2suZHVlRGF0ZSA9IHRhc2tEdWVEYXRlLnZhbHVlO1xuICB0YXNrLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5VmFsdWU7XG4gIHRhc2subm90ZXMgPSB0YXNrTm90ZXMudmFsdWU7XG5cbiAgLy9wdXNoaW5nIG15IHRhc2tzL3RvZG9zIGludG8gdGhlIGFycmF5XG4gIG15VG9kb3MucHVzaCh0YXNrKTtcbiAgY29uc29sZS5sb2coIG15VG9kb3MpO1xuXG4gIC8vc3RvcmluZyBteSB0b2RvcyB0byB0aGUgbG9jYWxzdG9yYWdlXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlUb2Rvc1wiLCBKU09OLnN0cmluZ2lmeShteVRvZG9zKSk7XG5cbiAgYWRkVG9kb3MoKTsgXG59O1xuXG5cblxuY29uc3QgYWRkVG9kb3MgPSAoKSA9PiB7XG4gICAgbGlzdEl0ZW1zLmlubmVySFRNTCA9XCJcIjtcbiAgLy9sb29waW5nIHRocm91Z2ggbXkgdG9kbyBsaXN0c1xuICAgXG4gICAgbXlUb2Rvcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIC8vY2xlYXIgdGhlIGFycmF5IG9uY2UgYW4gb2JqZWN0IGlzIHB1c2hlZFxuICBcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgbGlzdC5pZCA9IGluZGV4O1xuICAgICAgICAvLyAvL0NSRUFUSU5HIFAgVEFHIEZPUiBUSEUgSU5QVVRTIFJFQ0VJVkVEIEZST00gVEhFIFVTRVJcbiAgICBjb25zdCB0aXRsZUhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXRsZUhUTUwuaWQgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVIVE1MLnRleHRDb250ZW50ID0gYCR7ZWxlbWVudC50aXRsZX1gO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25IVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb25IVE1MLmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uSFRNTC50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQuZGVzY3JpcHRpb259YDtcblxuICAgIGNvbnN0IGR1ZURhdGVIVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZHVlRGF0ZUhUTUwuaWQgPSBcImR1ZURhdGVcIjtcbiAgICBkdWVEYXRlSFRNTC50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQuZHVlRGF0ZX1gO1xuXG4gICAgY29uc3QgcHJpb3JpdHlIVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpb3JpdHlIVE1MLmlkID0gXCJwcmlvcml0eVwiO1xuICAgIHByaW9yaXR5SFRNTC50ZXh0Q29udGVudCA9IGAgJHtlbGVtZW50LnByaW9yaXR5fWA7XG5cbiAgICBjb25zdCBub3Rlc0hUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBub3Rlc0hUTUwuaWQgPSBcIm5vdGVzXCI7XG4gICAgbm90ZXNIVE1MLnRleHRDb250ZW50ID0gYCAke2VsZW1lbnQubm90ZXN9YDtcblxuXG4gICAgLy9jcmVhdGluZyB0aGUgZWRpdCBpY29uIHRvIGVkaXQgZWFjaCB0b2Rvc1xuICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgZWRpdEljb24uY2xhc3NOYW1lID0gXCJmYS1yZWd1bGFyIGZhLXBlbi10by1zcXVhcmVcIjtcbiAgICBlZGl0SWNvbi5pZCA9IFwiZWRpdFwiO1xuICAgIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LW1lXCIpO1xuXG5cbiAgICAgICAvL2FkZGluZyBldmVudGxpc3RlbmVyIHRvIHRoZSBlZGl0IGNvblxuXG4gICAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblxuICAgICAgc2hvd0Zvcm0oKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRUb2RvcyA9IGxpc3Q7XG4gICAgXG5cbiAgICAgIHRhc2tUaXRsZS52YWx1ZSA9IHNlbGVjdGVkVG9kb3MuY2hpbGRyZW5bMF0uaW5uZXJIVE1MO1xuICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gc2VsZWN0ZWRUb2Rvcy5jaGlsZHJlblsxXS5pbm5lckhUTUw7XG4gICAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IHNlbGVjdGVkVG9kb3MuY2hpbGRyZW5bMl0uaW5uZXJIVE1MO1xuICAgICAgdGFza1ByaW9yaXR5VmFsdWUgPSBzZWxlY3RlZFRvZG9zLmNoaWxkcmVuWzNdLmlubmVySFRNTDtcbiAgICAgIHRhc2tOb3Rlcy52YWx1ZSA9IHNlbGVjdGVkVG9kb3MuY2hpbGRyZW5bNF0uaW5uZXJIVE1MO1xuICAgIFxuXG4gICAgICAgLy91cGRhdGluZyBteSB0b2RvcyBpbiB0aGUgbG9jYWxzdG9yYWdlXG4gICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJteVRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KG15VG9kb3MpKTtcbiAgICAgICAgIC8vcmVtb3ZpbmcgZnJvbSB0aGUgbG9jYWxzdG9yYWdlXG4gICAgICAgICBteVRvZG9zLnNwbGljZShzZWxlY3RlZFRvZG9zLmlkLCAxKTtcbiAgICAgIC8vIHNlbGVjdGVkVG9kb3MucmVtb3ZlKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKG15VG9kb3MpO1xuXG4gICAgICB9KTtcblxuICAgICAvL2NyZWF0aW5nIHRoZSBkb25lIGljb25cbiAgICAgY29uc3QgY29tcGxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgIGNvbXBsZXRlSWNvbi5jbGFzc05hbWUgPSBcImZhLXNvbGlkIGZhLXNxdWFyZS1jaGVja1wiO1xuICAgICBjb21wbGV0ZUljb24uaWQgPSBcImNoZWNrXCI7XG5cblxuICAgIC8vYWRkaW5nIGV2ZW50bGlzdGVuZXIgdG8gdGhlIGNvbXBsZXRlIGljb25cbiAgICAgIGNvbXBsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIFxuICAgICAgLy8gY29tcGxldGVkLnN0eWxlLmRpc3BsYXkgPSdibG9jayc7XG4gICAgICBsaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJzdHJpa2VcIik7XG4gICAgfSk7XG5cblxuXG5cblxuICAgIC8vY3JlYXRpbmcgdGhlIHRyYXNoIGNhbiB0byBkZWxldGUgZWFjaCB0b2Rvc1xuICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIHRyYXNoSWNvbi5jbGFzc05hbWUgPSBcImZhLXNvbGlkIGZhLXRyYXNoLWNhblwiO1xuICAgIHRyYXNoSWNvbi5pZCA9IFwidHJhc2hcIjtcblxuICAgLy8gLy9hZGRpbmcgY2xpY2sgdG8gdGhlIHRyYXNoSWNvblxuXG4gICAgdHJhc2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsaXN0SXRlbXMucmVtb3ZlQ2hpbGQobGlzdCk7XG4gICAgICBjb25zb2xlLmxvZyhsaXN0LmlkKTtcblxuICAgICAgLy9yZW1vdmluZyBmcm9tIHRoZSBsb2NhbHN0b3JhZ2VcbiAgICAgIG15VG9kb3Muc3BsaWNlKGxpc3QuaWQsIDEpO1xuICAgICAgIC8vdXBkYXRpbmcgbXkgdG9kb3MgaW4gdGhlIGxvY2Fsc3RvcmFnZVxuICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15VG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkobXlUb2RvcykpXG5cbiAgICAgIGNvbnNvbGUubG9nKG15VG9kb3MpO1xuICAgIH0pO1xuXG4gXG4gICBcbiAgICAvL0FQUEVORElORyBUSEUgVEFHUyBUTyBUSEUgTElTVFxuICAgIGxpc3QuYXBwZW5kQ2hpbGQodGl0bGVIVE1MKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSFRNTCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChkdWVEYXRlSFRNTCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChwcmlvcml0eUhUTUwpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobm90ZXNIVE1MKTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY29tcGxldGVJY29uKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKHRyYXNoSWNvbik7XG4gICAgbGlzdEl0ZW1zLmFwcGVuZENoaWxkKGxpc3QpO1xuXG5cbiAgICAvLyByZXR1cm4gbXlUb2Rvc1tsaXN0XTtcbiAgICAvLyBjb25zb2xlLmxvZyggbXlUb2Rvcyk7XG4gICBcbiAgIFxuICByZXR1cm4gbXlUb2Rvc1tsaXN0XTtcbiAgICBcbn0pXG5cbiAgcmVzZXRGb3JtKCk7XG5cbiAgXG4gXG4gIH07XG5cbmNvbnN0IHJlc2V0Rm9ybT0oKT0+e1xuICAgIHRhc2tUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG59XG5cbi8vSUlFRlxuKCgpPT57XG4gIG15VG9kb3MgPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteVRvZG9zXCIpKTtcbiAgY29uc29sZS5sb2cobXlUb2Rvcyk7XG4gIGFkZFRvZG9zKCk7XG5cbn0pKClcblxuZXhwb3J0IHsgdGFza1ByaW9yaXR5VmFsdWUsIG15VG9kb3MsIHZhbGlkYXRlVG9kb3MsIGZvcm1TdWJtaXQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgc2hvd0Zvcm0gfSBmcm9tICcuL0xheW91dC9ET00nO1xuaW1wb3J0IHsgY2xvc2VGb3JtIH0gZnJvbSAnLi9MYXlvdXQvRE9NJztcbmltcG9ydCB7IHNob3dQcm9qZWN0Rm9ybSB9IGZyb20gJy4vTGF5b3V0L0RPTSc7XG5pbXBvcnQgeyBjbG9zZVByb2plY3RGb3JtIH0gZnJvbSAnLi9MYXlvdXQvRE9NJztcbmltcG9ydCB7IGZvcm1TdWJtaXQgfSBmcm9tICcuL01vZHVsZXMvYWRkVG9kbyc7XG5pbXBvcnQgeyBteWRlZmF1bHRQcm9qZWN0cyB9IGZyb20gJy4vQ29tcG9uZW50cy9kZWZhdWx0JztcbmltcG9ydCB7IHN1Ym1pdFByb2plY3RzIH0gZnJvbSAnLi9Nb2R1bGVzL2FkZFByb2plY3QnO1xuXG4vLyBjb25zb2xlLmxvZyhmb3JtU3VibWl0KTtcbmZvcm1TdWJtaXQoKTtcbnN1Ym1pdFByb2plY3RzKCk7XG4vLyBteWRlZmF1bHRQcm9qZWN0cygpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=