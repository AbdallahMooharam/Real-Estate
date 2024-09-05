import React from 'react';
import property1 from '../../assets/shutterstock_245476081-800x534-1.jpg'; // تأكد من أن المسار صحيح

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={property1}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Home Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Heading */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Your Property, Our Priority
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Discover the best properties available for sale and rent. We offer a wide range of options to suit your needs.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-custom-blue-dark text-white font-semibold text-lg rounded-lg shadow-md hover:bg-custom-blue-light transition duration-300"
          >
            Contact Us
          </a>
        </section>

        {/* About Section */}
        <section className="relative bg-transparent py-12 px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Our company was founded with the vision of delivering top-quality services and creating innovative solutions. With a team of dedicated professionals, we strive to exceed expectations and set new standards in our industry.
              </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  We are committed to providing outstanding service and value to our clients. Our mission is to drive success through innovation and excellence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  Our vision is to be a leader in our field by continuously improving and adapting to market trends while maintaining the highest standards of quality.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Integrity, innovation, and customer satisfaction are the core values that guide our actions and decisions. We are dedicated to upholding these principles in everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
