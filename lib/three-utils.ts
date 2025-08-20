import * as THREE from 'three'; // Importing Three.js library

// Function to create a scene with a specific background color
export const createScene = (bgColor: number): THREE.Scene => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(bgColor); // Set background color
    return scene;
};

// Function to create a camera
export const createCamera = (fov: number, aspect: number, near: number, far: number): THREE.PerspectiveCamera => {
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 5); // Set camera position
    return camera;
};

// Function to create a renderer
export const createRenderer = (width: number, height: number): THREE.WebGLRenderer => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height); // Set renderer size
    return renderer;
};

// Function to create a light
export const createLight = (color: number, intensity: number): THREE.DirectionalLight => {
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(1, 1, 1).normalize(); // Set light position
    return light;
};

// Function to add a mesh to the scene
export const addMeshToScene = (scene: THREE.Scene, geometry: THREE.Geometry | THREE.BufferGeometry, material: THREE.Material): void => {
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh); // Add mesh to the scene
}; 

// Function to animate the scene
export const animate = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera): void => {
    const render = () => {
        requestAnimationFrame(render); // Request next frame
        renderer.render(scene, camera); // Render the scene
    };
    render();
}; 

export default {
    createScene,
    createCamera,
    createRenderer,
    createLight,
    addMeshToScene,
    animate,
};