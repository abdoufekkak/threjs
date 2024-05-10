import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Créer la scène
const scene = new THREE.Scene();

// Créer la caméra
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(1, 2, 5);

// Créer le rendu
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Créer un axesHelper pour visualiser les axes
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
// Créer une géométrie de cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
// Créer un matériau pour le cube (par exemple, couleur rouge)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// Créer un maillage en combinant la géométrie et le matériau
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const planGeometry = new THREE.PlaneGeometry(30, 30);

// Créer un matériau pour le plan (par exemple, couleur bleue)
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.DoubleSide });

// Créer le maillage en combinant la géométrie et le matériau
const plane = new THREE.Mesh(planGeometry, planeMaterial);

// Positionner le plan
plane.position.set(0, 0, 0);

// Rotation du plan (optionnel)
plane.rotation.y = Math.PI / 2; // Rotation de 90 degrés autour de l'axe X pour l'orienter correctement

// Ajouter le plan à la scène
scene.add(plane);
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32); // Rayon: 1, segments en X et en Y: 32

// Créer un matériau pour la sphère (par exemple, couleur bleue)
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x01011 });

// Créer le maillage en combinant la géométrie et le matériau
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

// Positionner la sphère
sphere.position.set(0, 0, 0);

// Ajouter la sphère à la scène
scene.add(sphere);

// Ajouter la caméra à la scène
scene.add(camera);

// Créer les contrôles OrbitControls
const orbit = new OrbitControls(camera, renderer.domElement);

// Mettre à jour les contrôles
orbit.update();

// Animation de la scène
function animate() {
    requestAnimationFrame(animate);

    // Rotation du cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;


    // Rendu de la scène avec la caméra
    renderer.render(scene, camera);
}

// Lancer l'animation
animate();

// Ajouter le rendu au corps du document HTML
document.body.appendChild(renderer.domElement);
