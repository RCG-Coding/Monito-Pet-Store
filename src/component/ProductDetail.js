import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import axios from 'axios';
import Header from '../Header';

import image20 from '../images/image20.jpeg';
import image21 from '../images/image21.jpeg';
import image22 from '../images/image22.jpeg';
import image23 from '../images/image23.jpeg';
import image24 from '../images/image24.jpeg';
import image25 from '../images/image25.jpeg';

const ProductDetail = () => {

  const pets = [image20, image21, image22, image23, image24, image25]
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  //const [pets, setPets] = useState([])

  // const fetchPets = async () => {
  //   try {
  //     const response = await axios.get('https://monitor-backend-rust.vercel.app/api/pets');
  //     setPets(response.data); 
  //     console.log('Fetched Pets: ', response.data); 
  //   } catch (error) {
  //     console.error('Error fetching pets:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchPets();
  // }, [])

  return (
    <div className="px-32">
      <div className="mb-10">
        <Header />
      </div>

      {/* Main content area */}
      <div className="flex border-2 p-2 rounded-lg">
        {/* Photo banner section */}
        <div className='w-1/2 space-y-2'>
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="rounded-lg "
          >
            {pets.map((pet, index) => (
              <SwiperSlide key={index}>
                <img src={pet} className='w-full' />
              </SwiperSlide>
            ))}

          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="rounded-lg"
          >
            {pets.map((pet, index) => (
              <SwiperSlide key={index}>
                <img src={pet} className='w-full h-full' />
              </SwiperSlide>
            ))}



          </Swiper>
        </div>

        {/* Photo detail section */}
        <div className="px-10">

          <div className='py-2 flex gap-3 items-center text-center text-sm text-blue-900 font-medium'>
            <p>Home</p>
            <svg
              className="h-4 w-4 text-gray-600"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
            <p>Dog</p>
            <svg
              className="h-4 w-4 text-gray-600"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
            <p>Large Dog</p>
            <svg
              className="h-4 w-4 text-gray-600"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
            <p>Shiba Inu Sepia</p>
          </div>

          <p className='text-blue-900 text-sm my-2'>SKU #1000078</p>

          <p className='text-2xl text-blue-950 font-bold'>Shiba Inu Sepia</p>
          <p className='text-xl text-blue-950 font-bold my-3'>34.000.000 VND</p>
          {/* button section */}
          <div className='flex items-center gap-5'>
            <button className='text-white px-8 py-2 font-semibold rounded-full bg-blue-950'>Contact us</button>
            <button className='flex items-center gap-2 border-blue-950 font-semibold border-2 rounded-full px-5 py-2'>
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
              </svg>

              Chat with Monito</button>
          </div>
            {/* information division */}
            <div>
              <div className='flex items-center gap-44 pt px-2'>
                <p>SKU</p>
                <p>:#1000078</p>
                 
                 
              </div>

            </div>
 
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
