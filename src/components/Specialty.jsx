import Image from "../images/specialtyImage.jpg";
import { FaBraille } from "react-icons/fa6";
import { FaWineGlass } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const Specialty = () => {
  return (
    <div className="mt-24 xs:mt-12">
      <div className="flex flex-col items-center justify-center">
        <div className="xs:w-1/2 ss:w-fit">
          <p className="text-buttonColor text-center uppercase">Uzmanlık</p>
          <p className="text-4xl xss:text-2xl text-center font-bold mt-2 mds:text-3xl">
            Our Specialization Sectors & All of the Other Details
          </p>
        </div>
      </div>
      <div className="flex flex-row xs:flex-col mt-10 items-center gap-10 justify-center">
        <div className="w-1/2 xs:w-3/4 flex items-center justify-center">
          <img src={Image} alt="" className=" h-24 xss:h-10 mmd:h-20 rounded-3xl"/>
        </div>
        <div className="w-1/3 xs:w-3/4">
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-row items-center justify-start gap-6 bg-cardColor p-4 rounded-xl pt-8 pb-8">
              <div className="bg-slate-50 p-4 rounded-full mds:p-2"><span className="text-5xl mmd:text-4xl mds:text-3xl text-buttonColor"><FaBraille/></span></div>
              <div>
                <div><p className="text-2xl mmd:text-xl font-bold">Well Decoration</p></div>
                <div><p className="text-md mds:text-sm">We are very careful about our room and all of the resort decorations. So, try us.</p></div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-6 bg-cardColor p-4 rounded-xl pt-8 pb-8">
              <div  className="bg-slate-50 p-4 mds:p-2 rounded-full"><span className="text-5xl mmd:text-4xl mds:text-3xl text-buttonColor"><FaWineGlass/></span></div>
              <div>
                <div><p className="text-2xl mmd:text-xl font-bold">Luxury Bar</p></div>
                <div><p className="text-md mds:text-sm">You can easily enjoy free access to a superstar bar at a reasonable price.</p></div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-6 bg-cardColor p-4 rounded-xl pt-8 pb-8">
              <div  className="bg-slate-50 p-4 mds:p-2 rounded-full"><span className="text-5xl mmd:text-4xl text-buttonColor mds:text-3xl"><FaStar/></span></div>
              <div>
                <div><p className="text-2xl mmd:text-xl font-bold">5 Stars Rettings</p></div>
                <div><p className="text-md mds:text-sm">Atoli is a Well Known Agency and the Agency is One of the Best by 5 Star Retting.</p></div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialty;
