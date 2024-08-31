import React from "react";
import "../styles/Project.css";
import Image from "next/image";
import Link from "next/link";

import { SocialIcon } from "react-social-icons";
const socialLinks = [
  {
    url: "https://github.com/Niketdeshmukh",
    externalUrl: "https://techfest-frontend.vercel.app/",
    fgColor: "#64FFDA",
    style: { width: "2.5rem", marginRight: "-3rem" },
  },
  {
    url: "https://github.com/Niketdeshmukh/Chat-App",
    externalUrl: "https://chatwithfriend.netlify.app/",
    fgColor: "#64FFDA",
    style: { width: "2.3rem", marginRight: "-3rem" },
  },
  {
    url: "https://github.com/Niketdeshmukh/portfolio",
    externalUrl: "https://portfolio.com",
    fgColor: "#64FFDA",
    style: { width: "2.3rem", marginRight: "-3rem" },
  },
  {
    url: "https://github.com/Niketdeshmukh/Resume-Maker",
    externalUrl: "http://resume-maker-kappa.vercel.app/",
    fgColor: "#64FFDA",
    style: { width: "2.3rem", marginRight: "-3rem" },
  },
  {
    url: "https://github.com/Niketdeshmukh/Codebite",
    externalUrl: "https://codebite.vercel.app/",
    fgColor: "#64FFDA",
    style: { width: "2.3rem", marginRight: "-3rem" },
  },
];
const OtherProjects = () => {
  return (
    <>
      <section className="section other-projects" data-sr-id="5" id="projects">
        <div className="section__title">Projects</div>
        <div className="section__content">
          <div className="project">
            <div className="project__name">
              {" "}
              <a
                href="https://techfest-frontend.vercel.app/"
                target="_blank"
                className="arrow__link"
              >
                Tech Fest Website
              </a>{" "}
            </div>
            <div className="hello_world"
            style={{display:'flex'
              ,flexDirection:'column'
            }}>
              
              <Image
                src="/techfest.png"
                width={400}
                height={400}
                alt=""
                style={{ margin: "20px 0 20px 0px" }}
              ></Image>
              <div
                className="social_icons"
                style={{
                  // marginRight: "3rem",
                  // gap: "0.2rem !important",
                  // marginLeft: "auto",
                }}
              >
                <ul
                  className=" flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0"style={{ gap: "1.7rem" }}
                >
                  <li>
                    <SocialIcon
                      url={socialLinks[0].url}
                      bgColor="transparent"
                      fgColor="#64FFDA"
                      style={socialLinks[0].style}
                    />{" "}
                  </li>
                  <li>
                    {" "}
                    <SocialIcon
                      url={socialLinks[0].externalUrl}
                      bgColor="transparent"
                      fgColor="#64FFDA"
                      style={socialLinks[0].style}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <p>
              Techfizz Website is a comprehensive platform for our college’s
              annual tech fest, our team has built using React.js, node.js,
              MongoDB and vercel for reliable and scalable hosting.
            </p>
            <p>
              Over <a href="">100+ students</a> registered and made payment.
            </p>

            <div className="project__used">
              {" "}
              <span className="project__used__item">JavaScript</span>{" "}
              <span className="project__used__item">React</span>{" "}
              <span className="project__used__item">React Router</span>{" "}
              <span className="project__used__item">Axios</span>{" "}
              <span className="project__used__item">Mongo DB</span>{" "}
            </div>
          </div>
          <div className="project">
            <div className="project__name">
              {" "}
              <a
                href="https://chatwithfriend.netlify.app/"
                target="_blank"
                className="arrow__link"
              >
                Chat Application
              </a>{" "}
            </div>
            <div
              style={{display:'flex'
                ,flexDirection:'column'
              }}
            >
              <Image
                src="/chatapp.png"
                width={400}
                height={400}
                alt=""
                style={{ margin: "20px 0 20px 0px" }}
              ></Image>
              <div
                className="social_icons"
                style={{
                  // color: "#007bff",
                  // width: "2.5rem",
                  // display: "flex",
                  // flexDirection: "row",
                  // float: "right",
                  // marginRight: "3rem",
                  // gap: "0.5rem !important",
                  // marginLeft: "auto",
                }}
              >
                <ul
                  className=" flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0"
                  style={{ gap: "1.7rem" }}
                >
                  <li>
                    <SocialIcon
                      url={socialLinks[1].url}
                      bgColor="transparent"
                      fgColor="#64FFDA"
                      style={socialLinks[1].style}
                    />{" "}
                  </li>
                  <li>
                    {" "}
                    <SocialIcon
                      url={socialLinks[1].externalUrl}
                      bgColor="transparent"
                      fgColor="#64FFDA"
                      style={socialLinks[1].style}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <p>
              {" "}
              It is a chat application that facilitates seamless communication
              among friends, This application, built using React.js,
              Chatengine.io API, HTML, CSS, and JavaScript, enables users to
              chat with friends, create groups, and manage their friend list
              through secure user authentication. Integrated Chatengine.io API
              for real-time chat functionality, enabling users to exchange
              messages with friends.
            </p>
            <p>
              Designed and implemented a responsive user interface that ensured
              optimal user experience across various devices and screen sizes
            </p>
            <div className="project__used">
              {" "}
              <span className="project__used__item">React</span>{" "}
              <span className="project__used__item">HTML</span>{" "}
              <span className="project__used__item">CSS</span>{" "}
              <span className="project__used__item">JavaScript</span>{" "}
              <span className="project__used__item">Chatengine.io</span>{" "}
            </div>
          </div>
          <div className="project">
            <div className="project__name">
              {" "}
              <a href="" target="_blank" className="arrow__link">
                Portfolio Website
              </a>{" "}
            </div>
            <div
              style={{display:'flex'
                ,flexDirection:'column'
              }}
            >
              <Image
                src="/portfolio.png"
                width={400}
                alt=""
                height={400}
                style={{ margin: "20px 0 20px 0px" }}
              ></Image>
              <div
                className="social_icons"
                style={{
                  // color: "#007bff",
                  // width: "2.5rem",
                  // display: "flex",
                  // flexDirection: "row",
                  // float: "right",
                  // marginRight: "3rem",
                  // gap: "0.5rem !important",
                  // marginLeft: "auto",
                }}
              >
                <ul
                  className=" flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0"
                  style={{ gap: "1.7rem" }}
                >
                  <li>
                    <SocialIcon
                      url={socialLinks[2].url}
                      bgColor="transparent"
                      fgColor="#64FFDA"
                      style={socialLinks[2].style}
                    />{" "}
                  </li>
                  <li>
                    {" "}
                    <SocialIcon
                      url={socialLinks[2].externalUrl}
                      bgColor="transparent"
                      fgColor="#64FFDA"
                      style={socialLinks[2].style}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Design personal website from scratch.Used designing tools such as
              Figma.
              <br /> Implemented best practices such as mininized the bundle
              size.
            </p>
            <div className="project__used">
              {" "}
              <span className="project__used__item">HTML</span>{" "}
              <span className="project__used__item">CSS</span>{" "}
              <span className="project__used__item">JavaScript</span>{" "}
              <span className="project__used__item">Next.js</span>{" "}
              <span className="project__used__item">GSAP</span>{" "}
              <span className="project__used__item">Three.js</span>{" "}
            </div>
          </div>
          <div className="project">
            <div className="project__name">
              {" "}
              <a
                href="http://brittanychiang.com/react-profile/"
                target="_blank"
                className="arrow__link"
              >
                Resume Builder
              </a>{" "}
              <div
                style={{display:'flex'
                  ,flexDirection:'column'
                }}
              >
                <Image
                  src="/resume.png"
                  width={400}
                  height={400}
                  alt=""
                  style={{ margin: "20px 0 20px 0px" }}
                ></Image>
                <div
                  className="social_icons"
                  style={{
                    // color: "#007bff",
                    // width: "2.5rem",
                    // display: "flex",
                    // flexDirection: "row",
                    // float: "right",
                    // marginRight: "3rem",
                    // gap: "0.5rem !important",
                    // marginLeft: "auto",
                  }}
                >
                  <ul
                    className=" flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0"
                    style={{ gap: "1.7rem" }}
                  >
                    <li>
                      <SocialIcon
                        url={socialLinks[3].url}
                        bgColor="transparent"
                        fgColor="#64FFDA"
                        style={socialLinks[3].style}
                      />{" "}
                    </li>
                    <li>
                      {" "}
                      <SocialIcon
                        url={socialLinks[3].externalUrl}
                        bgColor="transparent"
                        fgColor="#64FFDA"
                        style={socialLinks[3].style}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p>
              Developed a responsive resume builder using React, HTML, CSS, and
              Bootstrap. The application provides an intuitive interface for
              users to easily create and customize resumes with real-time
              previews, simplifying the resume creation process.
            </p>
            <div className="project__used">
              {" "}
              <span className="project__used__item">JavaScript</span>{" "}
              <span className="project__used__item">React</span>{" "}
              <span className="project__used__item">Bootstrap</span>{" "}
              <span className="project__used__item">CSS</span>{" "}
            </div>
          </div>
          <div className="project">
            <div className="project__name">
              {" "}
              <a href="" target="_blank" className="arrow__link">
                Handyy Craft Website
              </a>{" "}
            </div>
            <div
              style={{display:'flex'
                ,flexDirection:'column'
              }}
            >
              <Image
                src="/handyy.png"
                width={400}
                height={400}
                alt=""
                style={{ margin: "20px 0 20px 0px" }}
              ></Image>
              <div
                className="social_icons"
                style={{
                  // color: "#007bff",
                  // width: "2.5rem",
                  // display: "flex",
                  // flexDirection: "row",
                  // float: "right",
                  // marginRight: "3rem",
                  // gap: "0.5rem !important",
                  // marginLeft: "auto",
                }}
              >
                <ul
                  className=" flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0"
                  style={{ gap: "1.7rem" }}
                >
                  <li>
                    <SocialIcon
                      url={socialLinks[4].url}
                      bgColor="transparent"
                      fgColor="#64FFDA"
                      style={socialLinks[4].style}
                    />{" "}
                  </li>
                  <li>
                    {" "}
                    <SocialIcon
                      url={socialLinks[4].externalUrl}
                      bgColor="transparent"
                      fgColor="#64FFDA"
                      style={socialLinks[4].style}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Created Handyy a React.js-based website for handcrafters and
              art workers to collectively showcase their art. Built with HTML,
              CSS, and React.js, the platform offers a dedicated space for
              artists to increase visibility of their creations.
            </p>
            <div className="project__used">
              {" "}
              <span className="project__used__item">JavaScript</span>{" "}
              <span className="project__used__item">React</span>{" "}
              <span className="project__used__item">HTML</span>{" "}
              <span className="project__used__item">CSS</span>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtherProjects;
