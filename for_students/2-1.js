/**
 * 2-1.js - a simple JavaScript file that gets loaded with
 * page 2 of Workbook 7 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020
 */

// @ts-check
/* jshint -W069, esversion:6 */

import * as T from "../libs/THREE/src/Three.js";

// the simplest thing I can do
// draw a box
window.onload = function() {
  //@@Snippet:box2
  // create the window that we want to draw into - this will
  // create a Canvas element - we'll set it to be
  let renderer = new T.WebGLRenderer();
  renderer.setSize(200, 200);
  // put the canvas into the DOM
  document.getElementById("div1").appendChild(renderer.domElement);

  // make a "scene" - a world to put the box into
  let scene = new T.Scene();

  // This transforms the world to the view
  // in this case a simple scaling
  let camera = new T.OrthographicCamera(-2, 2, -2, 2, -2, 2);

  // we are going to make our box out of green "stuff"
  // this green stuff shows up as green even if there is no lighting
  let material = new T.MeshBasicMaterial({ color: 0x00ff00 });

  // make a box - note that we make the geometry (a collection of triangles)
  // and then make a mesh object out of that geometry - which attaches the
  // triangles to a material
  let geometry = new T.BoxGeometry(1, 1, 1);
  let mesh = new T.Mesh(geometry, material);

  // now we need to put that box into the world
  scene.add(mesh);

  // now we just need to draw the scene with the camera
  renderer.render(scene, camera);
};
