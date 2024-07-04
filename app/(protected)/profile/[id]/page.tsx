import { db } from '@/lib/db';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { FaUser } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

interface Params {
  params: {
    id: string;
  };
}

export default async function ProfilePage({ params }: Params) {
  const user = await db.user.findUnique({
    where: { id: params.id },
  });

  if (!user) {
    return <p className="text-center text-red-500">User not found</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <div className="flex flex-col items-center">
          <Avatar className="w-32 h-32 mb-4">
            <AvatarImage src={user.image || ''} />
            <AvatarFallback className="bg-sky-500 flex justify-center items-center">
              <FaUser className="text-white text-4xl" />
            </AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-semibold text-gray-800">{user.name}</h1>
          <p className="text-gray-600 mb-4">{"No bio available"}</p>
          <div className="flex space-x-4">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
              Follow
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
              Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
