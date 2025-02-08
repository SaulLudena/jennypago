import { FaWhatsapp } from 'react-icons/fa'

export default function Product_carousel_item({
  title,
  subtitle,
  description,
  image,
}) {
  return (
    <div className="grid grid-cols-12 ">
      <div className="relative flex items-center col-span-6 max-2xl:col-span-12">
        <img className="object-cover w-full h-screen opacity-0" />
        <div className="absolute grid items-center w-full h-[85%] top-0 grid-cols-12 text-left ">
          <div className="top-0 grid col-span-12 gap-5 px-14 ">
            <div className="grid gap-2">
              <h1 className="font-medium text-7xl max-xl:text-4xl text-[#1B0E13]">
                {title}
              </h1>
              <h3 className="text-2xl font-medium max-xl:text-sm">
                {subtitle}
              </h3>
            </div>
            <p className="text-xl max-xl:text-sm">{description}</p>
            <div className="flex items-center gap-5">
              <a
                href=""
                className="flex items-center gap-3 p-10 py-5 text-white bg-[#1B0E13] max-xl:text-sm"
              >
                <div className="text-2xl">
                  <FaWhatsapp />
                </div>
                <span>Consultar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6 max-2xl:hidden">
        <img src={image} alt="" className="object-cover w-full h-full" />
      </div>
    </div>
  )
}
