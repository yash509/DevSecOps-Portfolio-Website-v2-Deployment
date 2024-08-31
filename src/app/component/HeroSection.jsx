"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { useGSAP } from '@gsap/react'; 
import '../styles/HeroSection.css';

const HeroSection = () => {
  const container = useRef();

  useGSAP(() => {
    const t1 = gsap.timeline();
    
      t1.from(".text .text__one", {
        opacity: 0,
        y: 20,
        delay:4.7
      })
      .from(".text .text__two", {
        opacity: 0,
        y: 20,
        duration: 0.2,
      })
      .from(".text .text__down", {
        opacity: 0,
        y: 20,
        duration: 0.2,
      })
      .from(".ele__position", {
        opacity: 0,
        y: 20,
        duration: 0.2,
      })
      .from(".text .text__three", {
        opacity: 0,
        y: 20,
        duration: 0.2,
      })
      .from(".text .text__four", {
        opacity: 0,
        y: 20,
        duration: 0.2,
      })
      .from(" .button__resume", {
        opacity: 0,
        y: 20,
        duration: 0.2,
      });
  }, { scope: container });

  return (
    <section ref={container} className="home" id="home">
      <div className="home-content ds-fl js-c">
        <div className="text">
          <div className="text__one">Hi, my name is</div>
          <div className="text__two" style={{fontWeight:'700'}}>Niket Deshmukh.</div>
          <div className="text__down">I build things for the web</div>
          <div className="text__three">Web developer</div>
          <div className="text__four">From India</div>
        </div>
        <div className="button__resume">
         <Link href="./Niketdeshmukh.pdf"> <button>Resume</button></Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
