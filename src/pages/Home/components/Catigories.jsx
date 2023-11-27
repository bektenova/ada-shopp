import livroom from "../../../assets/living-room.png";
import kit from "../../../assets/kitchen.png";
import bedroom from "../../../assets/bedroom.png";

function Catigories() {
  return (
    <div className="container mx-auto px-8 flex flex-col gap-y-4 md:flex-row md:gap-x-6 mb-12">
      <div
        style={{ "--image-url": `url(${livroom})` }}
        className="bg-[image:var(--image-url)] bg-[#F3f5F7] h-[377px]
      bg-center bg-no-repeat bg-contain p-8 flex-auto"
      >
        <h2>Living room</h2>
        <button className="btn border-b border-b-black"> Sing now →</button>
      </div>
      <div className="flex flex-col gap-y-4 flex-auto">
        <div
          style={{ "--image-url": `url(${kit})` }}
          className="bg-[image:var(--image-url)] bg-[#F3F5F7]  h-[180px]
      bg-center  bg-no-repeat bg-contain p-4"
        >
          <h2>Kitchen</h2>
          <button className="btn border-b border-b-black"> Sing now →</button>
        </div>
        <div
          style={{ "--image-url": `url(${bedroom})` }}
          className="bg-[image:var(--image-url)] bg-[#F3F5F7]  h-[180px]
      bg-center  bg-no-repeat bg-contain p-4"
        >
          <h2>Bed Room</h2>
          <button className="btn border-b border-b-black"> Sing now →</button>
        </div>
      </div>
    </div>
  );
}

export default Catigories;
