// components/NavUsers.tsx
import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { FaUser } from 'react-icons/fa';

interface User {
  name: string;
  image: string | null;
}

export const NavUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user, index) => (
        <li
          className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[400px] shadow-sm m-5"
          key={index}
        >
          <p className="flex gap-x-2">{user.name}</p>
          <Avatar>
            <AvatarImage src={user.image || ''} />
            <AvatarFallback className="bg-sky-200">
              <FaUser className="text-white" />
            </AvatarFallback>
          </Avatar>
        </li>
      ))}
    </ul>
  );
};
