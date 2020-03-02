/**
 * 1-2.js - a simple JavaScript file that gets loaded with
 * page 1 of Workbook 7 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020
 */

// @ts-check
/* jshint -W069, esversion:6 */

import * as THREE from "../libs/THREE/src/Three.js";
import { onWindowOnload } from "../libs/helpers.js";

//
// this is exactly the code from
// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
//
// with the following modifications:
//    - rather than making the render target fill the screen, it gets put in the
//      right location in the box at an appropriate size. this requires setting
//      the aspect ratio correctly
//    - i added a light source and used a material that responds to do
//    - lines are re-ordered
// in this version, I pass an existing canvas
function three2() {
  let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById(
    "canvas1"
  ));

  // Set up the renderer, which will create the Canvas for us
  let renderer = new THREE.WebGLRenderer({ canvas: canvas });

  // the aspect ratio is set to 1 - since we're making the window 200x200
  let camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);

  let scene = new THREE.Scene();

  let geometry = new THREE.BoxGeometry(1, 1, 1);
  // this was "MeshBasicMaterial"
  let material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  let cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // we don't see anything if there is no light
  let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  let pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(25, 50, 25);
  scene.add(pointLight);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
}

onWindowOnload(three2);
