import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import property1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property4 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property5 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property6 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property7 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property8 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property9 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property10 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property11 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property12 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property13 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property14 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property15 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property16 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property17 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property18 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property19 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property20 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property21 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property22 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property23 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property24 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property25 from '../../assets/shutterstock_245476081-800x534-1.jpg';

// Array of images
const images = [
  property1, property2, property3, property4, property5,
  property6, property7, property8, property9, property10,
  property11, property12, property13, property14, property15,
  property16, property17, property18, property19, property20,
  property21, property22, property23, property24, property25
];

// Dummy data
const products = Array.from({ length: 25 }, (_, index) => ({
  id: index + 1,
  image: images[index],
  type: Math.random() > 0.5 ? 'For Sale' : 'For Rent',
  price: Math.floor(Math.random() * 10000) + 1000,
}));

const Products = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Properties</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={product.image} alt={`Property ${product.id}`} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.type}</h3>
                <p className="text-gray-600 mb-4">
                  ${product.price.toLocaleString()} {product.type === 'For Rent' ? '/month' : ''}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="inline-block px-4 py-2 bg-custom-blue-dark text-white font-semibold rounded-lg shadow-md hover:bg-custom-blue-light transition duration-300"
                >
                  More Info
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
