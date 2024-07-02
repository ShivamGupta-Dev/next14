"use client";

import { UserButton } from "@/components/ui/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 flex justify-between items-center p-4 shadow-md z-50">
      <div className="flex gap-x-4">
        <Button asChild variant={pathname === "/users" ? "default" : "outline"}>
          <Link href="/users">
            Users
          </Link>
        </Button>
        <Button asChild variant={pathname === "/settings" ? "default" : "outline"}>
          <Link href="/settings">
            Settings
          </Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
