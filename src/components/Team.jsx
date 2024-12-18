import React, { useState } from "react";
import { aboutUsData } from "../constants";
import { Linkedin, Twitter } from "lucide-react";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white mb-6 sm:mb-8">
          Meet Our Team
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {aboutUsData.team.map((member, index) => (
            <div 
              key={index}
              className="bg-neutral-800 rounded-xl shadow-lg p-4 sm:p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-neutral-700 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <img 
                src={member.image}
                alt={member.name}
                className="w-full aspect-square object-cover rounded-lg mb-4 hover:opacity-90 transition duration-300"
              />
              <h3 className="text-lg sm:text-xl font-bold text-white text-center">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-semibold text-center mb-4">
                {member.role}
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-orange-600 hover:text-white transition">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-orange-600 hover:text-white transition">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal/Popup */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-neutral-800 rounded-xl p-6 max-w-lg md:max-w-2xl lg:max-w-4xl w-full relative">
              <button 
                className="absolute top-4 right-4 text-neutral-400 hover:text-white"
                onClick={() => setSelectedMember(null)}
              >
                ✕
              </button>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <img 
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="text-neutral-300 font-semibold mb-2 md:text-lg lg:text-xl">
                    {selectedMember.role}
                  </p>
                  <p className="text-neutral-400 text-sm md:text-base lg:text-lg">
                    {selectedMember.bio}
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-orange-600 hover:text-white transition">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-orange-600 hover:text-white transition">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
