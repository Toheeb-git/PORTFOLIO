import TestimonialsProps from "./TestimonialsProps";

const Testimonials = () => {
  return (
    <section
      id="testimonial"
      className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-5 px-10 "
    >
      <TestimonialsProps
        Short="MJ"
        name="Michael Johnson"
        work="Startup Founder"
        star="⭐⭐⭐⭐⭐"
        text="Working with Toheeb was a fantastic experience. He understood our requirements quickly, delivered a clean, responsive website, and communicated throughout the entire project. I wouldn't hesitate to work with him again."
      />
      <TestimonialsProps
        Short="SW"
        name="Sarah Williams"
        work="UI/UX Designer"
        star="⭐⭐⭐⭐⭐"
        text="Toheeb transformed our designs into a pixel-perfect, responsive web application. His attention to detail and ability to build smooth user interfaces made the development process effortless."
      />
      <TestimonialsProps
        Short="DA"
        name="David Anderson"
        work="Small Business Owner"
        star="⭐⭐⭐⭐⭐"
        text="Our business needed a modern website that was both fast and easy to manage. Toheeb exceeded our expectations with a professional solution that improved our online presence and customer engagement."
      />
      <TestimonialsProps
        Short="EB"
        name="Emily Brown"
        work="Product Manager"
        star="⭐⭐⭐⭐⭐"
        text="Toheeb is reliable, skilled, and easy to collaborate with. He delivered our full-stack application on time, maintained clean code, and ensured every feature worked exactly as expected."
      />
    </section>
  );
};

export default Testimonials;
