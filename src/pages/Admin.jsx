import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [editProject, setEditProject] = useState(null);

  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    github: "",
    live: "",
    tech: "",
  });

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const fetchProjects = async () => {
    try {
      const res = await axios.get(
        "https://backend-project-esou.onrender.com/api/projects"
      );
      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProject = async (id) => {
    try {
      await axios.delete(
        `https://backend-project-esou.onrender.com/api/projects/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  const openEditModal = (project) => {
    setEditProject(project);

    setEditForm({
      title: project.title || "",
      description: project.description || "",
      github: project.github || "",
      live: project.live || "",
      tech: project.tech || "",
    });
  };

  const handleEditChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };

  const updateProject = async () => {
    try {
      await axios.put(
        `https://backend-project-esou.onrender.com/api/projects/${editProject._id}`,
        editForm,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEditProject(null);
      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/upload")}
            className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg font-semibold duration-300"
          >
            + Upload Project
          </button>

          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-semibold duration-300"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Projects */}
      <div className="grid gap-6">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-[#111] p-5 rounded-xl flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-bold">{p.title}</h2>
              <p className="text-gray-400">{p.description}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => openEditModal(p)}
                className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md font-semibold"
              >
                Edit
              </button>

              <button
                onClick={() => deleteProject(p._id)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#111] w-[90%] max-w-xl p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Edit Project</h2>

            <div className="space-y-4">
              <input
                type="text"
                name="title"
                value={editForm.title}
                onChange={handleEditChange}
                placeholder="Project Title"
                className="w-full p-3 bg-black border border-gray-700 rounded-md"
              />

              <textarea
                name="description"
                value={editForm.description}
                onChange={handleEditChange}
                rows="4"
                placeholder="Description"
                className="w-full p-3 bg-black border border-gray-700 rounded-md"
              />

              <input
                type="text"
                name="github"
                value={editForm.github}
                onChange={handleEditChange}
                placeholder="Github Link"
                className="w-full p-3 bg-black border border-gray-700 rounded-md"
              />

              <input
                type="text"
                name="live"
                value={editForm.live}
                onChange={handleEditChange}
                placeholder="Live Preview Link"
                className="w-full p-3 bg-black border border-gray-700 rounded-md"
              />

              <input
                type="text"
                name="tech"
                value={editForm.tech}
                onChange={handleEditChange}
                placeholder="Tech Stack"
                className="w-full p-3 bg-black border border-gray-700 rounded-md"
              />
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setEditProject(null)}
                className="px-5 py-2 bg-gray-600 rounded-md"
              >
                Cancel
              </button>

              <button
                onClick={updateProject}
                className="px-5 py-2 bg-green-600 hover:bg-green-700 rounded-md"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;