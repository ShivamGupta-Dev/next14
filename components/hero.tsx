"use client"

import React, { useState } from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/text-generate';
import { useCurrentUser } from '@/hooks/use-current-user';
import MagicButton from './ui/MagicButton';
import { TiPencil } from 'react-icons/ti';
import { Button } from './ui/button';

const Hero = () => {
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
                        Settings
                    </h2>
                    <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl mb-2' words={`Hello, ${user?.name || 'user'}`} />
                    <div className="flex flex-col items-center">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="border rounded p-2 mb-4"
                            placeholder="Enter your new name"
                        />
                        
                            <MagicButton
                                title="Update"
                                icon={<TiPencil />}
                                position='left'
                                handleClick={handleSubmit}
                            />
    
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
