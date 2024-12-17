import React from "react";
import { FaRegHandshake, FaAward, FaUserTie } from "react-icons/fa"; // Core values icons
import { aboutUsData } from "../constants"; // Data from constants.js


const AboutUs = () => {
  return (
    <div className="py-20 px-20 bg-neutral-900 text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide mb-4">
          About <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">Cyberstream</span>
        </h2>
        <p className="text-lg text-neutral-400">{aboutUsData.header.description}</p>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">Our Mission</h3>
            <p className="text-lg text-neutral-400">{aboutUsData.missionVision.mission}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">Our Vision</h3>
            <p className="text-lg text-neutral-400">{aboutUsData.missionVision.vision}</p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h3 className="text-3xl font-semibold text-center text-white mb-8">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutUsData.coreValues.map((value, index) => {
            const Icon = value.icon === "FaRegHandshake" ? FaRegHandshake : value.icon === "FaAward" ? FaAward : FaUserTie;
            return (
              <div key={index} className="text-center bg-neutral-800 p-6 rounded-xl shadow-lg">
                <Icon className="text-4xl text-orange-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white">{value.title}</h4>
                <p className="text-md text-neutral-400">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Our Team Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h3 className="text-3xl font-semibold text-center text-white mb-8">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {aboutUsData.team.map((member, index) => (
            <div 
              key={index} 
              className="text-center bg-neutral-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-neutral-700"
            >
              <img
                src={member.image}
                alt={`${member.name}'s photo`}
                className="w-32 h-32 mx-auto rounded-full mb-4 hover:opacity-90 transition duration-300"
              />
              <h4 className="text-xl font-bold text-white">{member.name}</h4>
              <p className="text-neutral-300 font-semibold">{member.role}</p>
              <p className="text-neutral-400 mb-4">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-800 py-16 text-center text-white">
        <h3 className="text-3xl font-semibold mb-4">{aboutUsData.cta.title}</h3>
        <p className="text-lg mb-8">{aboutUsData.cta.description}</p>
        <a
          href={aboutUsData.cta.buttonLink}
          className="inline-block px-8 py-3  text-xl text-white font-semibold border hover:text-black transition  rounded-full hover:bg-white"
        >
          {aboutUsData.cta.buttonText}
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
