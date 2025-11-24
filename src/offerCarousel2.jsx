'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useRef, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

const bikeOffers = [
  // ------------------ APRILIA SCOOTERS ------------------
  {
    name: 'Aprilia SR 125',
    colors: [
      {
        name: 'Matt Black',
        code: '#000000',
        image: 'https://imgd.aeplcdn.com/1056x594/n/toi5ogb_1852900.jpg?q=80',
      },
    ],
  },
  {
    name: 'Aprilia SR175',
    colors: [
      {
        name: 'Glossy Tech White',
        code: '#FFFFFF',
        image: 'https://imgd.aeplcdn.com/1056x594/n/2qprogb_1852880.jpg?q=80',
      },
      {
        name: 'Gray',
        code: '#000000',
        image: 'https://imgd.aeplcdn.com/1056x594/n/e7orogb_1852878.jpg?q=80',
      },
    ],
  },

  {
    name: 'Aprilia Storm 125',
    colors: [
      {
        name: 'Yellow',
        code: '#FFFF00',
        image:
          'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/aprilia-select-model-yellow-1670998262490.png?q=80',
      },
    ],
  },

  // ------------------ VESPA SCOOTERS ------------------
  {
    name: 'Vespa ZX 125',
    colors: [
      {
        name: 'Red',
        code: '#7E0000',
        image:
          'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/vespa-select-model-glossy-red-1683712019730.jpg?q=80',
      },
      {
        name: 'White',
        code: '#FFFFFF',
        image:
          'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/vespa-select-model-pearl-white-1683712008048.jpg?q=80',
      },
      {
        name: 'Black',
        code: '#0F0F0F',
        image:
          'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/vespa-select-model-matt-black-1683712002009.jpg?q=80',
      },
      {
        name: 'Blue',
        code: '#96B4DA',
        image:
          'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/vespa-select-model-azure-blue-1683711990123.jpg?q=80&wm=3',
      },
    ],
  },
  {
    //gray is not avaliable
    name: 'Vespa 125',
    image:
      'https://i0.wp.com/premierautomobiles.in/wp-content/uploads/2022/06/vxl-grey.jpg?w=800&ssl=1',
    colors: [
      {
        name: 'Red',
        code: '#D8282C',
        image: 'https://imgd.aeplcdn.com/1056x594/n/79kqefb_1814143.jpg?q=80',
      },
      {
        name: 'White',
        code: '#D3D3D7',
        image: 'https://imgd.aeplcdn.com/1056x594/n/0xnqefb_1814147.jpg?q=80',
      },
      {
        name: 'Black',
        code: '#2D2F30',
        image: 'https://imgd.aeplcdn.com/1056x594/n/k26qefb_1814149.jpg?q=80',
      },
      {
        name: 'Blue',
        code: '#8BABCA',
        image: 'https://imgd.aeplcdn.com/1056x594/n/rw7qefb_1814145.jpg?q=80',
      },
      {
        name: 'Green',
        code: '#96B8B6',
        image: 'https://imgd.aeplcdn.com/1056x594/n/2s8qefb_1814141.jpg?q=80',
      },
    ],
  },
  {
    name: 'Vespa S125',
    colors: [
      {
        name: 'Black',
        code: '#1B1B1B',
        image: 'https://imgd.aeplcdn.com/1056x594/n/hh7refb_1814175.jpg?q=80',
      },
    ],
  },
  {
    name: 'Vespa 149CC',
    colors: [
      {
        name: 'Black',
        code: '#B0C8E4',
        image:
          'https://i0.wp.com/premierautomobiles.in/wp-content/uploads/2022/06/vxl-blue.jpg?w=800&ssl=1',
      },
    ],
  },
  {
    name: 'Vespa S149CC',
    colors: [
      {
        name: 'Black',
        code: '#E2353B',
        image:
          'https://i0.wp.com/premierautomobiles.in/wp-content/uploads/2022/06/sxl150-red.jpg?w=800&ssl=1',
      },
    ],
  },
  {
    name: 'Vespa Racing Sixties 150',
    colors: [
      {
        name: 'Black',
        code: '#F2F4F5',
        image:
          'https://i0.wp.com/premierautomobiles.in/wp-content/uploads/2022/06/125Racing.jpg?w=600&ssl=1',
      },
    ],
  },
];

/* 🚨 Bike Card Component */
function BikeCard({ bike }) {
  const [selectedColor, setSelectedColor] = useState(bike.colors[0]);

  return (
    <div className='relative overflow-hidden transition-all duration-500 border border-gray-800 shadow-xl rounded-2xl bg-gradient-to-b from-gray-900 to-black hover:border-red-600'>
      {/* Offer Tag */}
      <span className='absolute top-0 right-0 px-3 py-1 text-xs font-semibold text-black uppercase rounded-bl-lg bg-gradient-to-r from-yellow-400 to-red-500'>
        Offer
      </span>

      {/* Image */}
      <img
        src={selectedColor.image}
        alt={bike.name}
        className='object-contain w-full transition-transform duration-700 h-52 md:h-60'
      />

      {/* Info & Colors */}
      <div className='p-5 text-center'>
        <h3 className='text-xl font-bold text-white'>{bike.name}</h3>

        {/* Color Selector */}
        <div className='flex justify-center mt-3 space-x-2'>
          {bike.colors.map((c, i) => (
            <span
              key={i}
              onClick={() => setSelectedColor(c)}
              className={`w-5 h-5 rounded-full border cursor-pointer transition-all duration-300 
              ${
                selectedColor.name === c.name
                  ? 'scale-110 border-white'
                  : 'border-gray-500'
              }`}
              style={{ backgroundColor: c.code }}
            ></span>
          ))}
        </div>

        {/* View Details Button */}
        <button className='px-5 py-2 mt-5 text-sm font-semibold uppercase transition rounded-full bg-gradient-to-r from-red-600 to-orange-500 hover:scale-105'>
          View Details
        </button>
      </div>
    </div>
  );
}

/* 🎯 Carousel Component */
export default function PremiumOffersCarousel2() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className='relative bg-gradient-to-b from-black via-[#111] to-[#0a0a0a] py-16 overflow-hidden text-white z-40'>
      {/* Decorative BG */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-cover bg-center"></div>

      {/* Title */}
      <h2 className='relative mb-10 text-4xl font-extrabold tracking-wider text-center text-transparent uppercase bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text'>
        Premium Bike Offers
      </h2>

      <div className='relative px-6 mx-auto max-w-7xl'>
        {/* Prev Button */}
        <button
          ref={prevRef}
          className='absolute left-0 z-10 p-3 transition -translate-y-1/2 rounded-full bg-black/70 top-1/2 hover:bg-red-600'
        >
          ❮
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
          spaceBetween={25}
          slidesPerView={1}
          // navigation={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {bikeOffers.map((bike, index) => (
            <SwiperSlide key={index}>
              <BikeCard bike={bike} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button */}
        <button
          ref={nextRef}
          className='absolute right-0 z-10 p-3 transition -translate-y-1/2 rounded-full bg-black/70 top-1/2 hover:bg-red-600'
        >
          ❯
        </button>
      </div>

      {/* Note */}
      <p className='relative mt-8 text-sm text-center text-gray-500'>
        *Terms & Conditions Apply
      </p>
    </section>
  );
}
