import React from 'react';
import { useParams } from 'react-router-dom';

// Import images for each property
import property1_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property1_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property1_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property2_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property2_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property2_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property3_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property3_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property3_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property4_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property4_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property4_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property5_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property5_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property5_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property6_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property6_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property6_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property7_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property7_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property7_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property8_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property8_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property8_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property9_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property9_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property9_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property10_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property10_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property10_3 from'../../assets/shutterstock_245476081-800x534-1.jpg';
import property11_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property11_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property11_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property12_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property12_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property12_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property13_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property13_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property13_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property14_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property14_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property14_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property15_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property15_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property15_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property16_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property16_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property16_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property17_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property17_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property17_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property18_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property18_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property18_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property19_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property19_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property19_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property20_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property20_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property20_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property21_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property21_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property21_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property22_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property22_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property22_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property23_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property23_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property23_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property24_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property24_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property24_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property25_1 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property25_2 from '../../assets/shutterstock_245476081-800x534-1.jpg';
import property25_3 from '../../assets/shutterstock_245476081-800x534-1.jpg';

// Array of image sets
const imageSets = {
  1: [property1_1, property1_2, property1_3],
  2: [property2_1, property2_2, property2_3],
  3: [property3_1, property3_2, property3_3],
  4: [property4_1, property4_2, property4_3],
  5: [property5_1, property5_2, property5_3],
  6: [property6_1, property6_2, property6_3],
  7: [property7_1, property7_2, property7_3],
  8: [property8_1, property8_2, property8_3],
  9: [property9_1, property9_2, property9_3],
  10: [property10_1, property10_2, property10_3],
  11: [property11_1, property11_2, property11_3],
  12: [property12_1, property12_2, property12_3],
  13: [property13_1, property13_2, property13_3],
  14: [property14_1, property14_2, property14_3],
  15: [property15_1, property15_2, property15_3],
  16: [property16_1, property16_2, property16_3],
  17: [property17_1, property17_2, property17_3],
  18: [property18_1, property18_2, property18_3],
  19: [property19_1, property19_2, property19_3],
  20: [property20_1, property20_2, property20_3],
  21: [property21_1, property21_2, property21_3],
  22: [property22_1, property22_2, property22_3],
  23: [property23_1, property23_2, property23_3],
  24: [property24_1, property24_2, property24_3],
  25: [property25_1, property25_2, property25_3],
};

// Dummy data
const productDetails = Array.from({ length: 25 }, (_, index) => ({
  id: index + 1,
  images: imageSets[index + 1] || [], // Use imported images based on the ID
  description: `This is a detailed description of Property ${index + 1}. It includes all the features and amenities available.`,
  price: Math.floor(Math.random() * 10000) + 1000,
  type: Math.random() > 0.5 ? 'For Sale' : 'For Rent',
}));

const ProductDetail = () => {
  const { id } = useParams();
  console.log('Product ID:', id); // تحقق من أن المعرف يتم استرجاعه بشكل صحيح
  const product = productDetails.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-12"><h2 className="text-2xl font-bold text-gray-800">Product not found</h2></div>;
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Property Details</h1>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-2/3 space-y-4">
            {product.images.map((img, index) => (
              <img key={index} src={img} alt={`Property ${product.id} Image ${index + 1}`} className="w-full h-auto object-cover rounded-lg shadow-lg"/>
            ))}
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{product.type}</h2>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-bold text-gray-800">
              ${product.price.toLocaleString()} {product.type === 'For Rent' ? '/month' : ''}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
