"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils";

function My3DModel() {
  const canvasReference = useRef<HTMLDivElement>(null);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    console.log("Window inner width:", window.innerWidth);
    // if (typeof window !== "undefined") {
    // const handleResize = () => {
    //   setWindowDimensions({
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //   });
    // };
    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
    // }
  }, []);

  useEffect(() => {
    const canvas = canvasReference.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa0_a0_a0);
    scene.fog = new THREE.Fog(0xa0_a0_a0, 10, 50);
    const camera = new THREE.PerspectiveCamera(
      45,
      windowDimensions.width / windowDimensions.height,
      1,
      1000,
    );
    camera.position.set(2, 3, -6);
    camera.lookAt(0, 0, 0);

    const hemiLight = new THREE.HemisphereLight(0xff_ff_ff, 0x8d_8d_8d, 3);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const directionLight = new THREE.DirectionalLight(0xff_ff_ff, 3);
    directionLight.position.set(3, 10, 10);
    directionLight.castShadow = true;
    directionLight.shadow.camera.top = 2;
    directionLight.shadow.camera.bottom = -2;
    directionLight.shadow.camera.left = -2;
    directionLight.shadow.camera.right = 2;
    directionLight.shadow.camera.near = 0.1;
    directionLight.shadow.camera.far = 40;
    scene.add(directionLight);

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshPhongMaterial({ color: 0xcb_cb_cb, depthWrite: false }),
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(windowDimensions.width, windowDimensions.height);
    renderer.shadowMap.enabled = true;
    canvas?.append(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load("/models/avatar.glb", (gltf: GLTF) => {
      const model = gltf.scene;

      const model1 = SkeletonUtils.clone(model);
      const model2 = SkeletonUtils.clone(model);

      model1.position.x = -2;
      model2.position.x = 0;

      scene.add(model1, model2);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableRotate = false;
    controls.target.set(0, 1.4, 0);
    controls.update();

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={canvasReference} className="min-h-screen w-full"></div>;
}

export default My3DModel;
