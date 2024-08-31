"use client";
import React, { useRef, useEffect } from "react";
import "../styles/Experience.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const container = useRef();

  // useEffect(() => {
  //   if (container.current) {
  //     gsap.from(".numbered__heading_02", {
  //       scrollTrigger: {
  //         trigger: ".numbered__heading_02",
  //         start: "top 80%",
  //         end: "bottom 60%",
  //         scrub: 1,
  //       },
  //       y: 20,
  //       opacity: 0,
  //       duration: 0.5,
  //     });

  //     gsap.from(".timeline-block", {
  //       scrollTrigger: {
  //         trigger: ".timeline-block",
  //         start: "top 90%",
  //         end: "bottom 70%",
  //         scrub: 1,
  //       },
  //       y: 20,
  //       opacity: 0,
  //       duration: 0.5,
  //       stagger: 0.2,
  //     });

  //     // You can add additional animations here if needed
  //   }
  // }, []);

  return (
    <section ref={container} id="experience-section" className="gap">
      <h2 className="numbered__heading_02">
        <span>My Experience</span>
      </h2>
      <div className="overlay-wrapper">
        <div className="fade-in">
          <div className="experience-wrapper">
            <div id="timeline">
              <div className="timeline-block">
                <div className="timeline-content">
                  <h2 className="position">Hostingspell | Grownix Ventures </h2>
                  <h3 className="company">
                    <a href="https://hostingspell.com/" target="_blank">
                      Internship
                    </a>
                  </h3>
                  <p className="job-desc">
                    I worked as a developer where I was responsible for
                    integrating APIs, developing and customizing WordPress
                    sites, and rigorously testing APIs to ensure seamless
                    functionality. I collaborated with the team remotely,
                    consistently meeting weekly deadlines and successfully
                    hitting key project checkpoints, which honed my time
                    management and problem-solving skills in a real-world
                    setting.
                  </p>
                </div>
                <div className="timeline-img">
                  <div className="sprite research"></div>
                </div>{" "}
                <span className="date">May - Jul 2022</span>
              </div>
              <div className="timeline-block">
                <div className="timeline-content">
                  <h2 className="position">CRTD Technologies</h2>
                  <h3 className="company">
                    <a href="http://www.crtd.in/" target="_blank">
                      Internship
                    </a>
                  </h3>
                  <p className="job-desc">
                    Spearheaded the development of a dynamic and user-friendly
                    website at CRTD, utilizing JavaScript to create an engaging
                    online platform.
                    <br />
                    Leveraged strong front-end development skills to design and
                    implement interactive features, ensuring a seamless and
                    visually appealing user experience.
                  </p>
                </div>
                <div className="timeline-img">
                  <div className="sprite academic"></div>
                </div>{" "}
                <span className="date">Oct - Nov 2022</span>
              </div>
              <div className="timeline-block">
                <div className="timeline-content">
                  <h2 className="position">SFR Medical</h2>
                  <h3 className="company">
                    <a href="https://sfrmedical.com/" target="_blank">
                      Internship
                    </a>
                  </h3>
                  <p className="job-desc">
                  Implemented security best practices and compliance standards
                    for GCP VM environments, enhancing data protection, also
                    implemented comprehensive monitoring solutions.
                    <br /> Conducted comprehensive testing, including functional
                    and user acceptance testing, to guarantee the robustness and
                    reliability of the web portal.
                  </p>
                </div>
                <div className="timeline-img">
                  <div className="sprite university"></div>
                </div>{" "}
                <span className="date">Aug - Oct 2023</span>
              </div>
              <div className="timeline-block">
                <div className="timeline-content">
                  <h2 className="position">Blue Stock</h2>
                  <h3 className="company">
                    <a href="https://bluestock.in/" target="_blank">
                      SDE Intern
                    </a>
                  </h3>
                  <p className="job-desc">
                  During my SDE internship at Bluestock, I contributed to developing scalable web applications, focusing on optimizing backend processes and enhancing user experience. 
                  <br />I collaborated closely with the engineering team, working on API development, debugging, and performance optimization. My work led to improved application efficiency and a smoother user interface.
                  </p>
                </div>
                <div className="timeline-img">
                  <div className="sprite university"></div>
                </div>{" "}
                <span className="date">Aug - Sep 2024</span>
              </div>
            </div>{" "}
            <i className="down-arrow"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
