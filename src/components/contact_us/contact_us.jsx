import { RiContactsFill } from 'react-icons/ri'
import { MdOutlineEmail } from 'react-icons/md'
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoTime } from 'react-icons/io5'
export default function Contact_us() {
  return (
    <div className="grid h-full grid-cols-12 ">
      <div className="flex items-center h-full">
        <div className="w-20 h-20  bg-[#1B0E13] text-white flex items-center justify-center text-center">
          <RiContactsFill />
        </div>
      </div>
      <div className="grid items-center col-span-7 pl-10">
        <div className="grid gap-5">
          <h1 className="text-6xl text-[#1B0E13]">Contáctanos</h1>
          <h2>
            Conéctate con nosotros en nuestras redes sociales.
            <br />
            ¡Estamos aquí para responderte rápidamente!
          </h2>

          <div className="flex gap-6 ">
            <a
              href="https://www.facebook.com/profile.php?id=100063792203344"
              target="_blank"
              className="text-5xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/optica.jennypago/"
              target="_blank"
              className="text-5xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/51953711706?text=Hola,%20me%20gustaría%20conocer%20más%20sobre%20sus%20servicios%20de%20óptica"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="grid items-center w-full col-span-4 bg-[#1B0E13] border-2 border-black">
        <div className="p-10 text-white bg-[#11090C] w-96 -translate-x-20 grid gap-10">
          <h1 className="text-4xl">Información</h1>
          <div className="grid gap-3">
            <span className="flex items-center gap-2">
              <MdOutlineEmail />
              opticajennypago@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <FaPhoneAlt /> +51 953711706
            </span>
            <span className="flex items-center gap-2">
              <FaLocationDot /> Jr. Huancavelica 303 - Centro de Lima
            </span>
            <span className="flex items-center gap-2">
              <IoTime />
              07:00 AM - 20:00 PM{' '}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
