"use client";
import { User } from "@prisma/client";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface UserBoxProps {
  data: User;
}

const UserBox: React.FC<UserBoxProps> = ({ data }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/profile/${data.id}`);
  };

  return (
   
      <div
      className=" w-full relative flex items-center
      space-x-3 bg-gray-700 p-3 hover:bg-neutral-100
      rounded-lg transition cursor-pointer"
      onClick={onClick}
      >
        <Avatar >
          <AvatarImage src={data.image || ""} />
          <AvatarFallback className="bg-sky-500 flex justify-center items-center">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <div
            className="flex justify-between items-center
            mb-1"
            >
              <p className="text-sm font-medium
              text-gray-900">
                  {data.name}
              </p>
            </div>

          </div>

        </div>
      </div>
  );
};

export default UserBox;
