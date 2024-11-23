import aboutImage from "../images/room.jpg";
import { FaHouseChimney } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AboutComp = () => {
  return (
    <div className="mt-24 mb-12 xs:mt-6">
      <div className="flex flex-row mds:flex-col items-center justify-center p-12 ss:p-6 sms:p-8 mds:pl-24 mds:pr-24">
        <div className="w-1/2 mds:w-fit flex">
          <div className="flex items-center justify-center relative">
            <img
              className="rounded-md w-3/4 mds:w-fit h-20 xss:h-10 z-10"
              src={aboutImage}
              alt=""
            />
            <div className="h-backGray mds:hidden w-1/2 bg-slate-200 absolute left-12 rounded-lg opacity-50"></div>
          </div>
        </div>
        <div className="w-1/2 mds:w-fit mds:mt-2">
          <div className="w-5/6 mds:w-fit">
            <span className="text-buttonColor uppercase">Hakkımızda</span>
            <h1 className="text-4xl mmd:text-3xl ss:text-xl font-bold mb-2 leading-snug">
              Asarlık Beach Otel, 351 Oda ve 850 yatak kapasitesi ile 5 Yıldızlı
              olarak faaliyet göstermektedir.
            </h1>
            <p className="text-md tracking-wider mb-4 text-textColor">
              Bodrum’un şehir gürültüsünden uzak ama eğlenceye bir o kadar yakın
              olan konumu, muhteşem Gümbet Koyu manzarası ve ruhunuzu
              dinlendiren mimarisi ile Royal Asarlık Beach Hotel, Bodrum’u
              yeniden keşfetmek isteyen siz değerli misafirlerimizi ağırlamaktan
              memnuniyet duymaktadır.
            </p>
            <div className="w-4/5 flex flex-col gap-4 xs:w-fit">
              <div className="flex flex-row items-center gap-6">
                <span className="text-5xl text-buttonColor ss:text-4xl">
                  <FaHouseChimney />
                </span>
                <div>
                  <p className="text-xl font-bold mb-1">Restoranlar</p>
                  <p className="text-sm tracking-wider text-textColor leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat quam consequuntur sequi velit pariatur at dolorem
                    eveniet impedit itaque modi?
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-6">
                <span className="text-5xl text-buttonColor ss:text-4xl">
                  <FaWifi />
                </span>
                <div>
                  <p className="text-xl font-bold mb-1">Wifi</p>
                  <p className="text-sm tracking-wider text-textColor leading-6 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit impedit quibusdam exercitationem tempora, corporis
                    nobis, laudantium debitis excepturi obcaecati aspernatur
                    possimus nisi aut id dolorum?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Link to='/about' className="bg-buttonColor text-slate-50 p-3 pl-8 pr-8 rounded-md ss:text-sm">
              Daha Fazlası
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
