"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
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

export const Sample = () => {
  const referenceContainer = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
    const { current: container } = referenceContainer;
    if (container && !renderer && typeof window !== "undefined") {
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.append(renderer.domElement);
      setRenderer(renderer);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        100,
      );
      camera.position.set(1, 2, -3);
      camera.lookAt(0, 1, 0);
      const target = new THREE.Vector3(-0.5, 1.2, 0);

      const ambientLight = new THREE.AmbientLight(0xcc_cc_cc, 1);
      scene.add(ambientLight);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = false;
      controls.target = target;

      loadGLTFModel(scene, "/models/Soldier.glb", {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let request: number | null;
      let frame = 0;
      const animate = () => {
        request = requestAnimationFrame(animate);
        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          camera.position.y = -10;
          camera.position.x = 0;
          camera.position.z = -35;
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(request as number);
        renderer.dispose();
      };
    }
  }, [mount, renderer]);

  return (
    <div ref={referenceContainer}>{loading && <span>Loading...</span>}</div>
  );
};
