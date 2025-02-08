import { Link } from 'react-router-dom'
import presentationBackground from '../../assets/presentationbackground.png'
export default function Presentation() {
  return (
    <div className="relative flex col-span-5 row-span-3 ">
      <img
        src={presentationBackground}
        alt=""
        className="object-cover w-full opacity-15"
      />
      <div className="absolute flex items-center justify-center w-full h-full ">
        <div className="grid gap-4 text-center">
          <h1 className="text-7xl text-[#1B0E13]">ÓPTICA JENNY PAGO</h1>
          <h2 className="text-2xl text-[#1B0E13]">
            VISIÓN PERFECTA, ESTILO ÚNICO
          </h2>
          <div className="mt-2">
            <Link
              to="/product"
              className="bg-[#1B0E13] text-[#EFEFEF] py-3 px-10"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
