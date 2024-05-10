import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import startsTexture from "./img/stars.jpg";
import sunTexture from "./img/sun.jpg";
import mercuryTexture from './img/venus.jpg';
import venusTexture from './img/earth.jpg';
import marsTexture from './img/mars.jpg';
import jupiterTexture from "./img/jupiter.jpg";
import saturnTexture from  './img/saturn.jpg';
import saturnRingTexture from  './img/saturn ring.png';
import uranusTexture from './img/uranus.jpg';
import uranusRingTexture from './img/uranus ring.png';
import neptuneTexture from './img/neptune.jpg';
import plutoTexture from './img/pluto.jpg';

const scene = new THREE.Scene();

// Créer la caméra
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-90, 140, 140);

// Créer le rendu
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Créer les contrôles OrbitControls
const orbit = new OrbitControls(camera, renderer.domElement);

// Mettre à jour les contrôles
orbit.update();

// Charger la texture de fond
const cubeTextureLoaded = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoaded.load([
    startsTexture,
    startsTexture,
    startsTexture,
    startsTexture,
    startsTexture,
    startsTexture
]);

// Créer le soleil
const sunGeo = new THREE.SphereGeometry(16, 30, 30);
const sunMat = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(sunTexture)
});
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);

// Créer Vénus
const venusGeo = new THREE.SphereGeometry(3.2, 30, 30);
const venusMat = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(venusTexture)
});
const venus = new THREE.Mesh(venusGeo, venusMat); // Correction du nom de la planète
venus.position.x = 28;
sun.add(venus); // Correction du nom de la planète

function animate() {
    sun.rotateY(0.00004);
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

const pointLight = new THREE.PointLight(0xFFFFFF, 2, 300);
scene.add(pointLight);

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Ajouter le rendu au corps du document HTML
document.body.appendChild(renderer.domElement);