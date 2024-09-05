"use client"; 
import { useState, useEffect, Suspense, useRef } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import HorizontalCardCollection from '@/components/horizontalcardcollection'
import Earth from '@/public/Earth'
import Modal from '@/components/modal'
import Sidebar from '@/components/sidebar'
import TransparentPage from '@/components/transparent'
import Carousel from '@/components/carousel'
import { Vector3 } from 'three'; // Import Vector3 from three
import { CardBody, CardContainer, CardItem } from "@/components/3d-parallax";
import { product } from "@/components/data.json";

import '@/app/css/earth.css'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const cameraRef = useRef(); // Reference to the camera for zooming
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to map value to a new range
  const mapValue = (value, oldMin, oldMax, newMin, newMax) => {
    return ((value - oldMin) * (newMax - newMin) / (oldMax - oldMin)) + newMin;
  };

  const handleMouseClick = (event) => {
    let coord = [event.clientX, event.clientY];
    let mappedX = mapValue(coord[0], 690, 2500, 68, 97);
    let mappedY = mapValue(coord[1], 450, 2630, 38, 8);
    console.log(window.scrollY);
    if (mappedX > 65 && mappedY > 37 && window.scrollY < 400) {
      setModalOpen(true);
    }
  };


  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('click', handleMouseClick);

    return () => {
      window.removeEventListener('click', handleMouseClick);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
      <div className="canvas-background">
        <Canvas>
          <ambientLight />
          <OrbitControls ref={cameraRef} enableZoom={false} enablePan={false} />
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
          <Environment preset='night' />
        </Canvas>
      </div>
      <TransparentPage />    
      {/* Translucent content overlay */}
      <div className="content-overlay">
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
        <Hero />
        <Features />
        <Carousel />
        <Zigzag />
        <Zigzag />
        <HorizontalCardCollection />
        <Testimonials />
        <Newsletter />
      </div>
    </>
  )
}