import Footer from "../../components/Footer/Footer";
import Article from "./Article";
import First from "./First";
import HeroText from "./Herotext";
import Services from "./Services";
import Discount from "./components/Discount";
import Link from "./components/Link";
import Catigories from "./components/Catigories";
import ProductList from "../../components/ProductsList/ProductsList";

function Home() {
  return (
    <div className="  max-w-[1440px]  mx-auto  ">
      <First />
      <HeroText />
      <Catigories />
      <ProductList />
      <Services />
      <Discount />
      <Article />
      <Link />
      <Footer />
    </div>
  );
}
export default Home;
