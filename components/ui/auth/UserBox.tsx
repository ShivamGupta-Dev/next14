"use client"
import { User } from "@prisma/client";
import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { FaUser } from 'react-icons/fa';

interface UseBoxProps {
    data: User,
}
const Userbox :React.FC<UseBoxProps> =({
    data
})=> {
    return(
        <ul>
        <li
          className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[400px] shadow-sm m-5"
        >
          <p className="flex gap-x-2">{data.name}</p>
          <Avatar>
            <AvatarImage src={data.image || ''} />
            <AvatarFallback className="bg-sky-200">
              <FaUser className="text-white" />
            </AvatarFallback>
          </Avatar>
        </li>
    </ul>
    )
}

export default Userbox;