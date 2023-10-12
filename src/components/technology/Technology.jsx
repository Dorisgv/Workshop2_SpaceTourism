import React from 'react'
import '../../scss/Technology.scss';

const Technology = () => {
  return (
    <section className="container-technology">
      <div className="technology-title">
        <span>03</span>
        <p>Space Launch 101</p>
      </div>
      <div className="technology-wrapper">
        <div className="technology-left">
        <img src="src/components/technology/images/image-launch-vehicle-landscape.jpg" className="technology-landscape" alt="name" />
          <div className="tecnology-left-circles">
            <div className="technology-circle">
              <span>1</span>
            </div>
            <div className="technology-circle">
              <span>2</span>
            </div>
            <div className="technology-circle">
              <span>3</span>
            </div>
          </div>

          <div className="technology-center-content">
            <p className="technology-center-title">The terminology...</p>
            <h1>Launch Vehicle</h1>
            <p className='technology-center-description'>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>

        </div>
        <div className="technology-right-content">
          <img src="src/components/technology/images/image-launch-vehicle-portrait.jpg" alt="name-1" />
        </div>
      </div>
    </section>
  );
};

export default Technology