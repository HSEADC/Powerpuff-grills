/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/stylesheets/style.css":
/*!***********************************!*\
  !*** ./src/stylesheets/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/javascripts/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/style.css */ "./src/stylesheets/style.css");

document.addEventListener('DOMContentLoaded', function () {
  //галерея
  var forward = document.querySelector('.switchFurther');
  var back = document.querySelector('.switchBack');
  var hideImages = document.querySelectorAll('.hidden');
  var showImages = document.querySelectorAll('.visible');
  forward.addEventListener('click', function () {
    hideImages.forEach(function (groupTwo) {
      groupTwo.classList.remove('hidden');
      groupTwo.classList.add('visible');
    });
    showImages.forEach(function (groupOne) {
      groupOne.classList.remove('visible');
      groupOne.classList.add('hidden');
    });
  });

  //Появление подписки на рассылку
  var hidden = document.querySelectorAll('.hidden');
  var button = document.querySelector('.email');
  button.addEventListener('click', function () {
    hidden.forEach(function (div) {
      div.classList.remove('hidden');
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOaUM7QUFDakNBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN4RDtFQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7RUFDeEQsSUFBTUMsSUFBSSxHQUFHSixRQUFRLENBQUNHLGFBQWEsQ0FBQyxhQUFhLENBQUM7RUFDbEQsSUFBTUUsVUFBVSxHQUFHTCxRQUFRLENBQUNNLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztFQUN2RCxJQUFNQyxVQUFVLEdBQUdQLFFBQVEsQ0FBQ00sZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0VBRXhESixPQUFPLENBQUNELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO0lBQzVDSSxVQUFVLENBQUNHLE9BQU8sQ0FBQyxVQUFDQyxRQUFRLEVBQUs7TUFDL0JBLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO01BQ25DRixRQUFRLENBQUNDLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDLENBQUM7SUFDRkwsVUFBVSxDQUFDQyxPQUFPLENBQUMsVUFBQ0ssUUFBUSxFQUFLO01BQy9CQSxRQUFRLENBQUNILFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUNwQ0UsUUFBUSxDQUFDSCxTQUFTLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDOztFQUVGO0VBQ0EsSUFBTUUsTUFBTSxHQUFHZCxRQUFRLENBQUNNLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztFQUNuRCxJQUFNUyxNQUFNLEdBQUdmLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUUvQ1ksTUFBTSxDQUFDZCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUMzQ2EsTUFBTSxDQUFDTixPQUFPLENBQUMsVUFBQ1EsR0FBRyxFQUFLO01BQ3RCQSxHQUFHLENBQUNOLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL25hbWVlZS8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbmFtZWVlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25hbWVlZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25hbWVlZS8uL3NyYy9qYXZhc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zdHlsZXNoZWV0cy9zdHlsZS5jc3MnXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAvL9Cz0LDQu9C10YDQtdGPXG4gIGNvbnN0IGZvcndhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoRnVydGhlcicpXG4gIGNvbnN0IGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoQmFjaycpXG4gIGNvbnN0IGhpZGVJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlkZGVuJylcbiAgY29uc3Qgc2hvd0ltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aXNpYmxlJylcblxuICBmb3J3YXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGhpZGVJbWFnZXMuZm9yRWFjaCgoZ3JvdXBUd28pID0+IHtcbiAgICAgIGdyb3VwVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICBncm91cFR3by5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJylcbiAgICB9KVxuICAgIHNob3dJbWFnZXMuZm9yRWFjaCgoZ3JvdXBPbmUpID0+IHtcbiAgICAgIGdyb3VwT25lLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKVxuICAgICAgZ3JvdXBPbmUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICB9KVxuICB9KVxuXG4gIC8v0J/QvtGP0LLQu9C10L3QuNC1INC/0L7QtNC/0LjRgdC60Lgg0L3QsCDRgNCw0YHRgdGL0LvQutGDXG4gIGNvbnN0IGhpZGRlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWRkZW4nKVxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwnKVxuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBoaWRkZW4uZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICB9KVxuICB9KVxufSlcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3J3YXJkIiwicXVlcnlTZWxlY3RvciIsImJhY2siLCJoaWRlSW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsInNob3dJbWFnZXMiLCJmb3JFYWNoIiwiZ3JvdXBUd28iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJncm91cE9uZSIsImhpZGRlbiIsImJ1dHRvbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=