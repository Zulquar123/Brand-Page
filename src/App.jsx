import LeftSection from "./Component/LeftSection";
import Navbar from "./Component/Navbar";
import RightSection from "./Component/RightSection";

export default function App() {

  return (
   
    <div>
      <Navbar />
      <div className="grid grid-cols-1  md:grid-cols-2 gap-2 w-[85%] m-auto">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}
