import React, { useState, useEffect } from 'react';
import Header from '../Header';
import image1 from '../images/image1.jpeg'; 
import image5 from '../images/image5.jpeg'; 
import image6 from '../images/image6.jpeg'; 

const Home = () => {
  const [bgImage, setBgImage] = useState(image5);

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;

      if (width >= 768) {
        setBgImage(image1);
      } else {
        const randomImage = Math.random() < 0.5 ? image5 : image6;
        setBgImage(randomImage);
      }
    };
    updateImage();
    window.addEventListener('resize', updateImage);
    return () => window.removeEventListener('resize', updateImage);
  }, []);

  return (
    <div>
      <div
        className="h-screen items-center px-6"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Header />
      </div>
    </div>
  );
};

export default Home;
