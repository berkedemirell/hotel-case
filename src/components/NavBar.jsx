import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import Logo from "../images/logo.png";
import { useState } from "react";

const NavBar = () => {
  const [isDropped, setIsDropped] = useState(false);

  const handleDropDown = () => {
    setIsDropped(!isDropped)
  };

  return (
    <div className="">
      <div className="flex flex-col">
        <div>
          <TopBar />
        </div>
        <div className="bg-slate-50">
          <div className="flex flex-row justify-between items-center p-6 pl-28 pr-28 mmd:pl-12 mmd:pr-12">
            <Link to='/'>
              <img src={Logo} alt="" className="w-36" />
            </Link>
            <div className="hidden mds:block relative">
              <button className="text-3xl rotate-90" onClick={handleDropDown}>|||</button>
              {isDropped && (
                <div className="flex flex-col gap-4 absolute z-10 -right-12 bg-slate-950 text-lg rounded-md w-screen p-4 text-slate-50">
                  <div className="border-b border-slate-50">
                    <Link to='/'>Ana Sayfa</Link>
                  </div>
                  <div className="border-b border-slate-50">
                    <Link to='/about'>Hakkımızda</Link>
                  </div>
                  <div className="border-b border-slate-50">
                    <Link>Sayfalar</Link>
                  </div>
                  <div className="border-b border-slate-50">
                    <Link>Servisler</Link>
                  </div>
                  <div className="border-b border-slate-50">
                    <Link>Blog</Link>
                  </div>
                  <div className="border-b border-slate-50">
                    <Link>Odalar</Link>
                  </div>
                  <div className="border-b border-slate-50">
                    <Link to='/contact'>İletişim</Link>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-row gap-10 mmd:gap-6 mds:hidden">
              <div>
                <Link to='/' className="">Ana Sayfa</Link>
              </div>
              <div>
                <Link to='/about'>Hakkımızda</Link>
              </div>
              <div>
                <Link>Sayfalar</Link>
              </div>
              <div>
                <Link>Servisler</Link>
              </div>
              <div>
                <Link>Blog</Link>
              </div>
              <div>
                <Link>Odalar</Link>
              </div>
              <div>
                <Link to='/contact'>İletişim</Link>
              </div>
            </div>
            <div className="mds:hidden">
              <Link to='/reservation' className="text-lg bg-buttonColor p-4 text-slate-50 rounded-md font-bold">
                Rezervasyon
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
