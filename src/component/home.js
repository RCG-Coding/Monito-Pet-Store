import React, { useState, useEffect } from 'react';
import Header from '../Header';
import image1 from '../images/image1.jpeg';
import image5 from '../images/image5.jpeg';
import image6 from '../images/image6.jpeg';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Correct import for Swiper CSS in v7+
import 'swiper/css/navigation'; // Optional, if you need additional features

const Home = () => {
  const [pets, setPets] = useState([]); // Store fetched pets
  const [showSwiper, setShowSwiper] = useState(false); // Control when to show Swiper
  const [bgImage, setBgImage] = useState(image5);

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

  useEffect(() => {
    fetchPets(); // Fetch pets on component mount

    // Change background image based on screen size
    const updateImage = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setBgImage(image1); // Set image1 for medium and large screens
      } else {
        const randomImage = Math.random() < 0.5 ? image5 : image6; // Random image for small screens
        setBgImage(randomImage);
      }
    };

    updateImage();
    window.addEventListener('resize', updateImage);

    return () => window.removeEventListener('resize', updateImage);
  }, []);

  // Function to show more pets in Swiper after clicking "View More"
  const loadMorePets = () => {
    setShowSwiper(true); // Show Swiper when the button is clicked
  };

  return (
    <div>
      {/* Header with background image */}
      <div
        className="h-screen items-center px-6 rounded-b-3xl"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Header />
        <div>
          <h1 className="text-blue-deep text-6xl ml-24 mt-16 font-bold">One More Friend</h1>
          <h3 className="text-blue-deep text-5xl ml-24 font-bold mt-4">Thousands More Fun!</h3>
          <p className="text-blue-deep ml-24 my-5">
            Having a pet means you have more joy, a new friend, a happy
            <br />
            person who will always be with you to have fun. We have 200+<br />
            different pets that can meet your needs.
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

      {/* Pet Photo Section */}
      <div className="w-4/5 ml-32 mt-16">
        <p className="text-lg font-medium">What's new?</p>
        <div className="flex justify-between">
          <p className="text-lg text-blue-950 font-bold">Take a look at some of our pets</p>
          <button
            className="flex text-blue-600 items-center border-2 rounded-full py-1 px-2"
            onClick={loadMorePets} // Show Swiper on click
          >
            View More
            <svg
              className="h-4 w-4 text-blue-600"
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
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {pets.slice(0, 8).map((pet) => (
              <div key={pet.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{pet.breed}</h3>
                  <p className="text-gray-600">{pet.gender}</p>
                  <p className="text-gray-600">{pet.age}</p>
                  <p className="text-gray-800 font-semibold">${pet.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading pets...</p>
        )}

        {/* Swiper for additional pets, only shown after "View More" is clicked */}
        {showSwiper && (
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
  );
};

export default Home;