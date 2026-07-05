import React, { useEffect, useState } from "react";
import axios from "axios";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch from backend
 const fetchProjects = async () => {
  try {
    const res = await axios.get(
      "https://backend-project-esou.onrender.com/api/projects"
    );

    console.log(res.data); // <-- Add this

    setProjects(res.data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-white">
        Loading projects...
      </div>
    );
  }

  return (
    <section id="project" className="px-10 py-20 text-white">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-10">
        Featured Projects
      </h1>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-[#111] border border-white/10 rounded-xl overflow-hidden hover:scale-105 duration-300"
          >

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5 space-y-3">

              <h2 className="text-xl font-bold">
                {project.title}
              </h2>

              <p className="text-sm text-gray-400">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-white/10 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-3">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm px-3 py-2 bg-purple-600 rounded"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="text-sm px-3 py-2 border border-white"
                >
                  Live
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;