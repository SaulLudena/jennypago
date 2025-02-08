import { FaLocationDot } from 'react-icons/fa6'
export default function Location() {
  return (
    <div className="grid h-full grid-cols-12 ">
      <div className="flex items-center h-full">
        <div className="w-20 h-20  bg-[#1B0E13] text-white flex items-center justify-center text-center">
          <FaLocationDot />
        </div>
      </div>
      <div className="grid items-center col-span-7 pl-10">
        <div className="grid gap-5">
          <h1 className="text-6xl">Ubicación</h1>
          <h2>Puedes ubicarnos en</h2>
          <div className="grid w-2/3 gap-4 ">
            <iframe
              className="w-full shadow-sm h-52 rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8860.687299162357!2d-77.04560345021474!3d-12.046675411824323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c989bc8bf7%3A0xf1e584f3c145434b!2s%C3%93ptica%20Jenny%20Pago!5e1!3m2!1ses-419!2spe!4v1738211129952!5m2!1ses-419!2spe"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
