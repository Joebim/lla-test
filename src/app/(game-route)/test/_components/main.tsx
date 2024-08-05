"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function loadGLTFModel(scene, glbPath, options) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      glbPath,
      (gltf) => {
        const object = gltf.scene;
        object.name = "avatar";
        object.position.y = 0;
        object.position.x = 0;
        object.position.z = 0;
        object.receiveShadow = receiveShadow;
        object.castShadow = castShadow;
        scene.add(object);

        resolve(object);
      },
      undefined,
      function (error) {
        reject(error);
      },
    );
  });
}

const MainTest = () => {
  const containerReference = useRef<HTMLDivElement>(null);
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
    if (typeof window !== "undefined") {
      const init = () => {
        const camera = new THREE.PerspectiveCamera(
          45,
          window.innerWidth / window.innerHeight,
          1,
          100,
        );
        camera.position.set(1, 2, -3);
        camera.lookAt(0, 1, 0);

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xa0_a0_a0);
        scene.fog = new THREE.Fog(0xa0_a0_a0, 10, 50);

        const hemiLight = new THREE.HemisphereLight(0xff_ff_ff, 0x8d_8d_8d, 3);
        hemiLight.position.set(0, 20, 0);
        scene.add(hemiLight);

        const directionLight = new THREE.DirectionalLight(0xff_ff_ff, 3);
        directionLight.position.set(-3, 10, -10);
        directionLight.castShadow = true;
        directionLight.shadow.camera.top = 2;
        directionLight.shadow.camera.bottom = -2;
        directionLight.shadow.camera.left = -2;
        directionLight.shadow.camera.right = 2;
        directionLight.shadow.camera.near = 0.1;
        directionLight.shadow.camera.far = 40;
        scene.add(directionLight);

        // ground
        const mesh = new THREE.Mesh(
          new THREE.PlaneGeometry(100, 100),
          new THREE.MeshPhongMaterial({ color: 0xcb_cb_cb, depthWrite: false }),
        );
        mesh.rotation.x = -Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add(mesh);

        // Load model

        loadGLTFModel(scene, "/models/Soldier.glb", {
          receiveShadow: false,
          castShadow: false,
        }).then(() => {});

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        containerReference.current?.append(renderer.domElement);

        renderer.render(scene, camera);
      };

      init();
    }
  }, [mount]);

  return <div ref={containerReference} className="min-h-screen"></div>;
};

export default MainTest;
