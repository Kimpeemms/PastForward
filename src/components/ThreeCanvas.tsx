import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ThreeCanvasProps {
  themeColor: "red" | "gold" | "charcoal";
}

export default function ThreeCanvas({ themeColor }: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight || 400;

    // Scene
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background for integration

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xff0000, 0.4); // Reddish ambient
    scene.add(ambientLight);

    const goldSpotLight = new THREE.SpotLight(0xd4af37, 8, 40, Math.PI / 4, 0.5, 1);
    goldSpotLight.position.set(5, 5, 8);
    scene.add(goldSpotLight);

    const whiteLight = new THREE.DirectionalLight(0xffffff, 4);
    whiteLight.position.set(-5, 8, 5);
    scene.add(whiteLight);

    // Create the "Silk Ribbon Wave" Geometry
    // We create a fine plane with high segment density, and animate it in the render loop.
    const geometry = new THREE.PlaneGeometry(16, 8, 64, 42);

    // Determine colors
    let matColor = 0x8b0000; // Deep crimson
    if (themeColor === "gold") matColor = 0xd4af37;
    if (themeColor === "charcoal") matColor = 0x222222;

    // Luxury material resembling royal Thai silk: High sheen, metallic highlights, double-sided
    const material = new THREE.MeshStandardMaterial({
      color: matColor,
      roughness: 0.18,
      metalness: 0.35,
      side: THREE.DoubleSide,
      wireframe: false,
    });

    const silkMesh = new THREE.Mesh(geometry, material);
    silkMesh.rotation.x = -0.5;
    silkMesh.rotation.y = 0.2;
    scene.add(silkMesh);

    // Create a beautiful "Interactive Golden Thread Loom Grid" that orbits or layers above
    // It is a series of glowing strings representing the authentic Thai loom structure
    const threadsGroup = new THREE.Group();
    const threadCount = 20;
    const threadMaterial = new THREE.LineBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    // Vertical warp strings
    for (let i = 0; i < threadCount; i++) {
      const xCoord = ((i / (threadCount - 1)) - 0.5) * 14;
      const points = [];
      for (let j = 0; j <= 40; j++) {
        const yCoord = ((j / 40) - 0.5) * 6;
        points.push(new THREE.Vector3(xCoord, yCoord, 0));
      }
      const threadGeom = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(threadGeom, threadMaterial);
      threadsGroup.add(line);
    }

    // Horizontal weft strings
    const weftCount = 10;
    for (let i = 0; i < weftCount; i++) {
      const yCoord = ((i / (weftCount - 1)) - 0.5) * 6;
      const points = [];
      for (let j = 0; j <= 60; j++) {
        const xCoord = ((j / 60) - 0.5) * 14;
        points.push(new THREE.Vector3(xCoord, yCoord, 0));
      }
      const threadGeom = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(threadGeom, threadMaterial);
      threadsGroup.add(line);
    }

    threadsGroup.position.z = 0.1; // Float slightly above the solid silk ribbon
    threadsGroup.rotation.x = -0.5;
    threadsGroup.rotation.y = 0.2;
    scene.add(threadsGroup);

    // Mouse tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      targetMouseX = (x / width) * 2 - 1;
      targetMouseY = -(y / height) * 2 + 1;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Resize Observer for fluid container resizing (compliant with responsive guidelines)
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = entry.contentRect.width;
        height = entry.contentRect.height || 400;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      }
    });
    resizeObserver.observe(container);

    // Audio or rhythmic time tracking
    let clock = new THREE.Clock();

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      // Animate solid silk waves using mathematically complex double-sine functions for royal flow
      const positionAttribute = geometry.attributes.position;
      const vertex = new THREE.Vector3();

      for (let i = 0; i < positionAttribute.count; i++) {
        vertex.fromBufferAttribute(positionAttribute, i);

        // Standard wave formula
        let wave1 = Math.sin(vertex.x * 0.4 + elapsed * 1.5) * 0.5;
        let wave2 = Math.cos(vertex.y * 0.5 + elapsed * 1.2) * 0.3;

        // Interactive mouse kinetic ripple
        let dist = Math.sqrt(
          Math.pow(vertex.x - mouseX * 5, 2) + Math.pow(vertex.y - mouseY * 3, 2)
        );
        let hoverRipple = 0;
        if (dist < 3) {
          hoverRipple = Math.sin(dist * 2.0 - elapsed * 5) * 0.25 * (1.0 - dist / 3);
        }

        positionAttribute.setZ(i, wave1 + wave2 + hoverRipple);
      }
      geometry.computeVertexNormals();
      positionAttribute.needsUpdate = true;

      // Update gold thread positions to wave in unison with the main silk, representing weaving integrity
      threadsGroup.children.forEach((child) => {
        const line = child as THREE.Line;
        const ptsAttr = line.geometry.attributes.position;
        const linePt = new THREE.Vector3();

        for (let idx = 0; idx < ptsAttr.count; idx++) {
          linePt.fromBufferAttribute(ptsAttr, idx);

          // Corresponding wave matching
          let wave1 = Math.sin(linePt.x * 0.4 + elapsed * 1.5) * 0.5;
          let wave2 = Math.cos(linePt.y * 0.5 + elapsed * 1.2) * 0.3;

          let dist = Math.sqrt(
            Math.pow(linePt.x - mouseX * 5, 2) + Math.pow(linePt.y - mouseY * 3, 2)
          );
          let hoverRipple = 0;
          if (dist < 3) {
            hoverRipple = Math.sin(dist * 2.0 - elapsed * 5) * 0.25 * (1.0 - dist / 3);
          }

          // Thread slightly floating for visual depth
          ptsAttr.setZ(idx, wave1 + wave2 + hoverRipple + 0.05);
        }
        line.geometry.computeBoundingSphere();
        ptsAttr.needsUpdate = true;
      });

      // Subtle rotations
      silkMesh.rotation.y = 0.2 + mouseX * 0.15;
      silkMesh.rotation.x = -0.5 + mouseY * 0.1;

      threadsGroup.rotation.y = 0.2 + mouseX * 0.15;
      threadsGroup.rotation.x = -0.5 + mouseY * 0.1;

      // Brighten or darken spot light based on interactive hover
      goldSpotLight.intensity = isHovered ? 12 : 8;
      goldSpotLight.position.x = 5 + mouseX * 3;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (container && container.contains(canvas)) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      threadMaterial.dispose();
    };
  }, [themeColor, isHovered]);

  return (
    <div
      ref={containerRef}
      id="three-root-container"
      className="relative w-full h-[380px] md:h-[450px] overflow-hidden rounded-none border border-[#e3beb8]/30 bg-radial from-[#130704]/40 to-transparent flex items-center justify-center cursor-crosshair group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        id="luxury-silk-loom-canvas"
        className="absolute top-0 left-0 w-full h-full block"
      />

      {/* Decorative corners denoting high-craftsmanship framing */}
      <span className="absolute top-3 left-3 w-3 h-[1px] bg-metallic-gold/60"></span>
      <span className="absolute top-3 left-3 w-[1px] h-3 bg-metallic-gold/60"></span>
      <span className="absolute top-3 right-3 w-3 h-[1px] bg-metallic-gold/60"></span>
      <span className="absolute top-3 right-3 w-[1px] h-3 bg-metallic-gold/60"></span>
      <span className="absolute bottom-3 left-3 w-3 h-[1px] bg-metallic-gold/60"></span>
      <span className="absolute bottom-3 left-3 w-[1px] h-3 bg-metallic-gold/60"></span>
      <span className="absolute bottom-3 right-3 w-3 h-[1px] bg-metallic-gold/60"></span>
      <span className="absolute bottom-3 right-3 w-[1px] h-3 bg-metallic-gold/60"></span>

      {/* Embedded High-Fashion Label */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-metallic-gold/80 font-sans font-medium">
          Siamese Digital Loom
        </p>
        <span className="inline-block w-8 h-[0.5px] bg-metallic-gold/30"></span>
      </div>

      <div className="absolute bottom-4 right-4 text-right pointer-events-none select-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-[9px] font-mono uppercase text-metallic-gold/70 tracking-wider">
          WebGL Active • Hover to weave
        </p>
      </div>
    </div>
  );
}
