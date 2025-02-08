import { GoHomeFill } from 'react-icons/go'
import { FaGlasses } from 'react-icons/fa'
import { RiContactsFill } from 'react-icons/ri'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
export default function Menu() {
  return (
    <div className="z-20 col-span-5 ">
      <ul className="grid grid-cols-4 ">
        <li>
          <Link
            to="/"
            className="bg-[#EFEFEF] flex items-center justify-center col-span-2 gap-2 p-10 text-xl text-[#8B8B8B] hover:text-[#3B232E] hover:bg-[#DEDCDD] transition duration-200"
          >
            <GoHomeFill />

            <span>Inicio</span>
          </Link>
        </li>
        <li>
          <Link
            to="/product"
            className="bg-[#EFEFEF] flex items-center justify-center col-span-2 gap-2 p-10 text-xl text-[#8B8B8B] hover:text-[#3B232E] hover:bg-[#DEDCDD] transition duration-200"
          >
            <FaGlasses />
            <span>Productos</span>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="bg-[#EFEFEF] flex items-center justify-center col-span-2 gap-2 p-10 text-xl text-[#8B8B8B] hover:text-[#3B232E] hover:bg-[#DEDCDD] transition duration-200"
          >
            <RiContactsFill />
            <span>Contacto</span>
          </Link>
        </li>
        <li>
          <Link
            to="/location"
            className="bg-[#EFEFEF] flex items-center justify-center col-span-2 gap-2 p-10 text-xl text-[#8B8B8B] hover:text-[#3B232E] hover:bg-[#DEDCDD] transition duration-200"
          >
            <FaLocationDot />
            <span>Location</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}