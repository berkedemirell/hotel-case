import img1 from "../images/oda1.jpg";
import img2 from "../images/oda2.jpg";
import img3 from "../images/oda3.jpg";
import img4 from "../images/oda4.jpg";
import img5 from "../images/room5.jpg";
import img6 from "../images/room6.jpg";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";

const RoomsComp = () => {

  const rooms = [
    {
      id: 1,
      type: 'Lüks Oda',
      price: 320,
      thumbnail: img1
    },
    {
      id: 2,
      type: 'Tek Kişilik Oda',
      price: 300,
      thumbnail: img2
    },
    {
      id: 3,
      type: 'İki Kişilik Oda',
      price: 350,
      thumbnail: img3
    },
    {
      id: 4,
      type: 'Aile Odası',
      price: 370,
      thumbnail: img4
    },
    {
      id: 5,
      type: 'Kral Dairesi',
      price: 270,
      thumbnail: img5
    },
    {
      id: 6,
      type: 'Ultra Lüks Oda',
      price: 270,
      thumbnail: img6
    }
  ]


  return (
    <div className="mt-24 sms:mt-4 bg-cardColor pt-24 sms:pt-10">
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <span className="text-buttonColor uppercase">Odalar</span>
          <p className="text-4xl font-bold mt-2 mds:text-3xl xss:text-2xl">
            Odalarımız ve Değerlendirmeler
          </p>
        </div>
        <div className="grid grid-cols-3 xss:grid-cols-1 gap-6 mob:p-12 mob:p-2 mob:gap-4 p-24 pt-10  sms:grid-cols-2">
          {rooms.map((room) => {
            return (

            <div className="outerDiv shadow-xl w-roomImage llg:w-roomImage2 mmd:w-roomImage3 sms:ml-auto sms:mr-auto xss:w-roomImage2" key={room.id}>
              <div className="h-roomImage w-roomImage overflow-hidden llg:w-roomImage2 llg:h-roomImage2 mmd:w-roomImage3 mmd:h-roomImage3 xss:w-roomImage2 xss:h-roomImage2">
                <img
                  src={room.thumbnail}
                  alt=""
                  className="hover:scale-105 h-roomImage w-roomImage llg:w-roomImage2 llg:h-roomImage2 transition-all duration-1000 mmd:w-roomImage3 mmd:h-roomImage3 xss:w-roomImage2 xss:h-roomImage2"
                />
              </div>
              <div className="bg-slate-50 p-6 mob:p-4 flex flex-row items-start justify-between">
                <div>
                  <div>
                    <p className="text-2xl mmd:text-xl font-bold sms:text-lg">{room.type}</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-buttonColor text-md">{room.price} / Gecelik</p>
                  </div>
                </div>
                <div className="">
                  <p className="flex flex-row mmd:text-sm text-buttonColor sms:text-xs">
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStarHalf />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            )
          })}
            </div>
          </div>
        </div>

  );
};

export default RoomsComp;
