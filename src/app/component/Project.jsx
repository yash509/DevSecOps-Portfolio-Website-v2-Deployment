import React from 'react'
import OtherProject from './OtherProject'
import '../styles/Project.css';
const Project = () => {
  return (
    <>
     <section className="services" id="skills">
    <div className="content">
      <h2 className="numbered__heading_03"><span>My Projects</span> </h2>
      <OtherProject/>
    </div>
  </section>

    </>
  )
}

export default Project