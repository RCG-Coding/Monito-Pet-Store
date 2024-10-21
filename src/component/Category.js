import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 

import Header from '../Header';
import Flooter from '../Flooter';
import image4 from '../images/image4.png';
import image7 from '../images/image7.png';

const Category = () => {
  const [pets, setPets] = useState([]);
  const [bgImage, setBgImage] = useState(image7);
  const [showSwiper1, setShowSwiper1] = useState(false);

  const fetchPets = async () => {
    try {
      const response = await axios.get('https://monitor-backend-rust.vercel.app/api/pets');
      /* the respnse have only 7 data but I want to at least 20 data there for I collect the data in 3 time using loop */
      const array = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < response.data.length; j++) {
          array.push(response.data[j])
        }
      }
      setPets(array)
      console.log(array)
      console.log('Fetched Pets: ', response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  useEffect(() => {
    fetchPets();

    const updateImage = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setBgImage(image4);
      } else {
        setBgImage(image7);
      }
    };

    updateImage();
    window.addEventListener('resize', updateImage);

    return () => window.removeEventListener('resize', updateImage);

  }, [])

  const loadMorePets = () => {
    setShowSwiper1(true); 
  };

  return (
    <div>
      <div className='px-24'>
        <Header />
      </div>

      {/* <div className='md:px-24 mt-10' */}
      <div className='md:px-24 mt-10'>
        {/* create baner and giding path */}
        <div className=''>
          <div className='flex items-center space-x-3'>
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
            <p>Small Dog</p>
          </div>
          {/* create baner */}
          <div className='md:h-[360px] pt-5 rounded-3xl mt-2' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className='mt-10 md:text-right text-center px-10 text-white'>
              <h1 className=" text-5xl font-bold mr-8">One More Friend</h1>
              <h3 className=" text-4xl font-bold mt-3 mr-8">Thousands More Fun!</h3>
              <p className=" my-5 text-[12px] md:mr-8">
                Having a pet means you have more joy, a new friend, a happy
                person<br /> who will always be with you to have fun. We have 200+
                different pets<br /> that can meet your needs!.
              </p>
              <div className="flex ml-8 space-x-5 md:ml-[46rem]">
                <button className="border-white border-2 text-white flex py-2 px-8 md:px-5 rounded-full">
                  View Intro
                  <svg
                    className="ml-2 h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>

                <button className="ml-3 py-2 px-8 md:px-8 rounded-full bg-white text-gray-800 font-semibold">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* create two divition for pets and filter */}
        <div className='flex mt-6'>
          {/* create filter division*/}
          <div className='w-1/4 pr-3'>
            <h1 className='text-blue-950 font-bold text-2xl'>Filter</h1>

            <div className='py-3 border-b-2'>
              <p className='font-bold'>Gender</p>
              <div className='flex items-center space-x-2'>
                <input type='checkbox' />
                <p className='font-semibold'>Male</p>
              </div>
              <div className='flex items-center space-x-2'>
                <input type='checkbox' />
                <p className='font-semibold'>Female</p>
              </div>
            </div>

            {/* create color section*/}
            <div className='space-y-2 my-3 border-b-2 pb-5'>
              <p className='font-bold'>Color</p>
              <div className='flex space-x-2 items-center'>
                <input type='checkbox' />
                <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                <p className='font-semibold'>Red</p>
              </div>
              <div className='flex space-x-2 items-center'>
                <input type='checkbox' />
                <div className='w-4 h-4 bg-orange-500 rounded-full'></div>
                <p className='font-semibold'>Apricot</p>
              </div>
              <div className='flex space-x-2 items-center'>
                <input type='checkbox' />
                <div className='w-4 h-4 bg-black rounded-full'></div>
                <p className='font-semibold'>Black</p>
              </div>
              <div className='flex space-x-2 items-center'>
                <input type='checkbox' />
                <div className='w-4 h-4 flex rounded-full'>
                  <div className='bg-black w-1/2 '></div>
                  <div className='bg-gray-300 w-1/2 '></div>
                </div>
                <p className='font-semibold'>Black & White</p>
              </div>
              <div className='flex space-x-2 items-center'>
                <input type='checkbox' />
                <div className='w-4 h-4 bg-gray-300 rounded-full'></div>
                <p className='font-semibold'>Silver</p>
              </div>
              <div className='flex space-x-2 items-center'>
                <input type='checkbox' />
                <div className='w-4 h-4 bg-orange-200 rounded-full'></div>
                <p className='font-semibold'>Tan</p>
              </div>
            </div>

            {/* create max min division*/}
            <div className='pt-2 pb-3 border-b-2'>
              <p className='font-bold mb-2'>Price</p>
              <div className='flex items-center gap-10'>
                <button className='flex items-center gap-14 shadow-sm p-2'>
                  Min
                  <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                  </svg>
                </button>

                <button className='flex items-center gap-14 shadow-sm p-2'>
                  Max
                  <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                  </svg>

                </button>
              </div>
            </div>
            {/* create Breed division*/}
            <div className=' py-3 border-b-2 mb-5'>
              <p className='font-bold mb-2'>Breed</p>
              <div className='flex gap-2'>
                <input type='checkbox' />
                <p className='font-semibold'>Small</p>
              </div>
              <div className='flex gap-2'>
                <input type='checkbox' />
                <p className='font-semibold'>Medium</p>
              </div>
              <div className='flex gap-2'>
                <input type='checkbox' />
                <p className='font-semibold'>Large</p>
              </div>
            </div>

          </div>

          {/* create pet cards division*/}
          <div className='w-3/4'>
            {/* create header in pet cards division*/}
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-3'>
              <p className='text-2xl text-blue-950 font-bold'>Small Dog</p>
              <p className='text-blue-950'>52 pupies</p>
              </div>
              <button className='flex gap-2 px-2 py-1 border-2 items-center rounded-full'
              onClick={loadMorePets}>
                Sort by Popular
                <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                </svg>

              </button>
            </div>


            {/* Static Pets Grid: Responsive layout with 2 column (sm), 4 columns (md/lg) */}
          {pets.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6 bg-gray-100 p-2 rounded-lg">
              {pets.slice(0, 15).map((pet) => (
                <div key={pet.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-2">
                  <img src={pet.image} alt='petImage' className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{pet.breed}</h3>
                    <div className='flex space-x-2'>
                    <p className="text-gray-600 text-sm">Gender: {pet.gender}</p>
                    <p className="text-gray-600 text-sm">Age: {pet.age}</p>
                    </div>
                    <p className="text-gray-800 font-semibold">${pet.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading pets...</p>
          )}

          {/* Swiper for additional pets, only shown after "View More" is clicked */}
          {showSwiper1 && (
            <div className="mt-8">
              <Swiper spaceBetween={16} slidesPerView={1} onSwiper={(swiper) => console.log(swiper)}>
                {pets.slice(8).map((pet) => (
                  <SwiperSlide key={pet.id}>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                      <img src={pet.image} alt='petImage' className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="text-xl font-bold">{pet.breed}</h3>
                        <p className="text-gray-600">{pet.age}</p>
                        <p className="text-gray-600">{pet.gender}</p>
                        <p className="text-gray-800 font-semibold">${pet.price}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}



          </div>

        </div>
      </div>
      <Flooter />
    </div>
  )
}

export default Category;