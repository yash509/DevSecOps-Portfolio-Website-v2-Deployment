// components/Loader.js
"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/Loader.css';

const Loader = () => {
  const preloaderRef = useRef(null);
  const mainContentRef = useRef(null);

  useEffect(() => {
    // GSAP animation for your signature logo
    gsap.fromTo(
      '#logo-animation',
      { opacity: 0 },
      { opacity: 1, duration: 2, repeat: -1, yoyo: true }
    );

    // Simulating the end of the preloader after the animation
    gsap.to(preloaderRef.current, {
      opacity: 0,
      duration: .1,
      delay: 4, // Adjust the delay to match your animation duration
      onComplete: () => {
        preloaderRef.current.style.display = 'none';
        mainContentRef.current.style.display = 'block';
        gsap.from(mainContentRef.current, { opacity: 0, duration: 1 });
        document.body.style.overflow = 'auto';

        // Explicitly remove the preloader after a short delay
        setTimeout(() => {
          if (preloaderRef.current.parentNode) {
            preloaderRef.current.parentNode.removeChild(preloaderRef.current);
          }
        }, 1000); // Adjust delay if needed to ensure preloader is fully hidden
      },
    });
  }, []);

  return (
    <>
      <div className="svg" ref={preloaderRef}>
      <svg className="raw_logo" id="splash" xmlns="http://www.w3.org/2000/svg" width="1076.514" height="176.731" viewBox="0 0 1076.514 176.731">
      <g id="signature" transform="translate(-318.714 -430.683)">
        <path id="Path_1" className="signature1" data-name="Path 1" d="M603.665,433.945s19.187,1.271,31.353,9c4.514,2.867,9.278,5.194,11.783,8.555a30.818,30.818,0,0,1,5.528,13.356s-1.523,13.044-7.869,24.453-17.513,21.185-17.513,21.185a293.345,293.345,0,0,1-29.3,22.153c-14.295,9.249-29.665,16.141-33.411,15.7,0,0-26.19,7.356-32.039-3.026-5.865-10.409,5.972-34.824,5.972-34.824l14.971-25.785s17.16-21.235,12.953-19.853-18.239,6.214-18.239,6.214l-34.824,18.239-35.954,21.185-51.815,34.824s-25.824,18.412-31.783,25.318,7.946,2.307,7.946,2.307" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_2" className="signature2" data-name="Path 2" d="M654.711,503.108a19.721,19.721,0,0,0-5.972,4.64,42.143,42.143,0,0,0-5.084,8.07" transform="translate(-6.9)" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_3" className="signature3" data-name="Path 3" d="M635.14,521.791s-9.17,10.562-6.456,14.083c1.156,1.5,5.037,3.046,8.756,2.784,4.314-.3,10.855-4.64,10.855-4.64s8.386-25.933,13.357-41.482c2.76-8.634,1.418-5.844,4.4-13.4,8.121-20.579,12.428-25.583,12.428-25.583s6.053-5.3,9.684-3.914a7.958,7.958,0,0,1,4.641,3.914s.1,11.581-2.542,19.369a134.763,134.763,0,0,1-7.828,17.311l-13.639,19.127-16.141,16.383s-8.07,16.1-7.142,15.656-13.841,37.366-13.841,37.366l5.77-5.528" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_4" className="signature4" data-name="Path 4" d="M669.318,531.032s.232-4.953-2.3-5.528-10.128,5.528-10.128,5.528l-7.869,4.156s-5.881,4.994-4.842,6.658,12.711,0,12.711,0a72.171,72.171,0,0,0,18.769-5.046,62.411,62.411,0,0,0,15.363-10.469" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_5" className="signature5" data-name="Path 5" d="M681.723,523.9s7.334-.715,11.247-2.9a8.6,8.6,0,0,0,4.405-5.839s-.127-3.927-2.276-5.112-6.321.373-6.321.373a24.557,24.557,0,0,0-8.231,8.411c-1.1,2-3.184,6.246-3.672,9.074-.679,3.921.476,5.775.476,5.775s.325,1.734,3.2,3.087a12.147,12.147,0,0,0,3.82,1.138c.376.051,1.639.009,2.463,0,.415,0,.423.011,1.067,0,6.1-.1,13.595-6.547,13.595-6.547L711.862,521l6.966-8.641,11.487-16.7,8.629-13.226,9.249-17.139s-25.276,64.393-33.658,99.29.565,38.875.565,38.875" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_6" className="signature6" data-name="Path 6" d="M690.224,487.9s2.622.59,1.054,1.924-7.206,2.793-7.206,2.793-12.523,1.818-19,1.989-6.9-1.3-6.9-1.3-2.051-6.494,40.7-10.064c2.565-.214,6.658-.645,9.814-.869,4.291-.305,13.687-1.455,19.247-1.793h0c44.565-2.328,101.246-1.554,101.246-1.554" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_7" className="signature7" data-name="Path 7" d="M872.937,469.542s10.142-8.451,11.516-7.6-6.022,10.988-6.022,10.988S854.22,522.5,846.149,546.707s0,23.063,0,23.063" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_8" className="signature8" data-name="Path 8" d="M755.948,591.281a544.1,544.1,0,0,0,81.418-11.205c24.1-5.183,53.575-14.185,74.31-22.69,62.111-21.449,95.976-48.05,95.976-48.05s26.174-17.71,26.943-36.379-35.653-27.83-35.653-27.83-17.493-7.046-63.6-3.735c-16.646,1.2-25.934,2.058-58.587,5.369s-72.1,14.617-72.1,14.617S757.282,471.87,776.434,487.3c1.956,2.638,7.341,4.362,11.019,4.78.774.088-.553-.164,0,0,3,.878,8.255,2.736,11.946,3.571,5.748,1.3,12.59,1.6,19.322,2.2,9.878.886,19.951-.533,32.054-1.181a187.2,187.2,0,0,0,52.489-10.8" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_9" className="signature9" data-name="Path 9" d="M1007.894,528.291s10.993-1.141,15.215-4.043,1.674-7.564,1.674-7.564-2.983-3.684-7.206-1.619-9.683,9.879-9.683,9.879-5.464,11.314,0,15.085a14.42,14.42,0,0,0,8.14,2.608c6.2.008,13.715-2.608,13.715-2.608s6.444-2.635,12.857-5.717c2.894-1.391,5.825-3.2,8.075-4.347,1.171-.6,5.4-3.043,6.4-3.6,3.161-1.741,1.609-.869,1.609-.869" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_10" className="signature10" data-name="Path 10" d="M1055.715,524.051s6.15-10.656,3.393-12.382c-1.075-.673-4.144-.639-6.98.564a31.937,31.937,0,0,0-7.44,4.917s-4.328,4.224-3.077,9.78,8.083,12.441,8.083,12.441,7.709,8.006,5.145,12.852-15.4,6.53-15.4,6.53-21.686,1.795-22.456-1.954,19.378-13.042,19.378-13.042,19.147-8.031,30.245-12.237,14.15-4.589,14.15-4.589" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_11" className="signature11" data-name="Path 11" d="M1071.253,523.836a126.157,126.157,0,0,0,14.693-17.279c6.923-9.911,8.4-13.72,13-22.365a137.606,137.606,0,0,0,13.408-40.2s.618-9.512-2.19-10.017-9.042,8-9.042,8-4.122,5.273-13.083,27.211-22.761,60.54-22.761,60.54-8.622,22.263-7.432,24,13.408-16.8,13.408-16.8,11.179-16,15.739-14.934,1.78,12.348,1.78,12.348-2.5,5.906,0,6.061,10.172-4.111,10.172-4.111,5.648-2.179,13.719-4.521,18.565-4.846,18.565-4.846" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_12" className="signature12" data-name="Path 12" d="M1122.68,514.436,1112.663,536.3s-4.267,8.237-2.331,7.262,5.892-7.262,5.892-7.262,5-9.243,10.653-18.649,11.953-18.974,11.953-18.974,4.934-6.99,6.287-5.256-1.526,12.193-1.526,12.193l-10.257,27.776s-3.956,8.152-2.5,8.392,6.7-9.127,6.7-9.127,2.674-3.91,4.775-6.612a45.18,45.18,0,0,1,3.631-4.2s4.111-3.617,5.482-1.54,0,9.847,0,9.847l-2.091,11.628" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_13" className="signature13" data-name="Path 13" d="M1162.2,517.866s-3.118,3.95-5.543,7.783a75.919,75.919,0,0,0-4.155,7.549s-4.188,7.965-2.291,8.694,10.174-4.966,10.174-4.966,3.066-2.316,5.635-4.682a25.312,25.312,0,0,0,4.347-5.593s-1.469,3.977-2.341,6.546a20.7,20.7,0,0,0-1,3.729s-1.469,7.988,3.344,5.635,13.284-12.323,13.284-12.323" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_14" className="signature14" data-name="Path 14" d="M1172.567,526.35a145.8,145.8,0,0,0,16.1-16.75c5.617-6.1,10.37-14.526,14.383-21.05,10.479-17.033,10.1-30.567,10.1-30.567s-.38-4.9-2.667-7.533c-1.811-2.094-5.478-1.956-8.583,0-6.312,3.975-14,23.433-14,23.433L1153.533,574.85s-2,5.917-.767,5.817,6.183-7.233,6.183-7.233" transform="translate(10)" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_15" className="signature15" data-name="Path 15" d="M1189.533,531.733s.208-5.687-3.533-5.9-11.433,5.05-11.433,5.05-11.317,7.787-10.1,10.383,14.967,0,14.967,0a69.482,69.482,0,0,0,17.617-4.767,54.93,54.93,0,0,0,14-9.617" transform="translate(12 -6)" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_16" className="signature16" data-name="Path 16" d="M1200.233,523.883s19.342-15.367,29.533-37.917c3.944-8.727,8.45-19.119,10.283-28.083.354-1.728,1.121-2.758,2-7.233a69.568,69.568,0,0,0,1.517-10.667c.164-6.3-2.567-6.3-2.567-6.3s-2.3.425-5.8,4.667a120.33,120.33,0,0,0-8.2,12.3s-6.842,13.413-16.483,39.317-22.083,64.3-22.083,64.3S1194,545.5,1199,538.833a128.3,128.3,0,0,1,9.433-11.233s6.775-6.329,9.8-5.233,1.917,9.417,1.917,9.417-1.533,7.883-.767,9.233,8.95-3.8,8.95-3.8,8.9-3.925,17.233-6.567a139.862,139.862,0,0,1,16.1-4" transform="translate(6)" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_17" className="signature17" data-name="Path 17" d="M1329.717,470.933l-36.483,67.9s-3.106,4.664-1.909,5.4,4.293-3.683,4.293-3.683" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_18" className="signature18" data-name="Path 18" d="M1381.715,510.3s13.1,9.343,10,12.844-17.1,9.465-17.1,9.465" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
        <path id="Path_19" className="signature19" data-name="Path 19" d="M335.738,511.425s-16.075,12.34-13.8,13.4,17.979,5.236,17.979,5.236" fill="none" stroke="#64ffda" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
      </g>
    </svg>
      </div>
      <div ref={mainContentRef} style={{ display: 'none' }}>
        {/* Your main content goes here */}
      </div>
    </>
  );
};

export default Loader;
