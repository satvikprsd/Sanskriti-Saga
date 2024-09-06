import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useSpring } from '@react-spring/three';
import * as THREE from 'three';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/earth.gltf');
  const earthRef = useRef();
  const { camera } = useThree();
  const [hasZoomed, setHasZoomed] = useState(false);
  const prevScrollY = useRef(0); // Track the previous scroll position

  // Convert latitude and longitude to 3D coordinates on the sphere
  const latLongToVector3 = (lat, lon, radius = 1) => {
    const phi = (90 - lat) * (Math.PI / 180); // Latitude in radians
    const theta = (lon + 180) * (Math.PI / 180); // Longitude in radians

    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    return new THREE.Vector3(x, y, z);
  };

  // Set the target location for India
  const targetLat = 0;
  const targetLon = -100;

  // Convert the target location to 3D coordinates
  const targetPosition = latLongToVector3(targetLat, targetLon, 1.5);

  const minHeight = 0.4;

  // Add scroll-based rotation logic, but only after zoom animation has completed
  useEffect(() => {
    if (hasZoomed) { // Only add scroll listener after zoom animation
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const scrollDiff = currentScrollY - prevScrollY.current; 
        const rotationFactor = 0.001;

        if (earthRef.current) {
          // Rotate the Earth based on scroll direction and speed
          earthRef.current.rotation.y += scrollDiff * rotationFactor;
          earthRef.current.rotation.x += scrollDiff * 0.0001;
        }

        prevScrollY.current = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [hasZoomed]); // Run this effect only when hasZoomed changes

  // Rotation logic during initial animation
  useFrame(() => {
    if (!hasZoomed && earthRef.current && earthRef.current.rotation.y < 3.6) {
      earthRef.current.rotation.y += 0.02;
      earthRef.current.rotation.x += 0.0003; // Optional: Adjust x rotation slightly
    }
  });

  // Camera animation logic
  const [propsSpring, set] = useSpring(() => ({
    position: [0, 0, 5],
    config: { duration: 2000 },
  }));

  useEffect(() => {
    const rotationTimeout = setTimeout(() => {
      setHasZoomed(true); // Stop rotation logic and enable scroll rotation
      set({
        position: [
          Math.max(targetPosition.x, minHeight),
          Math.max(targetPosition.y, minHeight),
          Math.max(targetPosition.z, minHeight),
        ],
      });
    }, 2000);

    return () => clearTimeout(rotationTimeout);
  }, [set, targetPosition]);

  useFrame(() => {
    const [x, y, z] = propsSpring.position.get();
    camera.position.set(
      Math.max(x, minHeight),
      Math.max(y, minHeight),
      Math.max(z, minHeight)
    );
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={earthRef} {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} scale={1.128} />
    </group>
  );
}

useGLTF.preload('/earth.gltf');
