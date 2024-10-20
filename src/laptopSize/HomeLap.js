import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Flooter from '../Flooter';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image9 from '../images/image9.png';
import image10 from '../images/image10.png';
import image11 from '../images/image 11.png';
import image12 from '../images/image12.png';
import image13 from '../images/image13.png';
import image14 from '../images/image14.png';
import image15 from '../images/image15.png';
import image16 from '../images/image16.png';
import image17 from '../images/image17.png';
import image18 from '../images/image18.png';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 

const HomeLap = () => {
  const [pets, setPets] = useState([]); // Store fetched pets
  const [showSwiper1, setShowSwiper1] = useState(false); // Control when to show Swiper1
  const [products, setProducts] = useState([]); // Store fetched products
  const [showSwiper2, setShowSwiper2] = useState(false); // Control when to show Swiper2

  // Fetch pets from API
  const fetchPets = async () => {
    try {
      const response = await axios.get('https://monitor-backend-rust.vercel.app/api/pets');
      setPets(response.data); // Set fetched pets data
      console.log('Fetched Pets: ', response.data); // Log the response data to check
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://monitor-backend-rust.vercel.app/api/products');
      setProducts(response.data); // Set fetched product data
      console.log('Fetched Products: ', response.data); // Log the response data to check
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  useEffect(() => {
    fetchPets();
    fetchProducts();
  }, []);

  // Function to show more pets in Swiper after clicking "View More"
  const loadMorePets = () => {
    setShowSwiper1(true); // Show Swiper when the button is clicked
  };

  const loadMoreProducts = () => {
    setShowSwiper2(true); // Show Swiper when the button is clicked
  };

  return (
    <div className='justify-center items-center'>
      {/* Header with background image */}
      <div
        className="h-screen items-center px-6 rounded-b-[38px]"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Header />
        <div className='w-[45%]'>
          <h1 className="text-blue-deep text-6xl ml-24 mt-20 font-bold">One More Friend</h1>
          <h3 className="text-blue-deep text-5xl ml-24 font-bold mt-3">Thousands More Fun!</h3>
          <p className="text-blue-deep ml-24 my-5">
            Having a pet means you have more joy, a new friend, a happy
            person who will always be with you to have fun. We have 200+
            different pets that can meet your needs!.
          </p>
          <div className="ml-24 flex">
            <button className="border-blue-600 border-2 text-blue-600 flex py-1 px-2 rounded-full">
              View Intro
              <svg
                className="ml-2 h-6 w-6 text-blue-600"
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

            <button className="ml-3 py-1 px-2 rounded-full bg-blue-deep text-white">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      <div className="lg:px-40 mt-16 md:px-20 sm:px-10 ">
        {/* Pet Photo Section */}
        <div>
          <p className="text-lg font-medium">What's new?</p>
          <div className="flex justify-between">
            <p className="text-lg text-blue-950 font-bold">Take a look at some of our pets</p>
            <button
              className="flex text-blue-600 items-center border-2 rounded-full py-1 px-2 hover:text-blue-950 hover:border-blue-950"
              onClick={loadMorePets} // Show Swiper on click
            >
              View More
              <svg
                className="h-4 w-4 text-blue-600 hover:text-blue-950"
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
            </button>
          </div>

          {/* Static Pets Grid: Responsive layout with 1 column (sm), 4 columns (md/lg) */}
          {pets.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 bg-gray-100 p-2 rounded-lg">
              {pets.slice(0, 8).map((pet) => (
                <div key={pet.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
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
        {/* post image3 */}
        <div className='h-[375px] rounded-3xl my-10 py-2' style={{ backgroundImage: `url(${image2})` }}>
          <div className='mt-10 text-right'>
            <h1 className="text-blue-deep text-4xl font-bold mr-10">One More Friend</h1>
            <h3 className="text-blue-deep text-3xl font-bold mt-3 mr-10">Thousands More Fun!</h3>
            <p className="text-blue-deep my-5 text-sm mr-10">
              Having a pet means you have more joy, a new friend, a happy
              person<br /> who will always be with you to have fun. We have 200+
              different<br /> pets that can meet your needs!.
            </p>
            <div className="flex ml-[47rem]">
              <button className="border-blue-600 border-2 text-blue-600 flex py-1 px-2 rounded-full">
                View Intro
                <svg
                  className="ml-2 h-6 w-6 text-blue-600"
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

              <button className="ml-3 py-1 px-2 rounded-full bg-blue-deep text-white">
                Explore Now
              </button>
            </div>
          </div>
        </div>

        {/* product list */}
        <div>
          <p className="text-sm">Hard to choose right products for your pets?</p>
          <div className="flex justify-between items-center">
            <p className="text-xl text-blue-950 font-bold">Our Products</p>
            <button
              className="flex text-blue-600 items-center border-2 rounded-full py-1 px-2 hover:text-blue-950 hover:border-blue-950"
              onClick={loadMoreProducts} // Show Swiper on click
            >
              View More
              <svg
                className="h-4 w-4 text-blue-600 hover:text-blue-950"
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
            </button>
          </div>

          {/* Static Pets Grid: Responsive layout with 1 column (sm), 4 columns (md/lg) */}
          {products.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 bg-gray-100 p-2 rounded-lg">
              {products.slice(0, 8).map((product) => (
                <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-3">
                  <img src={product.image} alt='petImage' className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <div className='flex space-x-2'>
                      <p className="text-gray-600 text-[12px]">Product: {product.product}</p>
                      <p className="text-gray-600 text-[12px]">Size: {product.size}</p>
                    </div>
                    <p className="text-gray-800 font-bold">${product.price}</p>
                    <div className='flex bg-pink-200 py-1 px-2 rounded-md mt-2'>
                      <p className=''>{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading products...</p>
          )}

          {/* Swiper for additional pets, only shown after "View More" is clicked */}
          {showSwiper2 && (
            <div className="mt-8">
              <Swiper spaceBetween={16} slidesPerView={1} onSwiper={(swiper) => console.log(swiper)}>
                {products.slice(8).map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-3">
                      <img src={product.image} alt='petImage' className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <div className='flex space-x-2'>
                          <p className="text-gray-600 text-[12px]">Product: {product.product}</p>
                          <p className="text-gray-600 text-[12px]">Size: {product.size}</p>
                        </div>
                        <p className="text-gray-800 font-bold">${product.price}</p>
                        <div>
                          <p className=''>{product.description}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
          {/* selles static list */}
        <div className='my-10'>
          <div className='flex justify-between items-center'>
            <p>Proud to be part of <strong className='text-xl text-blue-950'>Pet sellers</strong></p>
            <button
              className="flex text-blue-600 items-center border-2 rounded-full py-1 px-2 hover:text-blue-950 hover:border-blue-950"
              onClick={loadMoreProducts} // Show Swiper on click
            >
              View More
              <svg
                className="h-4 w-4 text-blue-600 hover:text-blue-950"
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
            </button>
          </div>
          <div className='flex mt-5 justify-between'>
            <img src={image12} alt='SellerImage1'/>
            <img src={image13} alt='SellerImage2 ' />
            <img src={image14} alt='SellerImage3 ' />
            <img src={image15} alt='SellerImage4' />
            <img src={image9} alt='SellerImage5' />
            <img src={image10} alt='SellerImage6' />
            <img src={image11} alt='SellerImage7' />
          </div>
        </div>

        <div className='h-[375px] rounded-3xl my-10 py-2' style={{ backgroundImage: `url(${image3})` }}>
        <div className='mt-20'>
          <div className='ml-24'>
          <h1 className="text-blue-deep text-5xl font-bold">Adoption </h1>
            <h3 className="text-blue-deep text-4xl font-bold mt-3">We Need Help. So Do They</h3>
            <p className="text-blue-deep my-5 text-sm">
              Adopt a pet and give it at home,<br/>
              it will be love you back unconditionally.
            </p>
          </div> 
            <div className="flex flex-row-reverse w-1/3">
              <button className="border-blue-600 border-2 text-blue-600 flex py-1 px-2 rounded-full ml-6">
                View Intro
                <svg
                  className="ml-2 h-6 w-6 text-blue-600"
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

              <button className="py-1 px-2 rounded-full bg-blue-deep text-white">
                Explore Now
              </button>
            </div>
          </div>
        </div>

        <div>
          <p>You already know?</p>
          <div className='flex justify-between items-center'>
            <p className='text-xl text-blue-950 font-bold'>Usefull Pet Knowledge</p>
            <button
              className="flex text-blue-600 items-center border-2 rounded-full py-1 px-2 hover:text-blue-950 hover:border-blue-950"
              onClick={loadMoreProducts} // Show Swiper on click
            >
              View More
              <svg
                className="h-4 w-4 text-blue-600 hover:text-blue-950"
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
            </button>
          </div>
          <div className='flex space-x-3 grid-cols-3 bg-gray-50 p-3 rounded-lg'>
            <div className='shadow-md p-2 rounded-lg space-y-3'>
              <img src={image16} alt='dog1' className='rounded-lg'/>
              <button className='ml-2 py-0.5 px-2 bg-sky-500 text-[10px] text-white rounded-full'>
                Pet Knowledge
              </button>
              <p className='text-lg font-bold'>What is a Pomeranian? How to Identify Pomeranian Dogs</p>
              <p>The Pomeranian, also knownas the Pomeranian (Pom dog),
                is always in the top of the cutest pets.
                Not only that, the small, lovely, smart and skillful circu...
              </p>
            </div>
            <div className='shadow-md p-2 rounded-lg space-y-3'>
              <img src={image17} alt='dog2' className='rounded-lg'/>
              <button className='ml-2 py-0.5 px-2 bg-sky-500 text-[10px] text-white rounded-full'>
                Pet Knowledge
              </button>
              <p className='text-lg font-bold'>Dog Diet You Need To Know</p>
              <p>Dividing a dog's diet may seem simple at first, but
                there are some rules you should know so that your 
                dog can easily absorb the nutrients in the diet. For
                those who are just starting to raise dogs, especially...
              </p>
            </div>
            <div className='shadow-md p-2 rounded-lg space-y-3'>
              <img src={image18} alt='dog3' className='rounded-lg'/>
              <button className='ml-2 py-0.5 px-2 bg-sky-500 text-[10px] text-white rounded-full'>
                Pet Knowledge
              </button>
              <p className='text-lg font-bold'>Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively</p>
              <p>Dog bites are common during development. However,
                no one wants to see thier furniture or important items being bitten by a dog.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Flooter />

    </div>
  );
};

export default HomeLap;    