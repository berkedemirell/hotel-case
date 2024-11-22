import { FaHouse } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="bg-topNavBg">
      <div className="flex flex-row xs:flex-col xxxs:flex-row xs:gap-4 justify-between items-center p-2 pl-24 pr-24 text-slate-50 mds:pr-12 mds:pl-12">
        <div className="">
          <select className="bg-topNavBg font-bold ">
            <option className="font-bold">English</option>
            <option className="font-bold">Turkish</option>
            <option className="font-bold">Spanish</option>
            <option className="font-bold">Italian</option>
            <option className="font-bold">Arabic</option>
          </select>
        </div>
        <div className="flex flex-row items-center xxxs:items-start xxxs:gap-1 justify-center mds:text-sm xss:text-xs xxxs:flex-col">
          <div className="flex flex-row items-center justify-center gap-2">
          <span className="text-lg"><FaHouse/></span>
            <p>48400 Gümbet Bodrum, Türkiye</p>
          </div>
          <div className="ml-4 mr-4 xss:ml-2 xss:mr-2 xxxs:hidden">|</div>
          <div className="flex flex-row items-center jusyify-center gap-2">
            <span className="text-md"><FaPhone/></span>
            <p>+90 (252) 319 34 34</p>
          </div>
          <div className="ml-4 mr-4 xss:ml-2 xss:mr-2 xxxs:hidden">|</div>
          <div className="flex flex-row items-center jusyify-center gap-2">
            <span><FaEnvelope/></span>
            <p>info@royalasarlikbeach.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
