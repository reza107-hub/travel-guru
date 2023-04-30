import React from "react";
import Navbar from "./NavBar";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/vQBd5j0/Rectangle-1.png")`,
      }}
    >
      <div className="absolute top-0 right-0 left-0 z-10">
        <Navbar></Navbar>
      </div>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
