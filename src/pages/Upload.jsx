import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Upload = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    github: "",
    live: "",
    tech: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Please login first");
        return;
      }

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("github", formData.github);
      data.append("live", formData.live);
      data.append("tech", formData.tech);
      data.append("image", image);

      await axios.post(
        "https://backend-project-esou.onrender.com/api/projects",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );
      toast.success("Project uploaded successfully!");

      setFormData({
        title: "",
        description: "",
        github: "",
        live: "",
        tech: "",
      });

      setImage(null);
      setPreview("");
    } catch (error) {
      console.log(error);

      if (error.response?.status === 401) {
        toast.error("Session expired. Please login again.");
      } else {
        toast.error("Upload failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full lg:w-[35%] bg-[#111] p-5 rounded-2xl border border-white/10">
        <h1 className="text-xl font-bold mb-5">Upload Project</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image */}
          <div>
            <label className="block mb-2 text-sm font-semibold">
              Project Image
            </label>

            <input
              type="file"
              onChange={handleImage}
              className="w-full border border-white/20 p-3 rounded-lg"
              required
            />

            {preview && (
              <img
                src={preview}
                alt="preview"
                className="w-full h-40 object-cover rounded-xl mt-3"
              />
            )}
          </div>

          {/* Title */}
          <div>
            <label className="block mb-2 text-sm font-semibold">
              Project Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter project title"
              className="w-full bg-transparent border border-white/20 p-3 rounded-lg outline-none"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 text-sm font-semibold">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              placeholder="Project description"
              className="w-full bg-transparent border border-white/20 p-3 rounded-lg outline-none resize-none"
              required
            />
          </div>

          {/* Tech Stack */}
          <div>
            <label className="block mb-2 text-sm font-semibold">
              Tech Stack
            </label>

            <input
              type="text"
              name="tech"
              value={formData.tech}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB"
              className="w-full bg-transparent border border-white/20 p-3 rounded-lg outline-none"
              required
            />
          </div>

          {/* GitHub */}
          <div>
            <label className="block mb-2 text-sm font-semibold">
              GitHub Link
            </label>

            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="https://github.com/..."
              className="w-full bg-transparent border border-white/20 p-3 rounded-lg outline-none"
            />
          </div>

          {/* Live Preview */}
          <div>
            <label className="block mb-2 text-sm font-semibold">
              Live Preview Link
            </label>

            <input
              type="text"
              name="live"
              value={formData.live}
              onChange={handleChange}
              placeholder="https://yourproject.com"
              className="w-full bg-transparent border border-white/20 p-3 rounded-lg outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-semibold duration-300"
          >
            {loading ? "Uploading..." : "Upload Project"}
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </section>
  );
};

export default Upload;
