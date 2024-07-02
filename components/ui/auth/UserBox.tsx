"use client";
import { User } from "@prisma/client";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";

interface UserBoxProps {
  data: User;
}

const UserBox: React.FC<UserBoxProps> = ({ data }) => {
  return (
    <ul className="flex flex-col items-center">
      <li className="bg-gray-100 flex justify-between items-center p-4 rounded-xl w-full max-w-md shadow-md my-3 transition-transform transform hover:scale-105">
        <p className="text-lg font-medium text-gray-800">{data.name}</p>
        <Avatar className="w-12 h-12 ml-4">
          <AvatarImage src={data.image || ""} />
          <AvatarFallback className="bg-sky-500 flex justify-center items-center">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </li>
    </ul>
  );
};

export default UserBox;
