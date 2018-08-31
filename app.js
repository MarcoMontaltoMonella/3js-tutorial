// Create an empty scene
var scene = new THREE.Scene();

// Create a basic prospective camera
const fieldOfView = 75;
const aspectRatio = window.innerWidth/window.innerHeight;
const nearPlane = 0.1;
const farPlane = 1000;

var camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
camera.position.z = 4;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// Create a Cube Mesh with basic material
var geometry = new THREE.TorusGeometry( 1, 0.4, 8, 6, 6.3 );
var material = new THREE.MeshBasicMaterial( { color: "green" } );
var torus = new THREE.Mesh( geometry, material );

torus.material.wireframe = true;

// Add cube to Scene
scene.add( torus );

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  
  // Render the scene
  renderer.render(scene, camera);
};

render();