import DesktopLayout from "./components/DesktopLayout";
import MobileLayout from "./components/MobileLayout";

const AboutUs = () => {
  return (
    <div className="lg:container mx-auto py-12  md:pl-10 lg:pl-12">
      <DesktopLayout />
      <MobileLayout />
    </div>
  );
};

export default AboutUs;
