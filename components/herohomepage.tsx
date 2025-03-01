"use client"

import React, { useState } from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/text-generate';
import { useCurrentUser } from '@/hooks/use-current-user';
import MagicButton from './ui/MagicButton';
import { TiPencil } from 'react-icons/ti';
import { Button } from './ui/button';
import { LoginButton } from './ui/auth/login-button';

const HeroHome = () => {

    return (
        <div className="pb-20 pt-36">
            
            
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xl text-center text-blue-100 max-w-80'>
                        Eclipseria
                    </h2>
                    <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl mb-2' words={`Hello, welcome to Eclipseria`} />
                    <div className="flex flex-col items-center">
    
                        <LoginButton>
                            <MagicButton
                                title="Sign In"
                                icon=''
                                position='left'
                            />
                        </LoginButton>
    
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroHome;
