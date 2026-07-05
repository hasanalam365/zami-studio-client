import { Helmet } from "react-helmet-async";
import Contact from "../Contact/Contact";
import Testimonial from "../Testimonial/Testimonial";
import ServicesCategories from "../ServicesCategories";
import StatsSection from "../StatsSection";
import ExplorerServices from "../ExplorerService/ExplorerServices";
import Sliders from "../Banner/Sliders";
import PricePlans from "../PricePlan/PricePlans";
import MainAccordion from "../Accordion/MainAccordion";
import RecentWork from "../RecentWork/RecentWork";
// import WorkProcess from "../WorkProcess/WorkProcess";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Zami Studio</title>
      </Helmet>

      <Sliders />

      {/* Main Container */}
      <div className="">
        <StatsSection />
        <ServicesCategories />
        <PricePlans />
        <MainAccordion />
        <ExplorerServices />
        {/* <WorkProcess /> */}
        <RecentWork></RecentWork>
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
