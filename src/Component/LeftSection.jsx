import flipkart from "../assets/flipkart.png"
import amazon from "../assets/amazon.png"

export default function LeftSection() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-[108px] leading-[95px] font-bold">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="font-bold text-[#5A5959] text-justify mt-2">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE
          <br />
          THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.
        </p>
      </div>
      <div className="flex gap-6">
        <button className="bg-[#D01C28] text-white font-bold text-xl py-2 px-3">
          Shop Now
        </button>
        <button className="border-[1px] border-black font-bold text-xl py-[6.8px] px-3">
          Category
        </button>
      </div>
      <div className="">
        <p>Also Available On</p>
        <div className="flex gap-4">
          <img src={flipkart} alt="flipcart" />
          <img src={amazon} alt="amazon" />
        </div>
      </div>
    </div>
  );
}
