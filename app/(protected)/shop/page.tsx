// pages/shop.js
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'link_to_image_1',
    affiliateLink: 'affiliate_link_1',
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'link_to_image_2',
    affiliateLink: 'affiliate_link_2',
  },
  // Add more products as needed
];

const Shop = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg shadow">
            
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <a href='https://amzn.to/3VXmrb4' className="text-blue-500 hover:underline mt-2 block">Buy Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
