import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { workflowItems } from "../constants"; // New data for Cyberstream workflow

const Workflow = () => {
  return (
    <div id="workflow" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Our{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Streamlined Workflow 
        </span>
      </h2>
      <p className="text-lg text-neutral-400 text-center mt-4 mb-16">
        At Cyberstream, we take a collaborative, transparent, and results-driven approach to developing web applications, <br />training AI models, and ensuring cybersecurity for your business.
      </p>

      <div className="flex flex-wrap justify-center">
        <div className="pt-12 w-full lg:w-1/2">
          {workflowItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-orange-500 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl text-white">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="Cyberstream Workflow" className="rounded-xl shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
