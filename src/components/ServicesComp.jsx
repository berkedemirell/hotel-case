import { useEffect, useState } from "react";
import { FaHouseChimneyMedical } from "react-icons/fa6";

const ServicesComp = () => {
  const [activeElement, setActiveElement] = useState(null);
  const [element, setElement] = useState(null)
  const [card, setCard] = useState(null)

  const [sampleDiv, setSampleDiv] = useState(null)

  const SERVICES = [
    {
      id: 1,
      header: "Resort Reservation Into a Suitable Place",
      content:
        "One can easily reserve a resorte room in a suitable place as you want. This will be able to make good feelings.",
    },
    {
      id: 2,
      header: "Wedding Hall Reservation in a Suitable Place",
      content:
        "Wedding hall reservation in a suitable place as you want. This will be able to make good feelings.",
    },
    {
      id: 3,
      header: "Book Now to Secure Availability Time Now",
      content:
        "You can easliy reserve a hotel room in a suitable place as you want. This will be able to make good feelings.",
    },
    {
      id: 4,
      header: "Hotel Room Reservation into the Desire Places",
      content:
        "You can easliy reserve a hotel room in a suitable place as you want. This will be able to make good feelings.",
    },
    {
      id: 5,
      header: "Resort Reservation Into a Suitable Place",
      content:
        "One can easliy resort a hotel room in a suitable place as you want. This will be able to make good feelings.",
    },
  ];
  const getElement = (e) => {
    setActiveElement(e.target);
  };
  const deleteElement = () => {
    setActiveElement(null);
  };

  useEffect(() => {
    let availableXWidth = document.getElementById("caro-div");
    let currentCard = document.getElementById("1")
    let sampleCard = document.getElementById("cardDiv")
    if (availableXWidth && currentCard) {
      setElement(availableXWidth);
      setCard(currentCard)
      setSampleDiv(sampleCard)
    }
  }, []);

  const nextSlide = () => {
    console.log('card offsetWidth',card.offsetWidth)
    const neededLength = Number(sampleDiv.offsetWidth) / 5
    console.log(neededLength)
    console.log('element offsetwidth',element.offsetWidth)
    console.log('element scrollLeft',element.scrollLeft)
    console.log('sample Div',sampleDiv.offsetWidth)
    if(element.scrollLeft > element.offsetWidth - card.offsetWidth) {
      element.scrollTo(0,0)
    } else {
      element.scrollTo(Number(Number(element.scrollLeft) + neededLength + 7),0)
    }
  }
  const previousSlide = () => {
    console.log('card offsetWidth',card.offsetWidth)
    const neededLength = Number(sampleDiv.offsetWidth) / 5
    console.log(neededLength)
    console.log('element offsetwidth',element.offsetWidth)
    console.log('element scrollLeft',element.scrollLeft)
    console.log('sample Div',sampleDiv.offsetWidth)
    if(true) {
      element.scrollTo(-Number(neededLength+7),0)
    } else {
      element.scrollTo(0,0)
    }
  }

  return (
    <div className="mt-24 mds:mt-12 relative">
      <div className="flex flex-col items-center justify-center">
        <div>
          <p className="text-buttonColor uppercase">Servislerimiz</p>
        </div>
        <div className="w-1/2 text-center font-bold mt-2 ss:w-fit">
          <p className="text-4xl mds:text-3xl xss:text-2xl">
            Our Services on the Global Market for Our Client&lsquo;s Reservation
          </p>
        </div>
        <div className="absolute left-32 top-20 flex flex-row gap-4">
          <div>
            <button className="text-xl" onClick={previousSlide}>&larr;</button>
          </div>
          <div>
            <button className="text-xl" onClick={nextSlide}>&rarr;</button>
          </div>
        </div>
        <div className="flex items-center justify-start mt-4 overflow-hidden llg:w-cardOuter2 mmd:w-cardOuter3 mds:w-cardOuter4 xs:w-cardOuter5 mob:w-cardOuter6 relative w-1500" id="caro-div">
          <div className="flex flex-row items-start justify-start gap-8" id="cardDiv">
            {SERVICES.map((serv) => {
              return (
                <div
                  key={serv.id}
                  className={`border transition-all duration-500 border-slate-100  rounded-md w-1600 llg:w-cardImage2 mmd:w-cardImage3 xs:w-cardImage4 mds:w-cardImage2 mob:w-cardImage2 p-4 pl-6 pr-6 bg-cardColor flex flex-col gap-4 h-1/3 shadow-md ${
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
