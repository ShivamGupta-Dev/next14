"use client"
import v1 from '@/images/v1.png'
import v2 from '@/images/v2.png'
import v3 from '@/images/v3.png'
import v4 from '@/images/v4.png'
import v5 from '@/images/v5.png'
import v6 from '@/images/v6.png'
import v7 from '@/images/v7.png'
import Image from 'next/image';
import React, { useState } from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/text-generate';
import { useCurrentUser } from '@/hooks/use-current-user';
import MagicButton from './ui/MagicButton';
import { TiPencil } from 'react-icons/ti';
import { Button } from './ui/button';

const Hero2 = () => {
    const user = useCurrentUser();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async () => {
        if (inputValue.trim() !== '') {
            try {
                const response = await fetch('/api/updateName', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: inputValue, email: user?.email }),
                });

                if (response.ok) {
                    console.log('Name updated successfully');
                    // Optionally, update local state or context with the new name
                } else {
                    console.error('Failed to update name:', await response.json());
                }
            } catch (error) {
                console.error('Error updating name:', error);
            }
        }
    };

    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xl text-center text-blue-100 max-w-80'>
                        Screenshorts
                    </h2>
                    <div className="mt-8">
                        <Image
                            src={v1} // Local image
                            alt="Example Screenshot"
                            
                        />
                        
                    </div>
                    <div className="mt-8">
                        <Image
                            src={v2} // Local image
                            alt="Example Screenshot"
                            
                        />
                        
                    </div>
                    <div className="mt-8">
                        <Image
                            src={v3} // Local image
                            alt="Example Screenshot"
                            
                        />
                        
                    </div>
                    <div className="mt-8">
                        <Image
                            src={v4} // Local image
                            alt="Example Screenshot"
                            
                        />
                        
                    </div>
                    <div className="mt-8">
                        <Image
                            src={v5} // Local image
                            alt="Example Screenshot"
                            
                        />
                        
                    </div>
                    <div className="mt-8">
                        <Image
                            src={v6} // Local image
                            alt="Example Screenshot"
                            
                        />
                        
                    </div>
                    <div className="mt-8">
                        <Image
                            src={v7} // Local image
                            alt="Example Screenshot"
                            
                        />
                        
                    </div>
                        
                    
                </div>
            </div>
        </div>
    );
}

export default Hero2;
