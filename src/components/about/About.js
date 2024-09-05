import React from 'react';
import property1 from '../../assets/pngtree-city-night-real-estate-poster-image_204473.jpg'; // تأكد من أن المسار صحيح

const About = () => {
  return (
    <div className="relative bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={property1}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Company Overview */}
        <section className="text-center mb-12 relative">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Our company was founded with the vision of delivering top-quality services and creating innovative solutions. With a team of dedicated professionals, we strive to exceed expectations and set new standards in our industry.
          </p>
        </section>

        {/* Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              We are committed to providing outstanding service and value to our clients. Our mission is to drive success through innovation and excellence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              Our vision is to be a leader in our field by continuously improving and adapting to market trends while maintaining the highest standards of quality.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600">
              Integrity, innovation, and customer satisfaction are the core values that guide our actions and decisions. We are dedicated to upholding these principles in everything we do.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
