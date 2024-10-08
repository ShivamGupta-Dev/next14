// pages/shop.js
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Header } from '@/components/ui/auth/header';
import { HeaderPro } from '../_components/header';
import { FormError } from "@/components/form-error";
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { FormSuccess } from '@/components/form-success';
import Link from 'next/link';

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
       

    <div >
       <Card className="w-[400px] shadow-md mt-10">
      <CardHeader>
        <HeaderPro label="Product"/>
      </CardHeader>
      <CardContent className='flex flex-col items-center justify-center'>
          <img src="https://m.media-amazon.com/images/I/61o8j2ohWvL._SY450_.jpg" alt="Highlighter"  
          className='w-[200px] '/>
        <p>FLAIR Pastel 5 Shades Hi-lighter Pouch Pack</p>
        <Link href='https://amzn.to/3zwzCIJ' className='text-blue-600'>
         <h1>🔗https://amzn.to/3zwzCIJ</h1>
        </Link>
      </CardContent>
      <CardFooter>
        
        <FormSuccess message='Note: By purchasing through this affiliate Amazon link, you are supporting us as we receive a commission from your purchase at no extra cost to you.
           Thank you for your support!'/>
      </CardFooter>
      
    </Card>
    <Card className="w-[400px] shadow-md mt-10 mb-10">
      <CardHeader>
        <HeaderPro label="Product"/>
      </CardHeader>
      <CardContent className='flex flex-col items-center justify-center'>
          <img src="https://m.media-amazon.com/images/I/61uA2UVnYWL._SL1500_.jpg" alt="Ipad 10th Gen"  
          className='w-[200px] '/>
        <p>Apple iPad (10th generation): with A14 Bionic chip, 27.69 cm (10.9″) Liquid Retina display, 64GB, Wi-Fi 6, 12MP front/12MP back camera, Touch ID</p>
        <Link href='https://amzn.to/4bH3oI6' className='text-blue-600'>
         <h1>🔗https://amzn.to/4bH3oI6</h1>
        </Link>
      </CardContent>
      <CardFooter>
        
        <FormSuccess message='Note: By purchasing through this affiliate Amazon link, you are supporting us as we receive a commission from your purchase at no extra cost to you.
           Thank you for your support!'/>
      </CardFooter>
      
    </Card>
    </div>
  );
};

export default Shop;
