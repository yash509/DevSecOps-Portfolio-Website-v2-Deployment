import About from "./component/About";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Project from "./component/Project";
import Slider from "./component/DemoSlider";
import DemoSlider from "./component/DemoSlider";
import dataSlider from "../app/data/slider-data.json"
export default function Home() {
//  const dataSlider = [
//     {
//       "id": 1,
//       "title": "ARE AWESOME",
//       "tagline": "NEXTJS 13 & SWIPER SLIDER",
//       "image": "/image1.jpg",
//       "buttons": [
//         {
//           "id": 1,
//           "text": "Roberto Nickson",
//           "link": "https://www.pexels.com/@rpnickson/",
//           "type": "btn-dark btn-circle"
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "title": "GIVE IT A SHOOT",
//       "tagline": "IF YOU LIKE IT",
//       "image": "/image2.jpg",
//       "buttons": [
//         {
//           "id": 1,
//           "text": "Julia M Cameron",
//           "link": "https://www.pexels.com/@julia-m-cameron/",
//           "type": "btn-dark btn-circle"
//         }
//       ]
//     }
//   ]
  
  return (
    <main className="main_component no-underline scroll-smooth p-0 m-0" >
      <Header/>
      <HeroSection/>
      <About/>
      <Experience/>
      <Project/>
      {/* <DemoSlider data={dataSlider}/> */}
      <Contact/>
    </main>
  );
}
