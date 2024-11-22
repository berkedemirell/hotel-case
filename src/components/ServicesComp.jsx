import { useState } from "react";
import { FaHouseChimneyMedical } from "react-icons/fa6";

const ServicesComp = () => {
  const [activeElement, setActiveElement] = useState(null);

  const SERVICES = [
    {
      id: 1,
      header: "Hotel Room Reservation into the Desire Places",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoodio dolor exercitationem natus qui dignissimos earum ab nam sequi, ipsam maxime quibusdam consectetur rem possimus.",
    },
    {
      id: 2,
      header: "Hotel Room Reservation into the Desire Places",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoodio dolor exercitationem natus qui dignissimos earum ab nam sequi, ipsam maxime quibusdam consectetur rem possimus.",
    },
    {
      id: 3,
      header: "Hotel Room Reservation into the Desire Places",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoodio dolor exercitationem natus qui dignissimos earum ab nam sequi, ipsam maxime quibusdam consectetur rem possimus.",
    },
    {
      id: 4,
      header: "Hotel Room Reservation into the Desire Places",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoodio dolor exercitationem natus qui dignissimos earum ab nam sequi, ipsam maxime quibusdam consectetur rem possimus.",
    },
    {
      id: 5,
      header: "Hotel Room Reservation into the Desire Places",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoodio dolor exercitationem natus qui dignissimos earum ab nam sequi, ipsam maxime quibusdam consectetur rem possimus.",
    },
    {
      id: 6,
      header: "Hotel Room Reservation into the Desire Places",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoodio dolor exercitationem natus qui dignissimos earum ab nam sequi, ipsam maxime quibusdam consectetur rem possimus.",
    },
  ];
  const getElement = (e) => {
    setActiveElement(e.target);
  };
  const deleteElement = () => {
    setActiveElement(null);
  };

  return (
    <div className="mt-24 mds:mt-12">
      <div className="flex flex-col items-center justify-center">
        <div>
          <p className="text-buttonColor uppercase">Servislerimiz</p>
        </div>
        <div className="w-1/2 text-center font-bold mt-2 ss:w-fit">
          <p className="text-4xl mds:text-3xl xss:text-2xl">
            Our Services on the Global Market for Our Client&lsquo;s Reservation
          </p>
        </div>
        <div className="flex items-center justify-start mt-4 overflow-hidden llg:w-cardOuter2 mmd:w-cardOuter3 mds:w-cardOuter4 xs:w-cardOuter5 mob:w-cardOuter6 relative w-1500">
          <div className="flex flex-row items-start justify-start gap-8">
            <div>
              <div>
                <button className="text-xl">&larr;</button>
              </div>
              <div>
                <button className="text-xl">&rarr;</button>
              </div>
            </div>
            {SERVICES.map((serv) => {
              return (
                <div
                  key={serv.id}
                  className={`border transition-all duration-500 border-slate-100 rounded-md w-1600 llg:w-cardImage2 mmd:w-cardImage3 xs:w-cardImage4 mds:w-cardImage2 mob:w-cardImage2 p-4 pl-6 pr-6 bg-cardColor flex flex-col gap-4 h-1/3 shadow-md ${
                    Number(activeElement?.id) === Number(serv?.id)
                      ? "bg-slate-50 shadow-lg"
                      : "shadow-md"
                  }`}
                  id={serv?.id}
                  onMouseEnter={getElement}
                  onMouseLeave={deleteElement}
                >
                  <div className="">
                    <button
                      className={` p-4 rounded-full transition-all duration-600 ${
                        Number(activeElement?.id) === Number(serv?.id)
                          ? "bg-cardColor"
                          : "bg-slate-50"
                      }`}
                    >
                      <span className="text-5xl text-buttonColor xss:text-4xl">
                        <FaHouseChimneyMedical />
                      </span>
                    </button>
                  </div>
                  <div className="">
                    <p className="text-2xl font-bold xss:text-xl">
                      {serv.header}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm tracking-wider leading-6 text-textColor">
                      {serv.content}
                    </p>
                  </div>
                  <div className="-mt-2">
                    <button className="text-buttonColor underline text-sm">
                      Get Service
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComp;
