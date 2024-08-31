"use client";
import React, { useRef } from "react";
import "../styles/Contact.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const Contact = () => {
  const container = useRef();

  // useGSAP(
  //   () => {
  //     const t1 = gsap.timeline();
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: [".contact"],
  //           scroller: "body",
  //           start: "top 60%",
  //           end: "bottom 90%",
  //           // markers:true,
  //           scrub: 1,
  //         },
  //       })
  //       .from(".numbered__heading_04", {
  //         y: -20,
  //         opacity: 0,
  //         duration: 1.3,
  //       })
  //       .from(".container", {
  //         y: -50,
  //         opacity: 0,
  //         duration: 2,
  //         delay: "2",
  //         scrub: 1,
  //       })
  //       .from(
  //         [
  //           ".code",
  //           ".comment",
  //           ".about__para",
  //           ".indent",
  //           ".no-moblie",
  //           ".about__bras",
  //         ],
  //         {
  //           opacity: 0,
  //           y: -20,
  //           duration: 1,
  //           stagger: 1,
  //           delay: "1",
  //         }
  //       )
  //       .from(".content .button", {
  //         y: -30,
  //         opacity: 0,
  //         duration: 2,
  //         delay: "2",
  //         scrub: 1,
  //       })
  //       .from([".footer__content"], {
  //         y: -30,
  //         opacity: 0,
  //         duration: 2,
  //         scrub: 1,
  //         stagger: 1,
  //         delay: 2,
  //       });
  //   },
  //   { container }
  // );

  const closeTab = () => {
    // Add your logic here for closing the tab
    console.log("Close tab clicked");
  };

  return (
    <>
      <section ref={container} className="contact" id="contact">
        <div className="content">
          <h2 className="numbered__heading_04">
            <span>Contact Me</span>
          </h2>
        </div>
        <div id="headerwrap">
          <div className="container">
            <div className="row centered">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="code-editor">
                  <div className="top-bar">
                    <ul className="control">
                      <li className="button" onClick={closeTab}></li>
                      <li className="button"></li>
                      <li className="button"></li>
                    </ul>
                    <div className="file-path">
                      ~/Users/NIKET/portfolio_website
                    </div>
                  </div>
                  <ul className="line-numbers">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li className="no-mobile">15</li>
                    <li className="no-mobile">16</li>
                  </ul>
                  <div className="code">
                    <p className="comment">
                       Welcome to Portfolio website! 
                    </p>
                    <p className="about__para">
                      <span className="selector">#ABOUT</span>
                      &#123;
                    </p>
                    <p className="indent">
                      <span className="prop">name:</span>
                      Niket Deshmukh;
                    </p>
                    <p className="indent">
                      <span className="prop">location:</span>
                      Bhopal, India;
                    </p>
                    <div className="no-mobile">
                      <p className="indent">
                        <span className="prop">description:</span>A portfolio
                        showcasing expertise in web development, software
                        engineering, and GenAI projects, highlighting innovative
                        solutions, real-time projects;
                      </p>
                      <p className="indent">
                        <span className="prop">email:</span>
                        url(&#39;niketdeshmukh2002@gmail.com&#39;);
                      </p>
                    </div>
                    <p className="about__bras">{"}"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="text">
          <div className="button__resume">
         <Link href="mailto:niketdeshmukh2002@gmail.com" rel="noopener noreferrer" target="_blank"> <button>Say Hello</button></Link>
        </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
