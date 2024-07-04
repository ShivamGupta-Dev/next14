"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/db';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { auth } from '@/auth';
import { getSession } from 'next-auth/react';

const SettingsPage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const handleNameChange = async (e: React.FormEvent) => {
    e.preventDefault();

    const session = await getSession();
    if (!session) {
      setMessage('You must be logged in to update your name.');
      return;
    }

    const response = await fetch('/api/update-name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email: session.user?.email }),
    });

    if (response.ok) {
      setMessage('Name updated successfully.');
      router.refresh();  // Refresh the page or redirect if needed
    } else {
      setMessage('Failed to update name.');
    }
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Settings</h1>
        <form onSubmit={handleNameChange} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">New Name</label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full"
              placeholder='Enter Your Name'
              required
            />
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
            Update Name
          </Button>
        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default SettingsPage;
