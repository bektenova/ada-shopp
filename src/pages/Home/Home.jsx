import Footer from "../../components/Footer/Footer";
import Article from "./Article";
import First from "./First";
import HeroText from "./Herotext";
import Services from "./Services";
import Discount from "./components/Discount";
import Link from "./components/Link";
// import Singlecard from "./components/SingleCard";

function Home() {
  return (
    <div className="  max-w-[1440px]  mx-auto  ">
      <First />
      <HeroText />
      {/* <Singlecard /> */}
      <Services />
      <Discount />
      <Article />
      <Link />
      <Footer />
    </div>
  );
}
export default Home;
