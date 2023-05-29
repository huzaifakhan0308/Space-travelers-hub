import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => (
  <div className="">

    <div className="homeTitle text-warning  fw-bolder bg-dark bg-opacity-75 text-center  border border-secondary border-5 rounded position-absolute top-50 start-50 translate-middle">
      <TypeAnimation
        cursor={false}
        sequence={['WELCOME TO', 2000, 'Space Travelers Hub', 2000]}
        speed={60}
        wrapper="h2"
        repeat={Infinity}
      />
    </div>
  </div>
);

export default Home;
