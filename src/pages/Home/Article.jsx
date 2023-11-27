import img11 from "../../assets/img(11).png";
import img2 from "../../assets/img (2).png";
import img1 from "../../assets/img (1).png";

function Article() {
  return (
    <div className="py-8 ">
      <div className=" container mx-auto px-8 flex justify-between py-[30px]">
        <h1 className="  flex justify-start  text-3xl font-medium ">
          Articles
        </h1>
        <h2 className=" underline  flex justify-end ">More Articles → </h2>
      </div>
      <div className=" container mx-auto px-8 flex flex-wrap items-stretch justify-center gap-y-6 md:flex md:gap-x-6 md:justify-center text-sm font-medium">
        <nav>
          <img src={img11} alt="" />
          <h2>7 ways to decor your home</h2>
          <button className="underline">Read More →</button>
        </nav>
        <nav>
          <img src={img1} alt="" />
          <h2>7 Kitchen organization</h2>
          <button className="underline">Read More →</button>
        </nav>
        <nav>
          <img src={img2} alt="" />
          <h2>Decor your bedroom</h2>
          <button className="underline">Read More →</button>
        </nav>
      </div>
    </div>
  );
}
export default Article;
