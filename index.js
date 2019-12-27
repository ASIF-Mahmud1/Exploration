// // console.log("Hello",THREE)
// class Car {
//     constructor(name, numberPlate) {
//       this.brand = name;
//       this.numberPlate= numberPlate
//     }
  
//     present() {
//       return 'I have a ' + this.brand+ " numberPlate is "+this.numberPlate;
//     }
//   }
  
//   class Model extends Car {
//     constructor(name, numberPlate ,mod) {
//       super(name, numberPlate);
//       this.model = mod;
//     }  
//     show() {
//         return this.present() + ', it is a ' + this.model
//     }
//   }
//   mycar = new Model("Ford","ds", "Mustang");
//   let output=
//   mycar.show();
//  // console.log(output)

//  const myelement = <h1>I Love JSX!</h1>;

// import * as THREE from 'three';

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

var scene = new THREE.Scene();
var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 10, 0));
geometry.vertices.push(new THREE.Vector3(10, 0, 0));
var line = new THREE.Line(geometry, material);
scene.add(line);
renderer.render(scene, camera);
