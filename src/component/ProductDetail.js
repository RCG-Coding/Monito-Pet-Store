import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import axios from 'axios';
import Header from '../Header';
import Flooter from '../Flooter';

import image20 from '../images/image20.jpeg';
import image21 from '../images/image21.jpeg';
import image22 from '../images/image22.jpeg';
import image23 from '../images/image23.jpeg';
import image24 from '../images/image24.jpeg';
import image25 from '../images/image25.jpeg';

const ProductDetail = () => {

  const pets = [image20, image21, image22, image23, image24, image25]
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [customers, setCustomers] = useState([])
  const [pets2, setPets2] = useState([]);

  const fetchPets2 = async () => {
    try {
      const response = await axios.get('https://monitor-backend-rust.vercel.app/api/pets');
      setPets2(response.data);
      console.log('Fetched Pets: ', response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('https://monitor-backend-rust.vercel.app/api/customers');
      setCustomers(response.data);
      console.log('Fetched Pets: ', response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  useEffect(() => {
    fetchCustomers();
    fetchPets2();
  }, [])

  return (
    <div>
      <div className="md:px-32">
        <div className="hidden md:flex flex-col md:mb-10">
          <Header />
        </div>

        

        {/* Main content area */}
        <div className="flex flex-col md:flex-row md:border-2 md:p-2 rounded-lg">
          <div className='md:w-1/2 mb-4'>

            {/* Photo banner section */}
            <div className='space-y-2'>
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
                  {   /*<img src={pet} alt='img' className='w-full  md:flex flex-col' /> */}
                  
                  <div className='pt-5 h-[350px] flex justify-between px-4 mt-3 ' style={{backgroundImage:`url(${pet})`,backgroundSize:'cover'}}>
          <svg class="flex flex-col md:hidden w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" />
          </svg>

          <svg class="flex flex-col md:hidden w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

        </div>
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
                    <img src={pet} alt='img' className='w-full h-full' />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>


            <div className='mt-5 hidden md:flex justify-center items-center gap-3 py-2 px-3 rounded-lg bg-orange-100'>
              <div className='text-blue-950 font-bold text-sm'>
                <p>100% health guarantee for pets</p>
              </div>
              <div className='text-blue-950 font-bold text-sm'>
                <p>100% guarantee of pets identification</p>
              </div>
            </div>
            {/* share section */}
            <div className='hidden md:flex items-center mt-5 gap-8'>
              <div className='flex  space-x-2 mt-4 md:mt-0 justify-center'>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                </svg>
                <p className='font-semibold'>Share:</p>
              </div>

              <div className='flex  space-x-5 mt-4 md:mt-0 justify-center'>
                <svg className="w-6 h-6 rounded-full text-pink-100 bg-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" />
                </svg>
                <svg className="w-6 h-6 text-gray-400 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" />
                </svg>
                <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M0 0h24v24H0z" />
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
                <svg className="w-6 h-6 text-gray-400 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" />
                </svg>
              </div>
            </div>

          </div>

          {/* Photo detail section */}
          <div className="pl-5 md:px-10 md:w-1/2 ">

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
            <div className='flex items-center gap-5 mb-5'>
              <button className='text-white text-xl md:text-lg px-8 py-3 md:py-2 font-semibold rounded-full bg-blue-950'>Contact us</button>
              <button className='flex items-center gap-2 border-blue-950 font-semibold border-2 rounded-full px-5 py-2'>
                <svg class="w-8 h-8 md:w-6 md:h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                </svg>

                <p className='font-bold md:font-normal'>Chat with Monito</p></button>
            </div>
            {/* information division */}
            <div className='w-full'>
              <div className='flex items-center pt-2 pb-3 border-b-2 w-full'>
                <div className='w-[45%]'>SKU</div>
                <div className='w-1/2'>: #1000078</div>
              </div>

              <div className='flex items-center pt-2 pb-3 border-b-2 w-full'>
                <div className='w-[45%]'>Gender</div>
                <div className='w-1/2'>: Female</div>
              </div>

              <div className='flex items-center pt-2 pb-3 border-b-2 w-full'>
                <div className='w-[45%]'>Age</div>
                <div className='w-1/2'>: 2 Month</div>
              </div>

              <div className='flex items-center pt-2 pb-3 border-b-2 w-full'>
                <div className='w-[45%]'>Size</div>
                <div className='w-1/2'>: Small</div>
              </div>

              <div className='flex items-center pt-2 pb-3 border-b-2 w-full'>
                <div className='w-[45%]'>Color</div>
                <div className='w-1/2'>: Appricot & Tan</div>
              </div>

              <div className='flex items-center pt-2 pb-3 border-b-2 w-full'>
                <div className='w-[45%]'>Vaccinated</div>
                <div className='w-1/2'>: Yes</div>
              </div>

              <div className='flex items-center pt-2 pb-3 border-b-2 w-full'>
                <div className='w-[45%]'>Cert</div>
                <div className='w-1/2'>: Yes (MKA)</div>
              </div>

              <div className='flex items-center pt-2 pb-3 border-b-2 w-full'>
                <div className='w-[45%]'>Microchip</div>
                <div className='w-1/2'>: Yes</div>
              </div>

              <div className='flex items-center pt-2 pb-3 border-b-2 w-full'>
                <div className='w-[45%]'>Location</div>
                <div className='w-1/2'>: Vietnam</div>
              </div>

              <div className='flex items-center pt-2 pb-3 border-b-2 w-full'>
                <div className='w-[45%]'>Published Date</div>
                <div className='w-1/2'>: 12-Oct-2022</div>
              </div>

              <div className='flex pt-2 pb-3 border-b-2 w-full'>
                <div className='w-[45%]'>Additional Information</div>
                <div className='w-1/2'>: Poor breed shih Tsu
                  Good body structure
                  with MKA cert and Microchip.
                  Father from champion lineage</div>
              </div>

            </div>


          </div>
        </div>

        <div className='mt-5 md:hidden mx-4 md:mx-0  flex flex-col items-center gap-3 py-2 px-3 rounded-lg bg-orange-100'>
              <div className='text-blue-950 font-bold text-sm'>
                <p>100% health guarantee for pets</p>
              </div>
              <div className='text-blue-950 font-bold text-sm'>
                <p>100% guarantee of pets identification</p>
              </div>
            </div>

        {/* Customer division */}
        <div className='my-10 space-y-3'>
          <p className='text-xl text-blue-950 font-bold '>Our Lovely Customer</p>
          <div>
            <Swiper slidesPerView={3.5}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]} className="w-full h-full gap-5">
              {customers.map((customer, index) => (
                <SwiperSlide key={index}>
                  <img src={customer.image} alt='img' className='h-full w-full' />
                </SwiperSlide>
              ))}

            </Swiper>
          </div>
        </div>

        <div className='my-10'>
          <p className='font-semibold'>Whats new?</p>
          <p className='text-xl font-bold text-blue-900'>See More Puppies</p>


          {pets2.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 bg-gray-100 p-2 px-4 md:px-0 rounded-lg">
              {pets2.slice(0, 4).map((pet) => (
                <div key={pet.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img src={pet.image} alt='petImage' className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{pet.breed}</h3>
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


        </div>

      </div>

      <div className=''>
        <Flooter />
      </div>

    </div>
  );
};

export default ProductDetail;
