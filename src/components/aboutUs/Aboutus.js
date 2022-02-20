import React from "react";
import { Link } from "react-router-dom";
import "./aboutus.css";
import data3 from "./Data3";
import data32 from "./Data32";
import Ourteam from "./Ourteam";
const Aboutus = () => {
  return (
    // <div className="aboutus">
    //   <div className="aboutus-about-section">
    //     <h1> About Us</h1>
    //     <div className="about">
    //       <div className="aboutus-img">
    //         <img height="300px" src="./subject/1.png" alt="subject" />
    //       </div>
    //       <div className="aboutus-text">
    //         <h2>
    //           Weekly Guidelines for Students in Asynchronous Online Courses
    //         </h2>
    //         <p>
    //           Nam liber tempor cum soluta nobis eleifend option congue nihil
    //           imperdiet doming id quod mazim placerat facer possim assum.
    //           legentis in iis qui facit eorum claritatem. Investigationes
    //           demonstraverunt lectores legere me lius quod ii legunt saepius.
    //         </p>
    //         <Link to="/subjects">
    //           <button>Discover More</button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="ourteam">
    //     <h3 className="ourteam-title">OUR TEAM</h3>
    //     <div className="ourteam-body">
    //       {data3.map((item, id) => (
    //         <Ourteam
    //           src={item.src}
    //           name={item.name}
    //           key={id}
    //           position={item.position}
    //         />
    //       ))}
    //     </div>
    //     <div className="ourteam-body2">
    //       {data32.map((item, id) => (
    //         <Ourteam
    //           src={item.src}
    //           name={item.name}
    //           key={id}
    //           position={item.position}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="landingpage-about">
      <div className="landingpage-about-img">
        <img src="./subject/1.png" alt="car" />
      </div>
      <div className="landingpage-about-text">
        <h3>About Us</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
