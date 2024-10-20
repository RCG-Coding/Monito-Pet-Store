import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Flooter from '../Flooter';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image5 from '../images/image5.jpeg';
import image6 from '../images/image6.jpeg';
import image8 from '../images/image8.png';
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

const Home = () => {
  const [pets, setPets] = useState([]); // Store fetched pets
  const [showSwiper1, setShowSwiper1] = useState(false); 
  const [products, setProducts] = useState([]); 
  const [showSwiper2, setShowSwiper2] = useState(false); 
  const [bgImage1, setBgImage1] = useState(image5);
  const [bgImage2, setBgImage2] = useState(image8);

  const fetchPets = async () => {
    try {
      const response = await axios.get('https://monitor-backend-rust.vercel.app/api/pets');
      setPets(response.data); 
      console.log('Fetched Pets: ', response.data); 
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://monitor-backend-rust.vercel.app/api/products');
      setProducts(response.data);
      console.log('Fetched Products: ', response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  useEffect(() => {
    fetchPets();
    fetchProducts();

    const updateImage1 = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setBgImage1(image1);
      } else {
        const randomImage = Math.random() < 0.5 ? image5 : image6; // Random image for small screens
        setBgImage1(randomImage);
      }
    };

    const updateImage2 = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setBgImage2(image2);
      } else { 
        setBgImage2(image8);
      }
    };

    updateImage1();
    updateImage2();

  window.addEventListener('resize', updateImage1);
  window.addEventListener('resize', updateImage2);

  return () => {
    window.removeEventListener('resize', updateImage1);
    window.removeEventListener('resize', updateImage2);
  };

  }, []);

  
  const loadMorePets = () => {
    setShowSwiper1(true); 
  };

  const loadMoreProducts = () => {
    setShowSwiper2(true);
  };

  return (
    <div className='justify-center items-center'>
      {/* Header with background image */}
      <div
        className="h-screen items-center px-6 rounded-b-[38px]"
        style={{
          backgroundImage: `url(${bgImage1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Header />
        <div>
          <h1 className="text-blue-deep text-5xl md:text-6xl ml-5 mt-12 md:ml-24 md:mt-20 font-bold">One More Friend</h1>
          <h3 className="text-blue-deep text-3xl ml-5 md:text-5xl md:ml-24 font-bold mt-4">Thousands More Fun!</h3>
          <p className="text-blue-deep ml-5 md:ml-24 my-4 md:w-[450px]">
            Having a pet means you have more joy, a new friend, a happy
            person who will always be with you to have fun. We have 200+
            different pets that can meet your needs.
          </p>
          <div className="ml-24 flex ">
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

      <div className="lg:px-40 mt-16 md:px-20 px-5 ">
        {/* Pet Photo Section */}
        <div className='flex flex-col'>
          <p className="text-lg font-medium">What's new?</p>
          <div className="flex flex-row justify-between items-center">
            <p className="text-lg text-blue-950 font-bold">Take a look at some of our pets</p>
            <button
              className="hidden md:flex text-blue-600 items-center border-2 rounded-full py-1 px-2 hover:text-blue-950 hover:border-blue-950"
              onClick={loadMorePets}
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

          {/* Static Pets Grid: Responsive layout with 2 column (sm), 4 columns (md/lg) */}
          {pets.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 bg-gray-100 p-2 rounded-lg">
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

          <button
              className="md:hidden mt-5 flex justify-center text-blue-600 items-center border-2 rounded-full py-1 px-2 hover:text-blue-950 hover:border-blue-950"
              onClick={loadMorePets}
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

        {/* post image3 */}
        <div className='h-[640px] md:h-[350px] pt-10 rounded-3xl my-10 py-2' style={{ backgroundImage: `url(${bgImage2})`}}>
          <div className='mt-10 md:text-right text-center px-2 '>
            <h1 className="text-blue-deep text-4xl font-bold mr-8">One More Friend</h1>
            <h3 className="text-blue-deep text-3xl font-bold mt-3 mr-8">Thousands More Fun!</h3>
            <p className="text-blue-deep my-5 text-[12px] md:mr-8">
              Having a pet means you have more joy, a new friend, a happy
              person<br/> who will always be with you to have fun. We have 200+
              different pets<br/> that can meet your needs!.
            </p>
            <div className="flex ml-8 space-x-10 md:ml-[44.5rem]">
              <button className="border-blue-600 border-2 text-blue-600 flex py-1 px-8 md:px-2 rounded-full">
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

              <button className="ml-3 py-1 px-8 md:px-2 rounded-full bg-blue-deep text-white">
                Explore Now
              </button>
            </div>
          </div>
        </div>

        {/* product list */}
        <div className='hidden md:flex md:flex-col'>
          <p className="text-sm">Hard to choose right products for your pets?</p>
          <div className="flex justify-between items-center">
            <p className="text-xl text-blue-950 font-bold">Our Products</p>
            <button
              className="hidden md:flex text-blue-600 items-center border-2 rounded-full py-1 px-2 hover:text-blue-950 hover:border-blue-950"
              onClick={loadMoreProducts}
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
        <div className='my-10 hidden md:flex md:flex-col'>
          <div className='flex justify-between items-center'>
            <p>Proud to be part of <strong className='text-xl text-blue-950'>Pet sellers</strong></p>
            <button
              className="flex text-blue-600 items-center border-2 rounded-full py-1 px-2 hover:text-blue-950 hover:border-blue-950"
              onClick={loadMoreProducts}
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

        <div className='h-[375px] rounded-3xl my-10 py-2 hidden md:flex md:flex-col' style={{ backgroundImage: `url(${image3})` }}>
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

        <div className='flex flex-col'>
          <p>You already know?</p>
          <div className='flex justify-between items-center'>
            <p className='text-xl text-blue-950 font-bold'>Usefull Pet Knowledge</p>
            <button
              className="hidden md:flex text-blue-600 items-center border-2 rounded-full py-2 px-2 hover:text-blue-950 hover:border-blue-950"
              onClick={loadMoreProducts}
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
          <div className='grid md:space-x-3 space-y-3 md:space-y-0 grid-col-1 md:grid-cols-3 bg-gray-50 p-3 rounded-lg'>
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
          <button
        className="flex md:hidden mt-2 justify-center text-blue-600 items-center border-2 rounded-full py-1 px-2 hover:text-blue-950 hover:border-blue-950"
        onClick={loadMoreProducts}
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
      </div>

      <Flooter />

    </div>
  );
};

export default Home;    