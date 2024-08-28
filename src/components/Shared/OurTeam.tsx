import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageTitleForHome from "./PageTitleForHome";

export default function OurTeam() {
  const teamMembers = [
    {
      image:
        "https://cscss.w3asolution.com/public/assets/frontend/images/temp/speaker_2.png",
      name: "John Doe",
      position: "CEO",
    },

    {
      image:
        "https://cscss.w3asolution.com/public/assets/frontend/images/temp/speaker_3.png",
      name: "Sam Wilson",
      position: "CFO",
    },
    {
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jane Smith",
      position: "CTO",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Emily Davis",
      position: "COO",
    },
  ];

  return (
    <>
      {" "}
      <div className="team-title section-title mt-24">
        <div className="mt-12">
          <PageTitleForHome title="Our Creative Team" />
        </div>

        <p className="text-center text-xl mt-2 mb-6">
          Tour function information without cross action media value
          <br />
          quickly maximize timely deliverables.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-20 mt-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="rounded-md overflow-hidden">
            <div
              className="w-full h-[400px] flex items-end group"
              style={{
                backgroundImage: `url(${member.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="p-2 w-96">
                <h3 className="text-xl text-center font-bold capitalize text-white mb-3 opacity-1 group-hover:opacity-0 duration-500">
                  {member.name}
                </h3>
                <div className="w-full bg-white rounded-md overflow-hidden max-h-0 group-hover:max-h-[300px] duration-700">
                  <div className="py-4">
                    <h3 className="text-xl text-center font-bold capitalize">
                      {member.name}
                    </h3>
                    <div className="capitalize text-center text-slate-500 text-[12px] px-2 mt-2 mb-2">
                      {member.position}
                    </div>
                    <div className="team-icons flex gap-1 text-white justify-center">
                      <Link to="/">
                        <span className="inline-block p-3  rounded-full bg-red-500 text-white">
                          <FaFacebook />
                        </span>
                      </Link>

                      <Link to="/">
                        <span className="inline-block p-3  rounded-full bg-red-500 text-white">
                          <FaTwitter />
                        </span>
                      </Link>
                      <Link to="/">
                        <span className="inline-block p-3  rounded-full bg-red-500 text-white">
                          <FaInstagram />
                        </span>
                      </Link>

                      <Link to="/">
                        <span className="inline-block p-3  rounded-full bg-red-500 text-white">
                          <FaLinkedin />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
