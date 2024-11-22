
import { FaPhone, FaWhatsapp, FaBell } from "react-icons/fa6"

const StickyBottomBar = () => {
  return (
    <div className="hidden w-screen ss:block ss:fixed ss:bottom-0 z-20">
        <div className="bg-topNavBg p-3 flex flex-row justify-between pl-12 pr-12 text-slate-50 text-sm">
            <button className="flex flex-col items-center justify-center gap-1">
              <span className=""><FaPhone/></span>
              <p>+123456789</p>
            </button>
            <button className="flex flex-col items-center justify-center gap-1">
              <span><FaWhatsapp/></span>
              <p>WhatsApp</p>
            </button>
            <button className="flex flex-col items-center justify-center gap-1">
              <span><FaBell/></span>
              <p>Reservation</p>
            </button>
        </div>
    </div>
  )
}

export default StickyBottomBar