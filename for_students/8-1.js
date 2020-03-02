/**
 * 8-1.js - a simple JavaScript file that gets loaded with
 * page 8 of Workbook 7 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020
 */

// @ts-check
/* jshint -W069, esversion:6 */

import * as THREE from "../libs/THREE/src/Three.js";
import { OrbitControls } from "../libs/THREE/examples/jsm/controls/OrbitControls.js";

window.onload = function() {
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(500, 500);
  document.getElementById("div1").appendChild(renderer.domElement);

  // student does the rest.
};
