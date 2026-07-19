import React, { useEffect, useRef } from "react";
import {
  AmbientLight,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Clock,
  Group,
  IcosahedronGeometry,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Points,
  PointsMaterial,
  Scene,
  SphereGeometry,
  Sprite,
  SpriteMaterial,
  SRGBColorSpace,
  TorusGeometry,
  Vector3,
  WebGLRenderer,
} from "three";

const nodeLabels = [
  "Java",
  "React",
  "SAP",
  "APIs",
  "Spring",
  "Cloud",
];

function createLabelTexture(text) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const width = 256;
  const height = 96;

  canvas.width = width;
  canvas.height = height;
  context.clearRect(0, 0, width, height);
  context.fillStyle = "rgba(8, 10, 13, 0.38)";
  context.strokeStyle = "rgba(55, 224, 195, 0.3)";
  context.lineWidth = 3;
  context.beginPath();
  if (context.roundRect) {
    context.roundRect(18, 18, width - 36, height - 36, 18);
  } else {
    context.rect(18, 18, width - 36, height - 36);
  }
  context.fill();
  context.stroke();
  context.font = "700 25px Inter, system-ui, sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "rgba(203, 247, 239, 0.66)";
  context.fillText(text, width / 2, height / 2 + 1);

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

function disposeObject(object) {
  object.traverse((child) => {
    if (child.geometry) {
      child.geometry.dispose();
    }

    const materials = Array.isArray(child.material)
      ? child.material
      : [child.material];

    materials.forEach((material) => {
      if (!material) return;
      Object.values(material).forEach((value) => {
        if (value?.isTexture) {
          value.dispose();
        }
      });
      material.dispose();
    });
  });
}

export default function DeveloperConstellation() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const scene = new Scene();
    const camera = new PerspectiveCamera(46, 1, 0.1, 100);
    camera.position.set(0, 0.45, 7.2);

    const renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.domElement.className = "developer-constellation-canvas";
    renderer.domElement.dataset.scene = "developer-constellation";
    host.appendChild(renderer.domElement);

    const ambient = new AmbientLight(0xffffff, 1.1);
    scene.add(ambient);

    const keyLight = new PointLight(0x37e0c3, 5, 18);
    keyLight.position.set(-3.5, 2.2, 4);
    scene.add(keyLight);

    const warmLight = new PointLight(0xff7a59, 3.2, 16);
    warmLight.position.set(3.4, -1.4, 3.3);
    scene.add(warmLight);

    const rig = new Group();
    scene.add(rig);

    const coreMaterial = new MeshStandardMaterial({
      color: 0x37e0c3,
      emissive: 0x0f6c66,
      emissiveIntensity: 0.55,
      metalness: 0.55,
      roughness: 0.24,
      transparent: true,
      opacity: 0.92,
    });
    const core = new Mesh(
      new IcosahedronGeometry(0.86, 2),
      coreMaterial
    );
    rig.add(core);

    const wire = new Mesh(
      new IcosahedronGeometry(1.08, 2),
      new MeshBasicMaterial({
        color: 0xf7d046,
        transparent: true,
        opacity: 0.32,
        wireframe: true,
      })
    );
    rig.add(wire);

    const ringMaterial = new MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.16,
      wireframe: true,
    });

    const rings = [
      new Mesh(new TorusGeometry(1.75, 0.01, 10, 128), ringMaterial),
      new Mesh(new TorusGeometry(2.45, 0.012, 10, 128), ringMaterial),
      new Mesh(new TorusGeometry(3.15, 0.012, 10, 128), ringMaterial),
    ];

    rings[0].rotation.x = Math.PI / 2.35;
    rings[1].rotation.y = Math.PI / 2.6;
    rings[2].rotation.x = Math.PI / 2;
    rings[2].rotation.z = Math.PI / 5;
    rings.forEach((ring) => rig.add(ring));

    const nodeGeometry = new SphereGeometry(0.095, 24, 24);
    const nodeMaterial = new MeshStandardMaterial({
      color: 0xf6f8fb,
      emissive: 0x37e0c3,
      emissiveIntensity: 0.65,
      metalness: 0.1,
      roughness: 0.2,
    });
    const lineMaterial = new LineBasicMaterial({
      color: 0x37e0c3,
      transparent: true,
      opacity: 0.22,
    });

    nodeLabels.forEach((label, index) => {
      const angle = (index / nodeLabels.length) * Math.PI * 2;
      const radius = index % 2 === 0 ? 2.35 : 3;
      const y = index % 3 === 0 ? 0.74 : index % 3 === 1 ? -0.6 : 0.08;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius * 0.56;

      const nodeGroup = new Group();
      nodeGroup.position.set(x, y, z);
      nodeGroup.userData = { phase: angle, lift: y };

      const sphere = new Mesh(nodeGeometry, nodeMaterial);
      nodeGroup.add(sphere);

      const labelSprite = new Sprite(
        new SpriteMaterial({
          map: createLabelTexture(label),
          transparent: true,
          opacity: 0.5,
          depthWrite: false,
        })
      );
      labelSprite.position.set(0, 0.34, 0);
      labelSprite.scale.set(0.68, 0.26, 1);
      nodeGroup.add(labelSprite);

      const lineGeometry = new BufferGeometry().setFromPoints([
        new Vector3(0, 0, 0),
        new Vector3(-x, -y, -z),
      ]);
      const line = new Line(lineGeometry, lineMaterial);
      nodeGroup.add(line);
      rig.add(nodeGroup);
    });

    const particleCount = 700;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      const i = index * 3;
      particlePositions[i] = (Math.random() - 0.5) * 11;
      particlePositions[i + 1] = (Math.random() - 0.5) * 7;
      particlePositions[i + 2] = (Math.random() - 0.5) * 7;
    }
    const particleGeometry = new BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new BufferAttribute(particlePositions, 3)
    );
    const particles = new Points(
      particleGeometry,
      new PointsMaterial({
        color: 0xd9dee7,
        size: 0.018,
        transparent: true,
        opacity: 0.48,
        depthWrite: false,
      })
    );
    scene.add(particles);

    const pointer = { x: 0, y: 0 };
    const handlePointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", handlePointerMove);

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      const canvasWidth = Math.max(1, width);
      const canvasHeight = Math.max(1, height);
      renderer.setSize(canvasWidth, canvasHeight, false);
      camera.aspect = canvasWidth / canvasHeight;
      camera.position.z = canvasWidth < 720 ? 8.4 : 7.2;
      rig.position.x = canvasWidth < 900 ? 0.2 : 1.45;
      rig.position.y = canvasWidth < 900 ? -0.25 : -0.08;
      rig.scale.setScalar(canvasWidth < 900 ? 0.86 : 1);
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    let frameId = 0;
    const clock = new Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      rig.rotation.y = elapsed * 0.19 + pointer.x * 0.18;
      rig.rotation.x = pointer.y * 0.1;
      core.rotation.x = elapsed * 0.48;
      core.rotation.y = elapsed * 0.32;
      wire.rotation.x = -elapsed * 0.18;
      wire.rotation.z = elapsed * 0.22;
      particles.rotation.y = elapsed * 0.025;

      rig.children.forEach((child) => {
        if (typeof child.userData?.phase !== "number") return;
        child.position.y =
          child.userData.lift + Math.sin(elapsed * 1.4 + child.userData.phase) * 0.12;
      });

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      resizeObserver.disconnect();
      disposeObject(scene);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="hero-three-scene"
      aria-hidden="true"
      data-testid="developer-constellation"
    />
  );
}
