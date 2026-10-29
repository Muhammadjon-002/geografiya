import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Globe3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLFailed, setWebGLFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      setWebGLFailed(true);
      return;
    }

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 2.7;

    // Root globe group
    const globeGroup = new THREE.Group();
    // Default tilt to showcase Central Asia & Northern hemisphere
    globeGroup.rotation.x = 0.28;
    globeGroup.rotation.y = 1.35;
    scene.add(globeGroup);

    // Inner sphere base with deep ocean gradient color
    const sphereGeo = new THREE.SphereGeometry(0.98, 48, 48);
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0x071e3d,
      emissive: 0x031326,
      specular: 0x06b6d4,
      shininess: 25,
      transparent: true,
      opacity: 0.92,
    });
    const globeMesh = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(globeMesh);

    // Wireframe graticule / latitude-longitude grid
    const wireGeo = new THREE.SphereGeometry(1.0, 24, 18);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    globeGroup.add(wireMesh);

    // Outer atmospheric glow shell
    const glowGeo = new THREE.SphereGeometry(1.06, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    globeGroup.add(glowMesh);

    // Helper: convert Lat/Lon to 3D Sphere coordinates
    const latLonToVector3 = (lat: number, lon: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    };

    // Uzbekistan location (~41.3 N, 69.2 E)
    const uzbPos = latLonToVector3(41.3, 69.2, 1.02);

    // Uzbekistan marker pin (cyan beacon)
    const pinGeo = new THREE.SphereGeometry(0.045, 16, 16);
    const pinMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee });
    const pinMesh = new THREE.Mesh(pinGeo, pinMat);
    pinMesh.position.copy(uzbPos);
    globeGroup.add(pinMesh);

    // Uzbekistan beacon ring
    const ringGeo = new THREE.RingGeometry(0.05, 0.075, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.copy(uzbPos);
    ringMesh.lookAt(uzbPos.clone().multiplyScalar(2));
    globeGroup.add(ringMesh);

    // Add points for key geographic crossroads and continental outlines
    const pointsCoords: [number, number][] = [
      // Central Asia & neighbors
      [41.3, 69.2], [39.6, 66.9], [40.7, 72.3], [37.2, 67.2], [42.4, 59.6],
      [43.2, 76.9], [42.8, 74.6], [38.5, 68.7], [37.9, 58.3], [34.5, 69.2],
      // Eurasia landmarks
      [55.7, 37.6], [39.9, 116.4], [28.6, 77.2], [35.6, 51.4], [41.0, 28.9],
      [51.5, -0.1], [48.8, 2.3], [35.6, 139.6], [31.2, 121.4], [1.3, 103.8],
      // Africa & Americas
      [30.0, 31.2], [-1.2, 36.8], [-33.9, 18.4], [40.7, -74.0], [34.0, -118.2],
      [-23.5, -46.6], [-34.6, -58.3], [-33.8, 151.2]
    ];

    const dotsGeo = new THREE.BufferGeometry();
    const positions: number[] = [];
    pointsCoords.forEach(([lat, lon]) => {
      const v = latLonToVector3(lat, lon, 1.01);
      positions.push(v.x, v.y, v.z);
    });
    dotsGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const dotsMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.035,
      transparent: true,
      opacity: 0.75,
    });
    const dotsMesh = new THREE.Points(dotsGeo, dotsMat);
    globeGroup.add(dotsMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 1.8);
    dirLight1.position.set(3, 4, 3);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x10b981, 0.7);
    dirLight2.position.set(-3, -2, -2);
    scene.add(dirLight2);

    // Drag interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let autoRotate = true;
    let pulseScale = 1;
    let pulseDir = 0.005;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      autoRotate = false;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      globeGroup.rotation.y += deltaX * 0.006;
      globeGroup.rotation.x += deltaY * 0.006;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
      setTimeout(() => {
        autoRotate = true;
      }, 2500);
    };

    const touchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        autoRotate = false;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const touchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      globeGroup.rotation.y += deltaX * 0.008;
      globeGroup.rotation.x += deltaY * 0.008;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };

    const touchEnd = () => {
      isDragging = false;
      setTimeout(() => {
        autoRotate = true;
      }, 2500);
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('touchstart', touchStart, { passive: true });
    window.addEventListener('touchmove', touchMove, { passive: true });
    window.addEventListener('touchend', touchEnd);

    // Resize handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth > 0 && newHeight > 0) {
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (autoRotate) {
        globeGroup.rotation.y += 0.0025;
      }

      // Beacon ring pulsating animation
      pulseScale += pulseDir;
      if (pulseScale > 1.45) pulseDir = -0.006;
      if (pulseScale < 0.9) pulseDir = 0.006;
      ringMesh.scale.set(pulseScale, pulseScale, pulseScale);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', touchStart);
      window.removeEventListener('touchmove', touchMove);
      window.removeEventListener('touchend', touchEnd);
      window.removeEventListener('resize', handleResize);
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      dotsGeo.dispose();
      dotsMat.dispose();
    };
  }, []);

  if (webGLFailed) {
    // Beautiful Vector SVG fallback globe
    return (
      <div className="relative w-full aspect-square max-w-[340px] mx-auto flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-full h-full text-cyan-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
          <circle cx="100" cy="100" r="88" fill="#071e3d" stroke="#06b6d4" strokeWidth="1.5" />
          <ellipse cx="100" cy="100" rx="88" ry="32" fill="none" stroke="#0ea5e9" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <ellipse cx="100" cy="100" rx="88" ry="62" fill="none" stroke="#0ea5e9" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <ellipse cx="100" cy="100" rx="32" ry="88" fill="none" stroke="#0ea5e9" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <ellipse cx="100" cy="100" rx="62" ry="88" fill="none" stroke="#0ea5e9" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <line x1="12" y1="100" x2="188" y2="100" stroke="#06b6d4" strokeWidth="1.2" />
          <line x1="100" y1="12" x2="100" y2="188" stroke="#06b6d4" strokeWidth="1.2" />
          <circle cx="120" cy="74" r="5" fill="#22d3ee" className="animate-ping" />
          <circle cx="120" cy="74" r="4" fill="#38bdf8" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto select-none">
      {/* Surrounding orbit ring visual */}
      <div className="absolute inset-0 rounded-full border border-cyan-500/10 pointer-events-none scale-105" />
      <div className="absolute inset-0 rounded-full border border-dashed border-teal-500/15 pointer-events-none scale-115 animate-[spin_60s_linear_infinite]" />
      
      {/* Canvas container */}
      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center" 
        title="Globusni aylantirish uchun bosing va suring"
      />

      {/* Floating subtle coordinates tag */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900/80 backdrop-blur-md border border-slate-700/60 rounded-full text-[11px] font-mono text-cyan-300 pointer-events-none whitespace-nowrap shadow-lg">
        UZB · 41°19'N 69°15'E · Toshkent
      </div>
    </div>
  );
};
