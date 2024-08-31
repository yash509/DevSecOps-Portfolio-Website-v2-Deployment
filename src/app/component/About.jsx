"use client";
import React, { useRef, useEffect } from "react";
import "../styles/About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });

      tl.fromTo(
        container.current.querySelector(".numbered__heading"),
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        }
      )
        .fromTo(
          container.current.querySelector(".right"),
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          "-=0.3"
        )
        .fromTo(
          container.current.querySelector(".skills-list"),
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          "-=0.2"
        ); // Adjusted delay to make skills list appear smoothly after the paragraphs
    }

    ScrollTrigger.refresh();
  }, []);

  return (
    <section ref={container} className="about" id="about">
      <div className="content">
        <h2 className="numbered__heading">
          <span>About Me</span>
        </h2>
        <div className="about-details">
          <div className="left">
            {/* <img src="images/about.jpg" alt="" /> */}
          </div>
          <div className="right">
            <p>
              Hello! My name is Niket Deshmukh, and I have a passion for web and
              software development. My journey in development started over three
              years ago, during which I have built real-time projects and gained
              valuable experience through internships.
            </p>
            <p>
              Fast-forward to today, and I&#39;ve had the privilege of working on
              <a href="" rel="noopener noreferrer" target="_blank">
                my own brand
              </a>{" "}
              ,
              <a href="" rel="noopener noreferrer" target="_blank">
                a start-up
              </a>
              , and an application for solving real world problems with AI.Recently, I&#39;ve been diving into GenAI projects, expanding my skills and exploring new frontiers in the tech world.
            </p>
            <p>
            My focus is on creating impactful and efficient solutions, and I&#39;m constantly learning and growing in this dynamic field.
            </p>
            <p>I&#39;m excited to continue pushing the boundaries of what&#39;s possible with technology and making meaningful contributions to the industry.</p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul className="skills-list">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Gsap</li>
              <li>Node.js</li>
              <li>Tree.js</li>
            </ul>
          </div>
          <div
            orientation="right"
            className="side__StyledSideElement-sc-1duznzb-0 ele__position"
          >
            <div className="email__StyledLinkWrapper-sc-2epoq-0 email__position fade-enter-done">
              <a href="mailto:niketdeshmukh2002@gmail.com">
                niketdeshmukh2002@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
