/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/World/World.js":
/*!****************************!*\
  !*** ./src/World/World.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   World: () => (/* binding */ World),\n/* harmony export */   createImageAtPoint: () => (/* binding */ createImageAtPoint)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _components_camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/camera.js */ \"./src/World/components/camera.js\");\n/* harmony import */ var _components_cube_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cube.js */ \"./src/World/components/cube.js\");\n/* harmony import */ var _components_lights_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/lights.js */ \"./src/World/components/lights.js\");\n/* harmony import */ var _components_scene_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/scene.js */ \"./src/World/components/scene.js\");\n/* harmony import */ var _systems_renderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./systems/renderer.js */ \"./src/World/systems/renderer.js\");\n/* harmony import */ var _systems_Resizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./systems/Resizer.js */ \"./src/World/systems/Resizer.js\");\n/* harmony import */ var _systems_Loop_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./systems/Loop.js */ \"./src/World/systems/Loop.js\");\n\n\n\n\n\n\n\n\n\n\nlet camera;\nlet renderer;\nlet scene;\nlet loop;\n\n\nfunction latLongToVector3(lat, lon, radius) {\n    var phi = (90 - lat) * (Math.PI / 180);\n    var theta = (lon + 180) * (Math.PI / 180);\n\n    var x = -((radius) * Math.sin(phi) * Math.cos(theta));\n    var z = ((radius) * Math.sin(phi) * Math.sin(theta));\n    var y = ((radius) * Math.cos(phi));\n\n    return new three__WEBPACK_IMPORTED_MODULE_7__.Vector3(x, y, z);\n}\n\nfunction createImageAtPoint(lat, lon, texture, scene) {\n    var sphereRadius = 1; // Assuming the sphere has a radius of 1\n    var position = latLongToVector3(lat, lon, sphereRadius + 0.01); // Slightly above the sphere surface\n    var planeGeometry = new three__WEBPACK_IMPORTED_MODULE_7__.PlaneGeometry(0.05, 0.05); // Small plane\n    var planeMaterial = new three__WEBPACK_IMPORTED_MODULE_7__.MeshBasicMaterial({ map: texture, transparent: true, side: three__WEBPACK_IMPORTED_MODULE_7__.DoubleSide });\n    var plane = new three__WEBPACK_IMPORTED_MODULE_7__.Mesh(planeGeometry, planeMaterial);\n    plane.position.copy(position);\n    plane.lookAt(new three__WEBPACK_IMPORTED_MODULE_7__.Vector3(0, 0, 0)); // Orient the plane towards the center of the sphere\n\n    // Make the plane a child of the sphere so it rotates with it\n    scene.add(plane);\n}\nclass World {\n  constructor(container) {\n    camera = (0,_components_camera_js__WEBPACK_IMPORTED_MODULE_0__.createCamera)();\n    renderer = (0,_systems_renderer_js__WEBPACK_IMPORTED_MODULE_4__.createRenderer)();\n    scene = (0,_components_scene_js__WEBPACK_IMPORTED_MODULE_3__.createScene)();\n    loop = new _systems_Loop_js__WEBPACK_IMPORTED_MODULE_6__.Loop(camera, scene, renderer);\n    container.append(renderer.domElement);\n\n    const sphere = (0,_components_cube_js__WEBPACK_IMPORTED_MODULE_1__.createSphere)();\n    const light = (0,_components_lights_js__WEBPACK_IMPORTED_MODULE_2__.createLights)();\n\n    loop.updatables.push(sphere);\n\n    scene.add(sphere, light);\n    const lightHelper = new three__WEBPACK_IMPORTED_MODULE_7__.PointLightHelper(light);\n    scene.add(lightHelper);\n\n    const resizer = new _systems_Resizer_js__WEBPACK_IMPORTED_MODULE_5__.Resizer(container, camera, renderer);\n  }\n\n  render() {35344\n    // draw a single frame\n    renderer.render(scene, camera);\n  }\n\n  start() {\n    loop.start();\n  }\n\n  stop() {\n    loop.stop();\n  }\n}\n\n\n\n\n//# sourceURL=webpack://kcg-2/./src/World/World.js?");

/***/ }),

/***/ "./src/World/components/camera.js":
/*!****************************************!*\
  !*** ./src/World/components/camera.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCamera: () => (/* binding */ createCamera)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nfunction createCamera() {\n  const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(\n    35, // fov = Field Of View\n    1, // aspect ratio (dummy value)\n    0.1, // near clipping plane\n    100, // far clipping plane\n  );\n\n  camera.position.set(0, 0, 10);\n\n  return camera;\n}\n\n\n\n\n//# sourceURL=webpack://kcg-2/./src/World/components/camera.js?");

/***/ }),

/***/ "./src/World/components/cube.js":
/*!**************************************!*\
  !*** ./src/World/components/cube.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSphere: () => (/* binding */ createSphere)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\nfunction createMaterial() {\n  // create a texture loader.\n  const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n\n  // load a texture\n  const texture = textureLoader.load(\n    './assets/textures/earth-texture.png',\n  );\n\n  // create a \"standard\" material using\n  // the texture we just loaded as a color map\n  const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({\n    map: texture,\n  });\n\n  return material;\n}\n\nfunction createSphere() {\n  const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(1, 32, 32); // Adjust the segments as needed\n  const material = createMaterial();\n  const sphere = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);\n\n  sphere.rotation.set(-0.5, 0, 0);\n\n  const radiansPerSecond = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad(15);\n\n  // this method will be called once per frame\n  sphere.tick = (delta) => {\n    // increase the sphere's rotation each frame\n    sphere.rotation.y += radiansPerSecond * delta;\n  };\n\n  return sphere;\n}\n\n\n\n\n\n//# sourceURL=webpack://kcg-2/./src/World/components/cube.js?");

/***/ }),

/***/ "./src/World/components/lights.js":
/*!****************************************!*\
  !*** ./src/World/components/lights.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createLights: () => (/* binding */ createLights)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nfunction createLights() {\n  const light = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 1, 100000);\n\n  \n  light.position.set(100, 100, 100);\n\n\n\n  return light;\n}\n\n\n\n\n//# sourceURL=webpack://kcg-2/./src/World/components/lights.js?");

/***/ }),

/***/ "./src/World/components/scene.js":
/*!***************************************!*\
  !*** ./src/World/components/scene.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createScene: () => (/* binding */ createScene)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nfunction createScene() {\n  const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n\n  scene.background = new three__WEBPACK_IMPORTED_MODULE_0__.Color('skyblue');\n\n  return scene;\n}\n\n\n\n\n//# sourceURL=webpack://kcg-2/./src/World/components/scene.js?");

/***/ }),

/***/ "./src/World/systems/Loop.js":
/*!***********************************!*\
  !*** ./src/World/systems/Loop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Loop: () => (/* binding */ Loop)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nconst clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock(); // Corrected\n\nclass Loop {\n  constructor(camera, scene, renderer) {\n    this.camera = camera;\n    this.scene = scene;\n    this.renderer = renderer;\n    this.updatables = [];\n  }\n\n  start() {\n    this.renderer.setAnimationLoop(() => {\n      // tell every animated object to tick forward one frame\n      this.tick();\n\n      // render a frame\n      this.renderer.render(this.scene, this.camera);\n    });\n  }\n\n  stop() {\n    this.renderer.setAnimationLoop(null);\n  }\n\n  tick() {\n    // only call the getDelta function once per frame!\n    const delta = clock.getDelta();\n\n    // console.log(\n    //   `The last frame rendered in ${delta * 1000} milliseconds`,\n    // );\n\n    for (const object of this.updatables) {\n      object.tick(delta);\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://kcg-2/./src/World/systems/Loop.js?");

/***/ }),

/***/ "./src/World/systems/Resizer.js":
/*!**************************************!*\
  !*** ./src/World/systems/Resizer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Resizer: () => (/* binding */ Resizer)\n/* harmony export */ });\n\n\nconst setSize = (container, camera, renderer) => {\n  camera.aspect = container.clientWidth / container.clientHeight;\n  camera.updateProjectionMatrix();\n\n  renderer.setSize(container.clientWidth, container.clientHeight);\n  renderer.setPixelRatio(window.devicePixelRatio);\n};\n\nclass Resizer {\n  constructor(container, camera, renderer) {\n    // set initial size\n    setSize(container, camera, renderer);\n\n    window.addEventListener('resize', () => {\n      // set the size again if a resize occurs\n      setSize(container, camera, renderer);\n      // perform any custom actions\n      this.onResize();\n    });\n  }\n\n  onResize() {}\n}\n\n\n\n\n//# sourceURL=webpack://kcg-2/./src/World/systems/Resizer.js?");

/***/ }),

/***/ "./src/World/systems/renderer.js":
/*!***************************************!*\
  !*** ./src/World/systems/renderer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRenderer: () => (/* binding */ createRenderer)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nfunction createRenderer() {\n  const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ antialias: true });\n\n  renderer.physicallyCorrectLights = true;\n\n  return renderer;\n}\n\n\n\n\n//# sourceURL=webpack://kcg-2/./src/World/systems/renderer.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _World_World_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./World/World.js */ \"./src/World/World.js\");\n\n\n\n\nfunction main() {\n  console.log(\"JavaScript is running\");\n  // Get a reference to the container element\n  const container = document.querySelector('#scene-container');\n\n  // create a new world\n  const world = new _World_World_js__WEBPACK_IMPORTED_MODULE_0__.World(container);\n// Load the texture for the image to be placed on the sphere\nconst textureLoader = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader(); \nconst imageTexture = textureLoader.load('./assets/texture/saul-12-1-17.png', function(texture) {\n    // Create the image at the specific latitude and longitude once the texture is loaded\n    (0,_World_World_js__WEBPACK_IMPORTED_MODULE_0__.createImageAtPoint)(41.3874, 2.1686, imageTexture, scene);\n});\n\n\n  // start the animation loop\n  world.start();\n}\n\nmain();\n\n\n//# sourceURL=webpack://kcg-2/./src/main.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;