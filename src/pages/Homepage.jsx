import About from "../component/About";
import Footer from "../component/Footer";
import Herosection from "../component/Herosection";
import Project from "../component/Project";
import Services from "../component/Services";
import Stat from "../component/Stat";
import Testimonials from "../component/Testimonials";
import { FloatButton } from "antd";

const Homepage = () => {
  return (
    <div>
      <Herosection />
      <About />
      <Services />
      <Project />
      <Stat />
      <Testimonials />
      <Footer />
      <FloatButton.BackTop />
    </div>
  );
};

export default Homepage;
