import JennyPagoLogo from '../../assets/jennypagologo.png'
import { FaWhatsapp } from 'react-icons/fa'
export default function Header() {
  return (
    <div className="flex items-center justify-between col-span-5 ">
      <div className="grid items-center px-5 ">
        <img src={JennyPagoLogo} alt="jennypago" className="w-[15%]" />
      </div>

      <a
        href="https://wa.me/51953711706?text=Hola,%20me%20gustaría%20conocer%20más%20sobre%20sus%20servicios%20de%20óptica"
        target="_blank"
        className="flex items-center justify-center w-40 h-full text-[#EFEFEF] text-2xl bg-[#3B232E]"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}
