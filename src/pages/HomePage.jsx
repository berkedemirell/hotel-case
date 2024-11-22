import AboutComp from "../components/AboutComp";
import CheckArablity from "../components/CheckArablity";
import QuestionsComp from "../components/QuestionsComp";
import RoomsComp from "../components/RoomsComp";
import ServicesComp from "../components/ServicesComp";
import Specialty from "../components/Specialty";
import StickyBottomBar from "../components/StickyBottomBar";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-home-image2 bg-no-repeat  bg-center bg-cover h-screen relative">
        <div className=" text-slate-50 w-1/3 mmd:w-1/2 h-auto translate-x-4 translate-y-48 xs:translate-y-12 xs:w-2/3 ss:w-4/5 mds:ml-auto mds:mr-auto mds:translate-x-0 llg:translate-x-8 mmd:translate-x-24 llg:translate-y-32 p-6 rounded-md bg-buttonColor opacity-90">
          <p className="text-5xl llg:text-4xl text-center font-bold ss:text-3xl">
            Bizimle Bodrum&lsquo;da İnanılmaz Bir Tatil Yaşayın
          </p>
          <p className="text-center text-md llg:text-sm font-bold mt-2 font-bold ss:text-xs">
            Bodrum şehir merkezine 3 km, havaalanına 35 km uzaklıkta Gümbet
            Koyu’ na hakim bir noktada kurulu şehir gürültüsünden uzak ama
            eğlenceye bir o kadar yakın modern mimarisi ile dikkat çeken Royal
            Asarlık Beach tatil beklentilerinizi sonuna kadar
            gerçekleştirebilmeyi amaçlamaktadır.
          </p>
          <div className="flex justify-end mt-2">
            <button className="bg-slate-50 text-slate-950 p-2 ss:p-1 ss:text-sm rounded-md font-bold hover:bg-slate-950 hover:text-slate-50">
              İletişime Geç &rarr;
            </button>
          </div>
        </div>
        <StickyBottomBar/>
        <div className="xs:hidden">
          <CheckArablity />
        </div>
      </div>
      <div className="hidden xs:block">
        <CheckArablity/>
      </div>
      <AboutComp />
      <ServicesComp />
      <Specialty />
      <RoomsComp />
      <QuestionsComp />
    </div>
  );
};

export default HomePage;
