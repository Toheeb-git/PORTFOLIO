import ServiceProps from "./ServiceProps";
import photo1 from "../assets/nodephoto.avif";
import photo2 from "../assets/reactphoto.avif";
import photo3 from "../assets/service-01.jpg"



const Services = () => {

  return (
    <section id="service" className="px-10 py-20 mt-24 lg:mt-0 ">
      <hr className="mb-5" />
      <h1 className="text-5xl mb-8 font-bold">Services</h1>

      <div>
        <ServiceProps
          id="01"
          title="Frontend"
          desc="I build modern, responsive, and user-focused web interfaces that combine clean design with smooth functionality. From landing pages to full web applications, I create frontend experiences that are fast, visually engaging, and optimized across all devices."
          li1="Responsive websites for mobile, tablet, and desktop"
          li2="Interactive UI with React, Tailwind CSS, and modern animations"
          li3="Clean layouts focused on performance and user experience"
          image={photo2}
        />

        <hr className="mb-10" />

        <ServiceProps
          id="02"
          title="Backend"
          desc="I develop secure, scalable, and efficient backend systems that power modern web applications. Using Node.js, PHP, and Laravel, I build APIs, authentication systems, databases, and server-side logic that ensure smooth performance and reliable functionality."
          li1="RESTful API development with Node.js, PHP, and Laravel"
          li2="Database management, authentication, and server-side logic"
          li3="Secure and scalable backend architecture for web applications"
          image={photo1}
        />
        <hr className="mb-10" />
        <ServiceProps
          id="03"
          title="Git & Version Control"
          desc="I use Git and modern version control workflows to manage projects efficiently, track changes, and collaborate seamlessly during development. This helps maintain clean codebases, organized project history, and smooth deployment processes."
          li1="Git workflow management with GitHub and version control best practices"
          li2="Branching, merging, and collaborative development handling"
          li3="Clean project tracking, code management, and deployment support"
          image={photo3}
        />
      </div>
    </section>
  );
};

export default Services;
