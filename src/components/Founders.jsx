import { Linkedin, Twitter, Mail } from "lucide-react"; // Import social icons
import { founderProfiles } from "../constants"; // Replace `pricingOptions` with `founderProfiles`

const Profiles = () => {
  return (
    <div id="founders" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Meet Our Founders
      </h2>
      <div className="flex flex-wrap justify-center">
        {founderProfiles.map((profile, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-8 border border-neutral-700 rounded-xl text-center">
              <div class="w-30 h-30 mb-6">
                <img
                  src={profile.image}
                  alt={`${profile.name}'s photo`}
                  class="w-full h-full object-contain"
                />
              </div>

              <p className="text-2xl font-semibold mb-2">{profile.name}</p>
              <p className="text-lg text-orange-500 mb-4">{profile.title}</p>
              <p className="text-neutral-400 mb-6">{profile.bio}</p>
              <div className="flex justify-center space-x-4 mt-4">
                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="text-neutral-400 hover:text-orange-500" />
                  </a>
                )}
                {profile.twitter && (
                  <a
                    href={profile.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="text-neutral-400 hover:text-orange-500" />
                  </a>
                )}
                {profile.email && (
                  <a href={`mailto:${profile.email}`}>
                    <Mail className="text-neutral-400 hover:text-orange-500" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profiles;
