import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import Product_carousel_item from './product_carousel_item'
import { FaPlay } from 'react-icons/fa'
import { useRef, useState } from 'react'

import lente_1_b from '../../assets/products/lente_1_b.png'
import lente_2_b from '../../assets/products/lente_2_b.png'
import lente_3_b from '../../assets/products/lente_3_b.png'
import lente_4_b from '../../assets/products/lente_4_b.jpg'
import lente_5_b from '../../assets/products/lente_5_b.jpg'
import lente_6_b from '../../assets/products/lente_6_b.jpg'
import lente_7_b from '../../assets/products/lente_7_b.jpg'
import lente_8_b from '../../assets/products/lente_8_b.jpg'
import lente_9_b from '../../assets/products/lente_9_b.jpg'
import lente_10_b from '../../assets/products/lente_10_b.jpg'
import lente_11_b from '../../assets/products/lente_11_b.png'

const products = [
  {
    title: 'Bifocales Flat Top',
    subtitle: 'Visión dual con línea visible',
    description:
      'Lentes con dos zonas de visión separadas para cerca y lejos, con una línea visible en la parte inferior.',
    image: lente_1_b,
  },
  {
    title: 'Bifocales Invisibles',
    subtitle: 'Visión dual sin líneas',
    description:
      'Lentes con una transición suave entre zonas de visión cercana y lejana, sin líneas visibles para mayor estética.',
    image: lente_2_b,
  },
  {
    title: 'Multifocales',
    subtitle: 'Corrección progresiva',
    description:
      'Lentes con una transición gradual entre visión cercana, intermedia y lejana, sin cortes visibles.',
    image: lente_3_b,
  },
  {
    title: 'Cristales Foto Gray',
    subtitle: 'Oscurecimiento automático',
    description:
      'Lentes de vidrio que se oscurecen con la luz solar y se aclaran en interiores, brindando protección UV.',
    image: lente_4_b,
  },

  {
    title: 'Resinas Fotomatic',
    subtitle: 'Tecnología fotosensible',
    description:
      'Lentes plásticas que cambian de color con la exposición a la luz UV, adaptándose a la luz ambiental.',
    image: lente_5_b,
  },
  {
    title: 'Resinas AR',
    subtitle: 'Antirreflejo avanzado',
    description:
      'Lentes con tratamiento antirreflejo para reducir reflejos y mejorar la claridad visual, ideales para pantallas y conducción.',
    image: lente_6_b,
  },
  {
    title: 'Resinas con Protección UV',
    subtitle: 'Protección ocular total',
    description:
      'Lentes con filtro especial que bloquea los rayos UV, ayudando a prevenir cataratas y el envejecimiento ocular.',
    image: lente_7_b,
  },
  {
    title: 'Lentes de Contacto',
    subtitle: 'Corrección discreta',
    description:
      'Lentes ópticos flexibles que se colocan sobre la córnea, ofreciendo una alternativa estética y funcional a las gafas.',
    image: lente_8_b,
  },
  {
    title: 'Cosméticos y a Medida',
    subtitle: 'Estilo y personalización',
    description:
      'Lentes de contacto diseñados para cambiar el color de los ojos o corregir defectos específicos de manera personalizada.',
    image: lente_9_b,
  },
  {
    title: 'Gas Permeables',
    subtitle: 'Oxigenación ocular',
    description:
      'Lentes de contacto rígidos pero porosos, permitiendo el paso de oxígeno para una mayor salud ocular y nitidez visual.',
    image: lente_10_b,
  },
  {
    title: 'Tóricos',
    subtitle: 'Corrección de astigmatismo',
    description:
      'Lentes de contacto diseñados para corregir el astigmatismo con diferentes potencias en distintas áreas del lente.',
    image: lente_11_b,
  },
]

export default function Product_carousel() {
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const totalSlides = products.length

  return (
    <div className="relative flex h-full">
      <div className="absolute z-10 left-14 top-4">
        <button
          ref={prevButtonRef}
          className={`p-5 rotate-180 border-2 border-black rounded-full transition-opacity ${
            activeIndex === 0 ? 'opacity-50' : 'opacity-100'
          }`}
        >
          <FaPlay />
        </button>
      </div>

      <div className="absolute z-10 left-[8rem] top-4">
        <button
          ref={nextButtonRef}
          className={`p-5 border-2 border-black rounded-full transition-opacity ${
            activeIndex === totalSlides - 1 ? 'opacity-50' : 'opacity-100'
          }`}
        >
          <FaPlay />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove={true}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevButtonRef.current
            swiper.params.navigation.nextEl = nextButtonRef.current
            swiper.navigation.init()
            swiper.navigation.update()
          })
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Product_carousel_item
              title={product.title}
              subtitle={product.subtitle}
              description={product.description}
              image={product.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
