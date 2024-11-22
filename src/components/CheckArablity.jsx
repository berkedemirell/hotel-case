import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const CheckArablity = () => {
  const [guestNumber, setGuestNumber] = useState(1);

  const increaseGuestNumber = () => {
    setGuestNumber((prev) => prev + 1);
  };
  const decreaseGuestNumber = () => {
    if (guestNumber >= 2) {
      setGuestNumber((prev) => prev - 1);
    } else {
      return;
    }
  };

  const handleGuestNumber = (e) => {
    setGuestNumber(Number(e.target.value));
  };

  return (
    <div className="bg-slate-100 h-auto w-1/2 absolute xs:relative xs:bottom-0 xs:block mmd:w-3/4 xs:mt-4 xxxs:w-fit -bottom-12 rounded-md p-4 left-24">
      <div className="flex flex-row xs:flex-col items-center gap-12 lg:gap-4 xs:items-start items-center justify-center">
        <div className="flex flex-col items-center xs:items-start justify-center gap-2 xs:ml-auto xs:mr-auto">
          <div>
            <label className="uppercase text-sm font-bold">Check in Time</label>
          </div>
          <div>
            <input
              type="date"
              id="date"
              className="border rounded-md p-1 xs:w-80 mmd:p-0 border-slate-950"
            />
          </div>
        </div>
        <div className="flex flex-col items-center xs:items-start justify-center gap-2 xs:ml-auto xs:mr-auto">
          <div className="">
            <p className="uppercase text-sm font-bold">Check Out Time</p>
          </div>
          <div>
            <input
              type="date"
              id="date"
              className="border mmd:p-0 xs:w-80 rounded-md p-1 border-slate-950"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center xs:ml-auto xs:mr-auto">
          <div className="flex flex-col items-center xs:items-start justify-center gap-2 relative">
            <p className="uppercase text-sm font-bold">Guests</p>
            <div>
              <input
                type="number"
                value={Number(guestNumber)}
                className="w-24 border xs:w-80 mmd:p-0 rounded-md p-1 border-slate-950"
                onChange={handleGuestNumber}
              />
              <div className="flex flex-col absolute right-1 top-7">
                <button
                  className="text-md text-buttonColor mmd:text-sm"
                  onClick={increaseGuestNumber}
                >
                  <span>
                    <FaArrowUp />
                  </span>
                </button>
                <button
                  className="text-md text-buttonColor mmd:text-sm"
                  onClick={decreaseGuestNumber}
                >
                  <span>
                    <FaArrowDown />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-auto mt-auto mmd:ml-0 mmd:mr-0 xs:ml-auto xs:mr-auto">
          <button className="bg-buttonColor rounded-md text-slate-50 p-3 pl-6 pr-6 lg:p-2 lg:pl-4 lg:pr-4 font-bold mmd:p-1 mmd:pl-2 mmd:pr-2 xs:w-80">
            Check Arability
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckArablity;
